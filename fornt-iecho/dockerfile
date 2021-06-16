FROM node:12.22.1-alpine3.11

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app



CMD ["npm", "start"]