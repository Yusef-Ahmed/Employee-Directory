FROM node:23-alpine

WORKDIR /server

COPY package*.json .
RUN npm i
COPY . .

ENTRYPOINT ["sh", "/server/entrypoint.sh"]