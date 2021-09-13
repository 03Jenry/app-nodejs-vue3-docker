# pull the Node.js Docker image
FROM node:alpine

RUN mkdir -p /usr/app/node_modules && chown -R node:node /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g nodemon

COPY --chown=node:node . .

EXPOSE 5000

USER node

CMD [ "npm", "start" ]
