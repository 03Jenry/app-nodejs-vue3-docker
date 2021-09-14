# !/bin/bash
# Programa para ejecutar los contenedores

backend=$(pwd)/backend;
frontend=$(pwd)/frontend;
docker-compose down

docker run --rm -v $backend:/usr/app -w /usr/app node:13-slim npm install
docker run --rm -v $backend:/usr/app -w /usr/app node:13-slim npm install nodemon

docker run --rm -v $frontend:/app -w /app node:13-slim npm install
docker run --rm -v $frontend:/app -w /app node:13-slim npm install @vue/cli

#Desplegar docker-compose
docker-compose up --build

#docker run --rm -v /home/jenry/containers/app/frontend:/app -w /app node:13-slim npm run build 