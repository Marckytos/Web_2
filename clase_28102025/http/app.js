const http = require('http');

const port = 3309;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hola mundo');
});

server.listen((port,()=>{
    console.log(`Servidor: http://127.0.0.1:${port}`);

}));

