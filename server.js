const { createApp, resolvePort } = require('./src/app');

const port = resolvePort(process.env.PORT);
const app = createApp();

app.listen(port, () => {
  console.log(`Aplicação ativa :D |http://localhost:${port}`);
});
