const { createRouteMap } = require('tuft');

void async function() {
  const app = createRouteMap();

  app.set('GET /', () => {
    return {
      text: 'Hello, world!',
    };
  });

  const server = app.createServer({
    host: 'localhost',
    port: 3000,
  });


  await server.start();

  console.log('Server is running.');
}();
