'use strict';

const { tuft } = require('tuft');

tuft()
  .set('GET /', () => ({ text: 'Hello, world!\n' }))
  .createServer({
    host: '0.0.0.0',
    port: 3000,
   })
  .start()
  .then(() => console.log('Server is running.'));
