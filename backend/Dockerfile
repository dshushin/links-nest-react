FROM node:16.8.0-alpine

WORKDIR /backend

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY src src

RUN yarn build

EXPOSE 4000

CMD ["yarn", "run", "start"]