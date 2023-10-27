FROM node:14.19.1-alpine3.15

USER node

ENV COMPOSE_PROJECT_NAME='cupcakes'
ENV ENV=dev

WORKDIR /usr/src/api

ENTRYPOINT [ "sh", "start-dev.sh" ]

EXPOSE 3001
