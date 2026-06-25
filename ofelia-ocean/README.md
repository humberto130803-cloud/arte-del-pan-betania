# OFELIA Ocean — Website

Sitio de una sola página, estático, construido exactamente según la especificación
(un único `index.html` con todo el CSS y JS inline, sin librerías externas salvo
Google Fonts).

## Despliegue (Vercel)

Es un sitio estático. Desde esta carpeta:

```bash
vercel --prod
```

Vercel auto-detecta el directorio estático y publica `index.html`. No requiere build.

## Imágenes

Actualmente las secciones usan los gradientes placeholder definidos en el prompt.
Cuando estén las fotos reales, colócalas en `images/` y descomenta/añade los overrides
de `background-image` indicados al final del prompt original.
