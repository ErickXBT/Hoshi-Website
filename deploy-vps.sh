#!/bin/bash

# ==============================================================================
# Hoshi Website VPS Deployment Script
# Target OS: Ubuntu 24.04 LTS
# Target Domain: usehoshi.xyz
# ==============================================================================

# Exit on error
set -e

# Configuration
DOMAIN="usehoshi.xyz"
WEB_ROOT="/var/www/hoshi-website"
VITE_APP_DIR="$WEB_ROOT/artifacts/hoshi-swap"

# Color Codes for Pretty Output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}          Hoshi Website VPS Autodeploy Script         ${NC}"
echo -e "${BLUE}======================================================${NC}"

# 1. Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run this script as root (sudo bash deploy-vps.sh).${NC}"
  exit 1
fi

# 2. Update System Packages
echo -e "${YELLOW}Step 1: Updating system packages...${NC}"
apt update && apt upgrade -y

# 3. Install Nginx and Git and Certbot
echo -e "${YELLOW}Step 2: Installing Nginx, Git, and Certbot...${NC}"
apt install -y nginx git curl build-essential certbot python3-certbot-nginx

# 4. Install Node.js v20 (LTS)
if ! command -v node &> /dev/null; then
  echo -e "${YELLOW}Step 3: Node.js not found. Installing Node.js v20...${NC}"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
else
  echo -e "${GREEN}Node.js is already installed: $(node -v)${NC}"
fi

# 5. Install PNPM
if ! command -v pnpm &> /dev/null; then
  echo -e "${YELLOW}Step 4: Installing pnpm globally...${NC}"
  npm install -g pnpm
else
  echo -e "${GREEN}pnpm is already installed: $(pnpm -v)${NC}"
fi

# 6. Build the Application
echo -e "${YELLOW}Step 5: Installing dependencies and building Hoshi Swap...${NC}"
cd "$WEB_ROOT"

# Ensure we have correct permissions
chown -R root:root "$WEB_ROOT"

# Run pnpm install
pnpm install

# Build hoshi-swap with required environment variables
echo -e "${YELLOW}Building frontend assets...${NC}"
PORT=3000 BASE_PATH="/" pnpm --filter @workspace/hoshi-swap run build

# Verify build output
if [ -d "$VITE_APP_DIR/dist/public" ]; then
  echo -e "${GREEN}Build succeeded! Output directory: $VITE_APP_DIR/dist/public${NC}"
else
  echo -e "${RED}Build failed: output directory $VITE_APP_DIR/dist/public not found.${NC}"
  exit 1
fi

# 7. Configure Nginx
echo -e "${YELLOW}Step 6: Configuring Nginx...${NC}"
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

cat > "$NGINX_CONF" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    root $VITE_APP_DIR/dist/public;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript;
    gzip_disable "MSIE [1-6]\.";

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|svg|webp|woff|woff2|mp4|webm)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, no-transform";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    error_log  /var/log/nginx/hoshi-error.log error;
    access_log /var/log/nginx/hoshi-access.log;
}
EOF

# Enable the Nginx site
if [ -f "/etc/nginx/sites-enabled/$DOMAIN" ]; then
  rm "/etc/nginx/sites-enabled/$DOMAIN"
fi
ln -s "$NGINX_CONF" "/etc/nginx/sites-enabled/"

# Remove default Nginx site if active to avoid conflicts
if [ -f "/etc/nginx/sites-enabled/default" ]; then
  rm "/etc/nginx/sites-enabled/default"
fi

# Test Nginx Config
nginx -t

# Restart Nginx
systemctl restart nginx
echo -e "${GREEN}Nginx successfully configured and restarted!${NC}"

# 8. SSL Certificate setup with Certbot
echo -e "${YELLOW}Step 7: Checking DNS configuration for SSL...${NC}"
# Simple DNS check before certbot to avoid failure
VPS_IP=$(curl -s https://api.ipify.org)
DOMAIN_IP=$(dig +short $DOMAIN | tail -n1)

echo -e "VPS Public IP: $VPS_IP"
echo -e "$DOMAIN IP: $DOMAIN_IP"

if [ "$VPS_IP" == "$DOMAIN_IP" ]; then
  echo -e "${GREEN}DNS is pointing correctly. Setting up Let's Encrypt SSL...${NC}"
  certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN || true
  echo -e "${GREEN}SSL configuration completed!${NC}"
else
  echo -e "${YELLOW}WARNING: DNS is not pointing to this VPS yet or has not propagated.${NC}"
  echo -e "${YELLOW}Please point A Record of $DOMAIN and www.$DOMAIN to $VPS_IP.${NC}"
  echo -e "${YELLOW}Once the DNS is active, run the following command manually to get SSL:${NC}"
  echo -e "${BLUE}sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN${NC}"
fi

echo -e "${GREEN}======================================================${NC}"
echo -e "${GREEN}          Deployment Finished Successfully!          ${NC}"
echo -e "${GREEN}          Website is hosted at http://$DOMAIN        ${NC}"
echo -e "${GREEN}======================================================${NC}"
