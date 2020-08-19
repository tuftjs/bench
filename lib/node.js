const { createServer } = require('http');

const body = 'Hello, world!';

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {
      ['content-type']: 'text/plain; charset=utf-8',
      ['content-length']: body.length,
    })
    res.end(body);
    return;
  }

  res.statusCode = 404;
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running.');
});
