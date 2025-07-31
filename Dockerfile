# Use a lightweight Nginx image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files from the current directory to the Nginx html directory
COPY . .

# Expose port 80
EXPOSE 80
