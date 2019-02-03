const config = require('config');

const db = config.get('db');
const server = config.get('server');

server.forks = server.forks || require('os').cpus().length;

module.exports = { db, server };
