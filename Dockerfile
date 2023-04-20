# syntax=docker/dockerfile:1

# Use LTS version
FROM node:18.16.0-alpine AS builder
WORKDIR /workspace/

# Install dependencies using `npm ci`
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
COPY ./package.json ./package-lock.json ./
RUN npm ci

# Copy necessary files and build
COPY ./index.html ./vite.config.js ./
COPY ./docker/ ./docker/
COPY ./public/ ./public/
COPY ./src/ ./src/
RUN npm run build

# Copy bundle files to mounted volume
FROM alpine:3.17.3
WORKDIR /workspace/
COPY --from=builder /workspace/docker/ ./docker/
COPY --from=builder /workspace/dist/ ./dist/
ENTRYPOINT ["/bin/sh", "/workspace/docker/copy.sh"]

LABEL author.name="Vu Tong"
LABEL author.email="tonghoangvu@outlook.com"
