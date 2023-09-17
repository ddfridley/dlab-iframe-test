const express = require('express');
let server = express();
let port = process.env.PORT || 3333;

server.get('/dev', (request, response) => {
    // __dirname is the absolute path of the currently executing file, index.js
    // if you don't specify a root option then use an absolute path for the html file
    response.sendFile('./public/dev.html', { root: __dirname });
})
server.get('/', (request, response) => {
    // __dirname is the absolute path of the currently executing file, index.js
    // if you don't specify a root option then use an absolute path for the html file
    response.sendFile('./public/misc_html.html', { root: __dirname });
})
server.listen(port, () => { console.log(`Server listening on port ${port}.`); });