'use strict';

const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Hello, world!\n');
});

app.listen(3000, () => {
  console.log('Server is running.');
});
