'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello, World!\n';
    },
  });

  await server.start();

  console.log('Server is running.');
};

init();
