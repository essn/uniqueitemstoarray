FROM node:16

RUN curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm

RUN useradd -ms /bin/bash finder

USER finder

WORKDIR /home/finder

COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json .
COPY src ./src

RUN pnpm install && \
  pnpm run compile