# This docker-file is only used in development!

FROM node:14.16.1 AS build

WORKDIR /data

COPY . ./

RUN npm install

FROM node:14.16.1

EXPOSE 3000

WORKDIR /data

RUN npm install -g nodemon

COPY --from=build /data ./

CMD ["node", "app.js"]
