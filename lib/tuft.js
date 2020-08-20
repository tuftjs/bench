'use strict';

const { tuft } = require('tuft');

tuft()
  .set('GET /', () => {
    return { text: 'Hello, world!' };
  })
  .createServer({ port: 3000 })
  .start()
  .then(() => console.log('Server is running.'));
