# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the static files from the current directory to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
