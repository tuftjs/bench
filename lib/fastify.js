'use strict';

const fastify = require('fastify')();

fastify.get('/', () => {
  return 'Hello, world!\n';
});

fastify.listen(3000, '0.0.0.0', () => {
  console.log('Server is running.');
});
