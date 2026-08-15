const createApp = require('./app');

const createServer = (port) => {
  const server = createApp().listen(port, () => {
    console.log(`Aplicação ativa :D | http://localhost:${server.address().port}`);
  });
  return server;
};

const main = () => {
  const port = Number(process.env.PORT) || 8080;
  return createServer(port);
};

module.exports = { createServer, main };
