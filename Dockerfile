FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY public /var/www/html/public