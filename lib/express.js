const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.end('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running.');
});
