FROM node:18-alpine

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies with a faster registry
RUN npm config set registry https://registry.npmmirror.com && \
    npm install --prefer-offline --no-audit --no-fund

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]