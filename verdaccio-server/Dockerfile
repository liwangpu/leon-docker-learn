FROM node:18.20.4-alpine AS builder

ARG VERDACCIO_URL=http://127.0.0.1:10104

WORKDIR /var/builder

COPY ./package-maker .

RUN npx npm-cli-login -u test -p test -e test@nocobase.com -r $VERDACCIO_URL
RUN yarn config set registry $VERDACCIO_URL
RUN yarn release:force --registry $VERDACCIO_URL

FROM node:18.20.4-alpine AS prod

WORKDIR /var/myapp

COPY ./package-user .


CMD [ "npm","run", "start" ]
