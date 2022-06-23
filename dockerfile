# syntax=docker/dockerfile:1
FROM node:14

WORKDIR /societe

COPY . .
RUN apt-get update

RUN apt install yarn -y
RUN yarn install