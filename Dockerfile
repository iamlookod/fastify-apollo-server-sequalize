FROM node:14-alpine as developement

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM node:14-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .
COPY --from=developement /usr/app/dist ./dist

CMD ["npm", "run", "start:prod"]