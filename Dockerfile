FROM node:latest
COPY . /app
WORKDIR /app
RUN npm ci
EXPOSE 3000
CMD [ "npm","rum","start" ]