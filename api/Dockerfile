# Stage 1: Build
FROM node:20 AS build
WORKDIR /app
# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .

# Stage 2: Run
FROM node:20
WORKDIR /app
# Copy only the necessary files from the build stage
COPY --from=build /app ./
# Expose the application port
EXPOSE 3001
# Command to run the application
CMD ["node", "index.js"]