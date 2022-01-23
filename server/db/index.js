//this is the access point for all things database related!

const db = require('./db');
const waitingClient = require('./models/waitingClient')
//associations


// models
module.exports = {
  db,
  waitingClient
};
