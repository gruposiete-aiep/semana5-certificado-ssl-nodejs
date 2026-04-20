# Comandos OpenSSL utilizados

## Generación de clave privada y certificado autofirmado

```
openssl req -x509 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt -days 365 -nodes -subj "/C=CL/ST=Region Metropolitana/L=La Florida/O=AIEP/CN=localhost"
```

## Explicación de cada parámetro

| Parámetro | Descripción |
|---|---|
| `req -x509` | Genera un certificado autofirmado |
| `-newkey rsa:2048` | Crea una clave privada RSA de 2048 bits |
| `-keyout certs/server.key` | Guarda la clave privada en ese archivo |
| `-out certs/server.crt` | Guarda el certificado en ese archivo |
| `-days 365` | El certificado expira en 1 año |
| `-nodes` | La clave no tiene contraseña |
| `-subj` | Datos del propietario del certificado |