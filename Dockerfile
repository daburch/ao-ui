FROM node:16.14.2-alpine3.15


WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]