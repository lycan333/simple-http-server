FROM node:alpine3.19


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --force

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD ["sh", "-c", "UUID=$(head -c 12 /dev/random | base64) && export CONTAINER_UUID=$UUID &&  node server.js"]