# --- Build Stage ---
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (take advantage of Docker caching)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build TypeScript → JavaScript
RUN npm run build


# --- Runtime Stage ---
FROM node:22-alpine

WORKDIR /app

# Copy package files & install ONLY production deps
COPY package*.json ./
RUN npm install --production

# Copy built JS from builder stage
COPY --from=builder /app/dist ./dist

# Non-root user (required for OKD)
USER node

# Expose application port
EXPOSE 3000
# ⚠ Change if your app uses a different port

# Run the compiled JS output
CMD ["node", "dist/index.js"]