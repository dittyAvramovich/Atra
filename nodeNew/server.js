
const http = require('http');
const port = 4000;
const app = require('./app');


const server = http.createServer(app);

// server.httpServer.listen(8081, "172.17.17.212");

server.listen(port);

