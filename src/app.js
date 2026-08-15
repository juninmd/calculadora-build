const path = require('path');
const express = require('express');
const engines = require('consolidate');

const createApp = () => {
  const app = express();
  const root = path.resolve(__dirname, '..');

  app.use(express.static(root));

  app.set('views', root);
  app.engine('html', engines.mustache);
  app.set('view engine', 'html');

  app.get('/*', (req, res) => {
    res.render('index.html');
  });

  return app;
};

module.exports = createApp;
