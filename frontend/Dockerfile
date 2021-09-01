FROM node:16.8.0-alpine

WORKDIR /frontend

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY src src

COPY public public

CMD ["yarn", "start"]