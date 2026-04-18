// Importamos express
const express = require('express');
// Creamos aplicacion express
const app = express();
// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor seguro funcionando') ;
});
// Exportamos para que server.js pueda usarlo
module.exports = app;
