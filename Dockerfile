# Use an official Node.js runtime as the base image
FROM node:18
 
# Set the working directory inside the container
WORKDIR /usr/src/app
 
# Copy package.json and package-lock.json files to the container
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application files to the container
COPY . .
 
# Expose the port the app runs on
EXPOSE 3000
 
# Start the application in development mode
CMD ["npm", "run", "dev"]