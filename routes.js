// ============================================================
// routes.js - Lógica de rutas del servidor HTTPS en Express
// Asignatura: Taller de Plataformas Web - Semana 5
// Unidad 2: Programación Segura
// ============================================================

const express = require('express');
const router = express.Router(); // express.Router() es la forma correcta (no express.Routes)

// ------------------------------------------------------------
// RUTA: GET /
// Descripción: Página principal del servidor HTTPS.
// Confirma visualmente que el servidor está corriendo con HTTPS.
// ------------------------------------------------------------
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Servidor HTTPS - Semana 5</title></head>
      <body>
        <h1>🔒 Servidor HTTPS activo</h1>
        <p>Conexión segura establecida mediante certificado SSL auto-firmado.</p>
        <p>Protocolo utilizado: <strong>HTTPS / TLS</strong></p>
        <ul>
          <li><a href="/status">Ver estado del servidor</a></li>
          <li><a href="/seguridad">Ver información de seguridad</a></li>
          <li><a href="/equipo">Ver integrantes del equipo</a></li>
        </ul>
      </body>
    </html>
  `);
});

// ------------------------------------------------------------
// RUTA: GET /status
// Descripción: Retorna el estado actual del servidor en formato JSON.
// Útil para verificar que el servidor responde correctamente bajo HTTPS.
// ------------------------------------------------------------
router.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    protocolo: 'HTTPS',
    puerto: 8080,
    mensaje: 'El servidor está funcionando correctamente bajo HTTPS',
    timestamp: new Date().toISOString()
  });
});

// ------------------------------------------------------------
// RUTA: GET /seguridad
// Descripción: Retorna información educativa sobre el certificado
// SSL utilizado y el protocolo de seguridad configurado.
// ------------------------------------------------------------
router.get('/seguridad', (req, res) => {
  res.status(200).json({
    cifrado: 'TLS (Transport Layer Security)',
    tipo_certificado: 'Auto-firmado con OpenSSL',
    autoridad_certificadora: 'Ninguna (CA no reconocida)',
    advertencia_navegador: 'El navegador marca el sitio como inseguro porque el certificado no fue emitido por una CA de confianza',
    solucion_en_produccion: 'Usar un certificado emitido por una CA reconocida, como Let\'s Encrypt (gratuito) o proveedores comerciales como DigiCert o Comodo'
  });
});

// ------------------------------------------------------------
// RUTA: GET /equipo
// Descripción: Muestra los integrantes del grupo y sus roles
// en el desarrollo de la actividad.
// ------------------------------------------------------------
router.get('/equipo', (req, res) => {
  res.status(200).json({
    grupo: 'Grupo Siete',
    asignatura: 'Taller de Plataformas Web',
    semana: 5,
    integrantes: [
      {
        rol: 'Scaffold del proyecto',
        tarea: 'Generó la estructura base del servidor Node.js con Express'
      },
      {
        rol: 'Generación de certificados SSL',
        tarea: 'Generó la clave privada y el certificado con OpenSSL y configuró el servidor HTTPS'
      },
      {
        rol: 'Lógica de rutas',
        tarea: 'Implementó las rutas del servidor Express (router.js)'
      }
    ]
  });
});

// ------------------------------------------------------------
// RUTA: GET /informe
// Descripción: Informa al usuario que la documentación completa
// del proyecto se encuentra en el informe técnico grupal.
// ------------------------------------------------------------
router.get('/informe', (req, res) => {
  res.send(`
    <html>
      <head><title>Informe del Proyecto - Semana 5</title></head>
      <body>
        <h1>Informe Tecnico del Proyecto</h1>
        <p>Para mas informacion sobre esta actividad, incluyendo:</p>
        <ul>
          <li>Comandos utilizados para la generacion del certificado SSL con OpenSSL</li>
          <li>Explicacion de la configuracion HTTPS en Express</li>
          <li>Evidencias de pruebas realizadas en el navegador</li>
          <li>Reflexion sobre certificados auto-firmados vs entornos productivos reales</li>
          <li>Roles del equipo y evidencias de trabajo colaborativo</li>
        </ul>
        <p>Consulta el <strong>informe tecnico grupal</strong> disponible en el repositorio del proyecto en GitHub.</p>
        <br>
        <a href="/">Volver al inicio</a>
      </body>
    </html>
  `);
});

// ------------------------------------------------------------
// Exportar el routes para usarlo en server.js
// En server.js se debe agregar: app.use('/', require('./routes'));
// ------------------------------------------------------------
module.exports = router;
