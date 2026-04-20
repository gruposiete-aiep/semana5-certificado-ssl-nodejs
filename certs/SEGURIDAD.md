# Por qué los certificados no se suben al repositorio

Los archivos server.key y server.crt están excluidos del repositorio 
mediante .gitignore por las siguientes razones:

## Razones de seguridad

- La clave privada (server.key) es secreta y no debe compartirse
- Subir certificados al repositorio expone la seguridad del servidor
- Cada desarrollador debe generar sus propios certificados localmente
- En producción se usan certificados emitidos por autoridades certificadoras 
  como Let's Encrypt, no autofirmados

## Diferencia entre certificado autofirmado y CA

| Tipo | Uso | Confianza del navegador |
|---|---|---|
| Autofirmado (OpenSSL) | Desarrollo local | No confiable, muestra advertencia |
| Let's Encrypt | Producción gratuita | Confiable |
| CA Comercial | Producción empresarial | Confiable |