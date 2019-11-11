FROM node:10.16.3-alpine

EXPOSE 3000

WORKDIR /app
COPY . /app

RUN set -x && \
    yarn install --frozen-lockfile && \
    yarn run build 