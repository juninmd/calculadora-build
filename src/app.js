const path = require('path');
const express = require('express');
const engines = require('consolidate');

const ROOT_DIR = path.join(__dirname, '..');
const DEFAULT_PORT = 8080;

/**
 * Parses a raw PORT value into a valid listening port.
 *
 * Falls back to DEFAULT_PORT when the raw value is missing, empty, or not a
 * positive integer, so misconfigured deployments keep working.
 *
 * @param {string|number|undefined} rawPort - raw port value (e.g. process.env.PORT).
 * @returns {number} a valid port number.
 */
function resolvePort(rawPort = process.env.PORT) {
  const port = Number(rawPort);
  return Number.isInteger(port) && port > 0 ? port : DEFAULT_PORT;
}

/**
 * Builds the Express application for the Calculadora SPA.
 *
 * Serves the static build output from publicDir and falls back to rendering
 * index.html for every other GET request (Angular deep links / hard reloads).
 *
 * @param {object} [options] - app configuration.
 * @param {string} [options.publicDir=ROOT_DIR] - directory with static assets.
 * @param {string} [options.viewsDir=ROOT_DIR] - directory holding index.html.
 * @returns {object} configured, not-yet-listening Express app.
 */
function createApp({ publicDir = ROOT_DIR, viewsDir = ROOT_DIR } = {}) {
  const app = express();

  app.use(express.static(publicDir));

  app.set('views', viewsDir);
  app.engine('html', engines.mustache);
  app.set('view engine', 'html');

  app.get('*', (req, res) => {
    res.render('index.html');
  });

  return app;
}

module.exports = { createApp, resolvePort, ROOT_DIR, DEFAULT_PORT };
