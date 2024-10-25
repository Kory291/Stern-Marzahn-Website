FROM node:20.17.0-alpine

COPY . /app
WORKDIR /app

RUN npm install -g @angular/cli
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]