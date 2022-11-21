# Sample Social
A sample social media website. It is a full stack website using React for the front end, Spring Boot for the back end, and GraphQL for the API.

## Front end:
React + TS + Vite
tailwindcss + some sort of compronent library
Apollo client GraphQL

## Back end:
Spring Boot
GraphQL
MySQL

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

when building, common is copied into both client and server
client frontend is built to the static folder in the server
when server is run, it serves the react app to the user
