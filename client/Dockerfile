# Stage 1
FROM node:23-alpine AS builder

WORKDIR /client

COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

# Stage 2
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /client/dist /usr/share/nginx/html