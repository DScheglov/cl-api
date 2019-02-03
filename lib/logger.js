const winston = require('winston');
const expressWinston = require('express-winston');

const options = {
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
};

const errorOptions = {
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
};

const logger = winston.createLogger(options);
const expressLogger = expressWinston.logger(options);
const errorLogger = expressWinston.logger(errorOptions);


module.exports = { logger, expressLogger, errorLogger };