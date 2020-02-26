FROM node:11-alpine

WORKDIR /geo

COPY package.json .

RUN npm i --quiet
RUN npm i -g nodemon --quiet

COPY . .

EXPOSE 5000

CMD nodemon -L --watch . index.js