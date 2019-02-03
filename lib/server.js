const express = require('express');
const cors = require('cors');

const { mountPath, port } = require('./config').server;
const { logger, expressLogger, errorLogger } = require('./logger');

const app = express();
app.use(expressLogger);
app.use(cors());
app.use('/status', require('./hc'));
app.use(mountPath, express.json());
app.use(mountPath, require('./contacts/routes'));
app.use(require('./not-supported'));
app.use(errorLogger);

const startServer = port => new Promise(
  (resolve, reject) => app.listen(port,
    err => err != null ? reject(err) : resolve(port)
  )
);

const run = () => startServer(port)
  .then(port => {
    logger.info(`Worker ${process.pid} started.`);
    logger.info(`Listening: http://0.0.0.0:${port}`);
  })
  .catch(
    err => logger.error('Failed to start server', err)
  );

run();
