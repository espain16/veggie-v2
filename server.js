const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cred = require('./cred/auth')
const rate = require('./routes/rating')
const restaurant = require('./routes/restaurant')
const foodTruck = require('./routes/foodTruck')
require("dotenv").config();

const server = express();

server.use(helmet());

//server.use(morgan("combined"));
server.use(express.json());

server.use(cors());
// server.options("*", cors());
server.use('/creds',cred)
// server.use('/',foodTruck)
server.use('/',restaurant)
// server.use('/',rate)
module.exports = server;
