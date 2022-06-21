# LAB - Class 401

## Project: Basic Express Server

### Author: Cody Davis

### Problem Domain
Setting up a basic express server to configure heroku deployment and to create tests for basic routes. Implemented with sequelize.

### Links and Resources
- [Github](https://github.com/Cozhee/basic-api-server/pulls)
- [Heroku Dev Deployment](https://lab03-api.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)
- `USERNAME=<db-username>`
- `PW=<db-password>`
- `DB_NAME=<db-name>`
- `HOST=<host-url>`

#### How to initialize/run your application (where applicable)
`npm install` to get the dependencies
`nodemon` to run the server
Open `http://localhost:3001/` to view the server

If you visit [Heroku Dev Deployment](https://lab03-api.herokuapp.com/) you may have to manually type the routes into the URL to see proof of life. This is currently just a backend API server.

You will need a JSON object in your `POST` method in order to create a food item.
#### How to use your library (where applicable)
N/A

#### Features / Routes
- Feature One: Added route
- GET : `/`

- Feature Two: Added food route
- GET: `/food`
- GET: `/food/:id`
- POST: `/food`
- PUT: `/food/:id`
- DELETE: `/food`


- Feature Two: Added clothes route
- GET: `/clothes`
- GET: `/clothes/:id`
- POST: `/clothes`
- PUT: `/clothes/:id`
- DELETE: `/clothes`

#### Tests
To run tests type `npm test`. Server does not need to be running in another instance
Basic tests that will check if routes are working correctly

