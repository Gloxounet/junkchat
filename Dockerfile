# pull official base image
FROM node:latest

# set working directory
WORKDIR /

# install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# add app
COPY . ./

# start app
CMD ["npm", "start"]