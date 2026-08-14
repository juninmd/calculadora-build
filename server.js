/**
 * Application entry point.
 *
 * Starts the hardened calculadora HTTP server on the configured port.
 */

'use strict';

const { loadConfig } = require('./src/config');
const { createApp } = require('./app');

const config = loadConfig();
const app = createApp();

app.listen(config.port, () => {
  console.log(
    `Aplicação ativa :D |http://localhost:${config.port}`
  );
});
