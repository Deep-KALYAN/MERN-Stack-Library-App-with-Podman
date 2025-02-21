# Use Node.js 20 as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set proper permissions
RUN chown -R node:node /app
USER node

# Expose the port the app runs on
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]