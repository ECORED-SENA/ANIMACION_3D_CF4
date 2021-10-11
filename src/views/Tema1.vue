<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Teoría del color

    figure.mb-5
      .video        
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/rlGfZoeO3Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center
      .col-lg-10
        p.mb-4 El color es definido por la RAE (2020), como “Sensación producida por los rayos luminosos que impresionan los órganos visuales y que depende de la longitud de onda”. Técnicamente, los objetos o la materia absorben ciertas longitudes de onda (energía electromagnética) de la fuente de luz (sol o bombilla), y otras las hace rebotar. Esas longitudes de onda que rebotan son las que el ojo humano, por medio de los conos y bastones en la retina, perciben como un color. Se puede decir entonces que, sin fuente de luz, sea esta natural o artificial, no se tendría la posibilidad de identificar el color.
        p.mb-0 La teoría del color hace referencia a las reglas para mezclar los colores y conseguir un efecto en concreto.

    Separador

    #t_1_1.titulo-segundo
      h2 1.1  Modelos de color

    p.mb-5 Los modelos de color permiten catalogar los colores y que se pueda trabajar con ellos por medios digitales. A través de los modelos se accede a diferentes sistemas para visualizar y modificar una imagen:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Modelo RGB")
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-0 Modelo aditivo que se basa en los colores luz. El ojo humano cuenta con 3 tipos de conos o células foto receptoras que determinan los 3 colores primarios: rojo, verde y azul (RGB por siglas en inglés). De la combinación de estos 3 se obtiene el color blanco y la ausencia de los mismos dará como resultado el negro. Este modelo de color es usado para toda clase de dispositivos como pantallas, celulares, etc.
        .row.justify-content-center
          .col-lg-4
            figure      
              img(src='@/assets/curso/tema1/img01.svg')
      .py-3.py-md-4(titulo="Modelo CMYK")
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-0 Modelo sustractivo basado en los colores pigmento o físicos. Los colores primarios en este modelo son: amarillo, cían y magenta (CMYK por sus siglas en inglés). Al contrario del modelo RGB, la combinación de los 3 primarios genera el color negro (key o black). Este modelo es usado en pintura, tintes e impresión.
        .row.justify-content-center
          .col-lg-4
            figure      
              img(src='@/assets/curso/tema1/img02.svg')
      .py-3.py-md-4(titulo="Modelo HSV")
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-0 Se basa en las propiedades del color (tono , saturación y luminocidad), las cuales se explican en mayor detalle en la siguiente lección.
        .row.justify-content-center
          .col-lg-4
            figure      
              img(src='@/assets/curso/tema1/img03.svg')

    Separador

    #t_1_2.titulo-segundo
      h2 1.2  Propiedades del color

    .row.justify-content-center
      .col-lg-4.d-flex
        div.t1-div1.p-4
          .row.justify-content-center.mb-5
            .col-lg-6
              figure      
                img(src='@/assets/curso/tema1/img04.svg')
          h4.text-center Tono (Hue)
          p.mb-0 Es el color en concreto y ayuda a diferenciarlos. Por ejemplo, al ver un objeto se dice que tiene un tono azul o anaranjado.
      .col-lg-4.d-flex
        div.t1-div1.p-4
          .row.justify-content-center.mb-5
            .col-lg-6
              figure      
                img(src='@/assets/curso/tema1/img05.svg')
          h4.text-center Saturación (Saturation)
          p.mb-0 Intensidad o pureza del color. En otras palabras, la cantidad de gris que se le ha agregado a un tono; así entre más saturado es un color, más vibrante es, mientras que, entre menos saturado, dará mayor descanso al ojo.
      .col-lg-4.d-flex
        div.t1-div1.p-4
          .row.justify-content-center.mb-5
            .col-lg-6
              figure      
                img(src='@/assets/curso/tema1/img06.svg')
          h4.text-center Luminosidad o valor (Value)
          p.mb-0 Describe el valor de claridad u oscuridad, en otras palabras, cantidad relativa de blanco o negro en un tono. Si agregamos el blanco a un color, obtendremos valores más claros del tono, llamados tintes. Por otro lado, si el que agregamos es el negro, tendremos valores más oscuros del tono, conocidos como matices. Por ejemplo, decimos que el rosa es un tinte del color rojo primario y el borgoña o rojo oscuro es un matiz (Whelan, 1994).

    Separador

    #t_1_3.titulo-segundo
      h2 1.3  Círculo cromático

    .row.justify-content-center.mb-5
      .col-lg-10.px-5
        figure      
          img(src='@/assets/curso/tema1/img07.svg')

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Se divide en doce segmentos, incluyendo los tonos primarios, secundarios y terciarios. Los tres colores primarios: rojo, amarillo y azul, forman un triángulo equilátero dentro del círculo. Si se mezclan en igual medida dos colores primarios, se obtiene un color secundario; y si se mezcla un primario con un secundario se tiene un terciario.

    Separador

    #t_1_4.titulo-segundo
      h2 1.4  Armonía del color
    p.mb-5 Se debe saber que algunos colores se ven mejor juntos que otros, pero esto puede generar confusión si se trata de recordar cada uno. Por tanto, a continuación, se verán los 6 esquemas más efectivos de la armonía de color:
    TabsA.color-acento-contenido.mb-5    
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Monocromático")
        h4 Monocromático
        p.mb-5 Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img08.png')
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Análogo")
        h4 Análogo
        p.mb-5 Se usan colores adyacentes uno del otro. Es un esquema presente en la naturaleza, por ende, crean una sensación de calma, paz y comodidad.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img09.png')
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Triada")
        h4 Triada
        p.mb-5 Quizás es una de las más difíciles de usar correctamente. Son tres colores que son equidistantes. El reto está en el equilibrio de cada uno de los tonos, dado que al usarse en la misma medida generará caos. Suele usarse para escenas con estilo cartoon, orientado al público infantil.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img10.png')
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Complementario")
        h4 Complementario
        p.mb-5 Es el esquema más popular, donde se usan colores de lados opuestos del círculo. Naturalmente siempre van bien juntos; sin embargo, como en el esquema de triada, se debe elegir un color predominante y usar el tono complementario para crear contraste o puntos de interés.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img11.png')
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Complementario dividido")
        h4 Complementario dividido
        p.mb-5 Similar al complementario, pero este esquema usa tres colores. Se debe seleccionar el tono complementario y dividirlo, es decir, tomar los dos colores adyacentes. Es útil para extender las posibilidades de la paleta de color, cuando dos tonos no son suficientes.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img12.png')     
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Doble complementario")
        h4 Doble complementario
        p.mb-5 Justo como el esquema complementario pero doble. Dos pares de colores complementarios (sin importar su posición dentro del círculo). Se debe ser muy cuidadoso con este esquema, pues sin el equilibrio adecuado creará caos. Lo mejor es usar un par en primer plano y el otro en el fondo.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure      
              img(src='@/assets/curso/tema1/img13.png')

    .row.justify-content-center.mb-5
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://color.adobe.com/es/create/color-wheel" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Para crear paletas de color y jugar con diferentes esquemas puede consultar la herramienta creada por Adobe llamada Adobe Color, anteriormente conocida como Kuler desde internet.
        
        
    Separador

    #t_1_5.titulo-segundo
      h2 1.5  Psicología del color

    p.mb-5 Como lo menciona Bride M. Whelan, “El color es a la vez simple y complejo. Este significa cosas distintas para distintas personas en culturas diferentes. Ningún color es visto del mismo modo por dos personas. El color es personal y universal, y envía mensajes de inagotable variedad”. (Whelan, 1994).
    
    .row.justify-content-center.mb-5
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img14.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img15.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img16.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img17.svg')

    .row.justify-content-center.mb-5
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img18.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img19.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img20.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img21.svg')

    .row.justify-content-center.mb-5
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img22.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img23.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img24.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img25.svg')

    .row.justify-content-center.mb-5
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img26.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img27.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img28.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img29.svg')

    .row.justify-content-center
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img30.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img31.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img32.svg')
      .col-lg-3
        figure      
          img(src='@/assets/curso/tema1/img33.svg')
    
    
    Separador

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
