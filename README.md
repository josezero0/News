# News

Minify code by: http://minifycode.com/

## Descripción

De cabecera hay un jumbotron con el logo de la página y un texto que va apareciendo en pantalla haciendo el efecto de una máquina de escribir.

A continuación hay un navbar que nos permite volver en cualquier momento al índex.html. El navbar estará siempre visible, cuando se hace scroll se queda en la parte superior de la pantalla.

Finalmente, tendremos las noticias de la página. Por defecto, se encuentran las 3 últimas precargadas en el html, el resto de noticias se irán cargando a medida que se haga scroll o bien se pulse el botón de cargár más en la parte inferior de la página.

Dependiendo de si es la versión de móvil o de escritorio la publicidad se verá reflejado en un lugar de la pantalla u otro.

Para este proyecto se ha utilizado bootstrap y jquery.

Las news1.html y news2.html incluyen las 2 últimas noticias (precargadas) del html.

## Versión móvil ( max-width = 767px )

![alt mobile.jpg](https://github.com/josezero0/News/blob/minify/mobile.jpg)

La versión móvil incluye publicidad con 90px de alto en la parte baja de la pantalla que siempre es visible.

## Versión escritorio ( min-width = 768px )

![alt desktop.jpg](https://github.com/josezero0/News/blob/minify/desktop.jpg)

La versión de escritorio incluye publicidad a la derecha de la pantalla con 300px de ancho. A medida que se vaya haciendo scroll la publicidad también hará scroll.

## Noticias (.json)

Las noticias (excepto las 3 precargadas) se encuentran en ficheros 1.json y 2.json.

## OGP (Open Graph Protocol)

Se han incluido en cada .html las siguientes etiquetas meta en el head:

<meta property="og:site_name" content="Nom de la teva aplicació">
<meta property="og:url" content="Url de la pàgina que comparteixes">
<meta property="og:title" content="Títol, pot ser el mateix títol de la pàgina">
<meta property="og:image" content="Url de la imatge que es presentarà quan comparteixes">
<meta property="og:description" content="Descripció, pot ser la mateixa que hi ha a meta description">

## RSS (rss.xml)

Las noticias (tanto las precargadas, cómo las de los ficheros .json) se encuentran en el fichero rss.xml. Este aparece en el link del head dentro del html.
