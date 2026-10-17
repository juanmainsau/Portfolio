# Portfolio · Juan Manuel Insaurraldi

Portfolio personal orientado a oportunidades de desarrollo web. Incluye presentación, proyecto FotoTrack, habilidades, formación y contacto.

## Tecnologías

HTML5 y CSS3, sin dependencias de terceros ni proceso de compilación. La página funciona sin JavaScript y usa fuentes del sistema.

## Ejecutar localmente

Desde la raíz del repositorio, con Python 3 instalado:

```sh
python3 -m http.server 8000
```

Abrir http://localhost:8000. También se puede abrir `index.html` directamente.

## Estructura

- `index.html`: contenido y navegación.
- `styles.css`: estilos, diseño responsive y preferencias de movimiento reducido.
- `fotopresentacion.jpg`: fotografía de presentación.

## Publicación

El sitio puede alojarse en cualquier servicio de hosting estático, sin comandos de instalación ni build. El directorio de publicación es la raíz del repositorio.

Para GitHub Pages: Settings → Pages → Deploy from a branch → seleccionar `main` y `/ (root)`. Luego de guardar, GitHub muestra la URL y el estado del despliegue. Esta configuración debe realizarse en GitHub; el repositorio por sí solo no habilita Pages.

## Mantener el contenido

Editar los textos y enlaces en `index.html`. La formación se presenta sin porcentajes ni fechas de graduación pendientes de confirmar. Actualizar el año del pie cuando corresponda.

Antes de publicar, comprobar navegación con teclado, enlaces de contacto, visualización en móvil y escritorio, y que todos los archivos referenciados existan. Las funcionalidades descritas de FotoTrack no implican una demo pública: el enlace lleva a su repositorio.
