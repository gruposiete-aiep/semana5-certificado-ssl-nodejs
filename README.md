# Servidor HTTPS con Node.js + Express + OpenSSL

> **CIB302 – Taller de Plataformas Web | Semana 5**  
> Actividad Formativa: Configuración de servidor HTTPS con certificado SSL auto-firmado

---

## Equipo

| Integrante | GitHub | Rol |
|---|---|---|
| Sebastián Alvarez | [@seba23ar](https://github.com/seba23ar) | Scaffold del proyecto |
| José Alvarez | [@Arshael](https://github.com/Arshael) | Certificados SSL |
| Ignacio de la Vega | [@NachooDV](https://github.com/NachooDV) | Lógica de rutas |

---

## Descripción

Implementación de un servidor HTTPS funcional en Node.js utilizando el framework **Express** y un certificado SSL auto-firmado generado con **OpenSSL**. El proyecto demuestra la diferencia entre HTTP y HTTPS, el proceso de TLS Handshake y el uso de criptografía asimétrica en el backend.

---

## Estructura del Proyecto

```
proyecto/
├── app.js          # Inicializa Express y exporta la aplicación
├── server.js       # Crea el servidor HTTPS con el módulo nativo de Node.js
├── routes.js       # Lógica de rutas con express.Router()
├── certs/          # Carpeta para los certificados SSL (archivos ignorados por .gitignore)
│   ├── server.key  # NO incluido en el repo (clave privada)
│   └── server.crt  # NO incluido en el repo (certificado público)
├── package.json    # Dependencias del proyecto (Express 5.x)
└── .gitignore      # Ignora *.key y *.crt dentro de certs/
```

---

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [OpenSSL](https://www.openssl.org/) instalado en el sistema
- npm

---

## Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/<usuario>/<repositorio>.git
cd <repositorio>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Generar el certificado SSL

Los certificados **no están incluidos** en el repositorio por razones de seguridad. Debes generarlos localmente:

```bash
# Crear la carpeta de certificados
mkdir certs

# Generar clave privada y certificado auto-firmado (válido por 365 días)
openssl req -x509 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt -days 365 -nodes
```

> Durante la ejecución del comando, OpenSSL pedirá algunos datos del certificado (país, organización, etc.). Puedes completarlos o dejarlos en blanco para un entorno de desarrollo.

### 4. Iniciar el servidor

```bash
node server.js
```

La terminal confirmará:

```
Servidor HTTPS escuchando en https://localhost:443
```

### 5. Acceder en el navegador

Abre **https://localhost** en tu navegador.

> **Advertencia esperada:** El navegador mostrará un aviso de seguridad porque el certificado es auto-firmado y no proviene de una CA reconocida. Esto es completamente normal en desarrollo. Haz clic en *"Opciones avanzadas" → "Continuar de todos modos"* para acceder.

---

## Rutas disponibles

| URL | Tipo | Descripción |
|---|---|---|
| `https://localhost/` | HTML | Página de bienvenida con enlaces a las demás rutas |
| `https://localhost/status` | JSON | Estado del servidor (`{ status: 'ok', protocolo: 'HTTPS', puerto: 443 }`) |
| `https://localhost/seguridad` | JSON | Información educativa sobre el certificado y TLS |
| `https://localhost/equipo` | JSON | Integrantes del grupo y sus roles |
| `https://localhost/informe` | HTML | Resumen con enlace al informe del proyecto |

---

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express 5.x](https://expressjs.com/)
- [OpenSSL](https://www.openssl.org/)
- Módulos nativos: `https`, `fs`

---

*Actividad formativa – Semana 5 | Taller de Plataformas Web | 2026*
