# Use official Node.js base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (including Vite if it's in package.json)
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Default command (e.g., run development server)
CMD ["npm", "run", "dev"]
