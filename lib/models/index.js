const Sequelize = require('sequelize');
const { database, username, password, options } = require('../config').db;


const db = new Sequelize(database, username, password, options);
const Contact = require('./contact')(db);

module.exports = {
  db,
  Contact,
};

db.sync();