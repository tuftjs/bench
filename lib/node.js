const { createServer } = require('http2');

const body = 'Hello, world!';

const server = createServer();

server.on('stream', (stream, headers) => {
  if (headers[':method'] === 'GET' && headers[':path'] === '/') {
    stream.respond({
      ['content-type']: 'text/plain; charset=utf-8',
      ['content-length']: body.length,
    });
    stream.end(body);
    return;
  }

  stream.respond({
    [':status']: 404,
  }, { endStream: true });
});

server.listen(3000, () => {
  console.log('Server is running.');
});
