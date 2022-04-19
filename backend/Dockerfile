FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install typescript && npm install -g ts-node
RUN npm install