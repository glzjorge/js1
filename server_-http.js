const http = require('http');
const hostname = '172.16.7.30';
const port = 3000;

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hola mundo\n');

});

server.listen(port, hostname, ()=>{

    console.log('El servidor esta corriendo en http://${hostname}:${port}/');
}

);