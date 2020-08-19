const fastify = require('fastify')();

fastify.get('/', (_, res) => {
  res.send('Hello, world!');
});

fastify.listen(3000, '0.0.0.0', () => {
  console.log('Server is running.');
});
