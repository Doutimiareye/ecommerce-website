# Use an official Node runtime as the parent image
FROM node:lts

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if they exist)
COPY package*.json ./

# Install npm packages
RUN npm install


# Copy the current directory contents into the container at /app
COPY . .



# Make the container's port 80 available to the outside world
EXPOSE 3000

# Run app.js using node when the container launches
CMD ["node", "index.js"]
