FROM node:9-alpine

WORKDIR /sre_bootcamp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD [ "npm", "start" ]

# App must run on port 8000
# Add your instructions to dockerize the application

# Instructions to dockerize my application:

# 1.- Create de .env file with the correct values based on the .env.example file
# 2.- Execute the docker build -t wize-luis-garcia:latest . command on the node api root directory
# 3.- Then, to run the recently created/pulled container execute the
# docker run -p 8000:8000 wize-luis-garcia command or the docker container id, this will expose the
# indicated port 8000 on the host machine and it will be accesible to test from localhost:8000
