const fastify = require('fastify')({ http2: true });

fastify.get('/', (_, res) => {
  res.send('Hello, world!');
});

fastify.listen(3000, '0.0.0.0', () => {
  console.log('Server is running.');
});
