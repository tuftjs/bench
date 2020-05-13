const { createServer } = require('http2');
const Hapi = require('@hapi/hapi');

void async function() {
  const server = Hapi.server({
    listener: createServer(),
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello, World!';
    },
  });

  await server.start();

  console.log('Server is running.');
}();
