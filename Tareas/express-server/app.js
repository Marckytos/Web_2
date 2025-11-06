const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en la direccion: http://localhost:${PORT}`);
});

