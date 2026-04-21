// Módulo nativo de Node.js para crear servidores HTTPS
const https = require('https');
// Módulo nativo para leer archivos del sistema
const fs = require('fs');
// Importamos nuestra aplicación Express
const app = require('./app');
// Importamos las rutas definidas en routes.js
const routes = require('./routes');

// Registramos las rutas en la aplicación Express
app.use('/', routes);

// Opciones SSL: leemos la clave privada y el certificado desde la carpeta certs/
const options = {
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/server.crt')
};
// Creamos el servidor HTTPS y lo ponemos a escuchar en el puerto 443
https.createServer(options, app).listen(443, () => { 
    console.log('Servidor HTTPS corriendo en https://localhost:443');
});