const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor HTTP nativo funcionando correctamente');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en la direccion http://127.0.0.1:${PORT}`);
});


