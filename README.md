# Sample Social
A sample social media website. It is a full stack website using Next.js for the front end and Spring Boot for the back end.
I used GraphQL for the API.
FOR FUTURE: This repository is a monorepo managed by the Nx build system.

## Front end:
Next.js
Tailwindcss + Headless UI
Apollo GraphQL client

## Back end:
Spring Boot
GraphQL
PostgreSQL

## Project structure:
```
sample-social/
  common/
    common configuration goes here
  server/
    spring project goes here
  client/
    frontend goes here
```

FOR FUTURE: I should use Docker and Kubernetes for containerisation and microservice management.
FOR FUTURE: Use RabbitMQ for communication between microservices

FOR FUTURE: This repo will provide the tools necessary to build and deploy the web app, with each microservice possibly on it's own server, however, for testing, all containers will be run on the same machine.
FOR FUTURE: Look into Rasberry PI as developement servers
