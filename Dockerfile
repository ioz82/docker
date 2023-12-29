FROM node:latest
COPY . /app
WORKDIR /app
RUN npm ci
ENTRYPOINT npm rum start
EXPOSE 3000
