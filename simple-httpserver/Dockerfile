FROM node:18.20.4-alpine as builder

WORKDIR /var/builderapp

COPY . .

RUN yarn -v
RUN yarn install
RUN yarn build

FROM node:18.20.4-alpine as prod

WORKDIR /var/myapp

COPY --from=builder /var/builderapp/dist/. dist/.
COPY --from=builder /var/builderapp/package.json .

CMD [ "npm","run", "start" ]