//Create server using just node
// can use these 2 methos to create server
// const http = require('node:http');
const http = require('http');
console.log(http);
const server = http.createServer((req, res) => {
    // console.log(typeof req);
    // console.log(typeof res)
    console.log(req);
    res.write('Hello from the server');
    res.end();
});
// ports can be used fron 1040 to 65535
server.listen(6969,'localhost',() => {
    console.log('Server Started');
});