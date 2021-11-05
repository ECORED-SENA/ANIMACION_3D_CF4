<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 <i>concept </i>art

    .video.mb-5      
      iframe(width="1255" height="706" src="https://www.youtube.com/embed/8iZoC6KWllA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-5
      .col-lg-10 Durante la etapa de <i>concept </i>art se desarrollan los diseños de personajes, <i>props</i> y escenarios e incluso se hacen fotogramas clave de ciertas acciones importantes de la historia. A pesar de estar relacionado con la ilustración y compartir muchos elementos, corresponden a cosas diferentes, ya que el objetivo de la ilustración consiste en directamente contar historias, mientras que el <i>concept </i>art solo pretende plasmar una visión de forma en que los integrantes de un equipo de producción tengan claridad en cuanto a la forma en que se debe ver algo.

    .row.justify-content-center
      .col-lg-7
        figure      
          img(src='@/assets/curso/tema2/img01.png')
      .col-lg-5
        p.mb-4 En cuanto a los materiales, lo más importante es una mente nutrida, un cerebro que tenga claro los fundamentos de anatomía, teoría del color, composición, perspectiva, uso de formas, historia del arte y que sobre todo se está nutriendo constantemente de cine, música, pintura, teatro… en general de arte y también del mundo que lo rodea, debido a que la observación del mundo es fundamental para entenderlo y lograr que, al momento de proponer gráficamente ideas, estas sean coherentes y creíbles.
        p.mb-0 Más allá de esto, con un lápiz y una hoja de papel, es suficiente para hacer <i>concept  art.</i> Pero básicamente se puede hacer uso de prácticamente cualquier material e instrumento que permita al artista plasmar imágenes como los tradicionales oleos, acrílicos, acuarelas, lápices de color, entre otros. Sin embargo, la evolución tecnológica ha permitido que se desarrollen innumerables alternativas de hardware y software que han causado la preponderancia de los medios digitales en el desarrollo de <i>concept </i>art, gracias a las alternativas que ofrecen para la optimización de tiempos.

    Separador

    #t_2_1.titulo-segundo
      h2 2.1  Diseño de personajes

    figure.mb-5
      .video         
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/g5_X7IImhiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Así como en las producciones en live action se acostumbra a realizar castings para seleccionar a los actores que mejor se adapten a los atributos físicos y psicológicos, desarrollados al momento de crear los personajes durante las etapas correspondientes al desarrollo de guion; en animación y videojuegos se lleva a cabo un proceso análogo denominado diseño de personajes, donde un equipo de artistas conceptuales se encargan de interpretar los personajes creados por los escritores para generar un casting que permita diseñar los atributos visuales que mejor se adapten a las características de cada uno.

        p.mb-0 Para realizar este proceso con éxito existe una serie de conocimientos indispensables y aspectos a tener en cuenta, los cuales serán descritos a continuación:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Referencias y documentación")        
        .row.justify-content-center
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img03.png')
            p.mb-4 Para que un personaje funcione correctamente es indispensable tener en cuenta el contexto, la historia dentro de la cual se desarrolla y su propia historia individual que como ya se sabe, ha sido desarrollada desde la etapa del guion por parte de los escritores. Así como hacer un barrido sobre los orígenes del personaje, sus actitudes, aptitudes y motivaciones no solo los desarrollados en la etapa de escritura, sino los que puedan relacionarse con una época o un lugar específico. Por ejemplo, no es lo mismo diseñar un personaje que haya nacido en la década de 1950 en el continente latinoamericano, a uno que lo haya hecho en el siglo XXV en una colonia en Marte. Aunque en esta comparación en apariencia sea más fácil encontrar información sobre el primer caso, no quiere decir que para el segundo no sea relevante hacer una investigación sobre las condiciones conocidas del planeta y la misma historia y proyección de la raza humana, ya que esto permite obtener datos que brindan credibilidad al personaje.
            p.mb-4 Por otro lado, la recolección de referencias visuales es una práctica indispensable al momento de diseñar, puesto que por mucha experiencia que se tenga, absolutamente nadie tiene almacenados en su cerebro todos los referentes que necesita. Por lo tanto, no está de más construir un banco visual que ayude a alimentar la creatividad y analizar el trabajo que realizaron otros artistas para tratar de entender de qué manera afrontan los retos presentados en sus respectivas producciones.
            p.mb-5 Una buena manera de gestionar las referencias es mediante PureRef, una aplicación gratuita que permite crear tableros y superponerlos a otras aplicaciones para tenerlos siempre a la vista y que puede ser descargada en el siguiente enlace:
            .row.justify-content-center.mb-5
              .col-lg-4
                a.anexo.mb-4.mb-lg-0(href="https://www.pureref.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <b>Enlace web.</b> pureref
            p.mb-5 Enseguida, algunos referentes con diversos estilos que pueden ser fuente de inspiración:
            .row.justify-content-center.mb-5
              .col-lg-10
                .tabla-b.color-acento-contenido                      
                  table      
                    tr.tabla-b__header
                      th Referente          
                      th Sitio <i>web</i>          
                    tr
                      td Carter Goodrich
                      td 
                        a(href="http://www.cartergoodrich.com" target="_blank") www.cartergoodrich.com
                    tr
                      td Brett Bean 
                      td 
                        a(href="http://www.brettbean.com" target="_blank") www.brettbean.com
                    tr
                      td Anette Marnat 
                      td 
                        a(href="http://www.annettemarnat.ultra-book.com" target="_blank") www.annettemarnat.ultra-book.com
                    tr
                      td Frank Frazetta 
                      td 
                        a(href="http://www.frazettamuseum.com" target="_blank") www.frazettamuseum.com
                    tr
                      td Creature Box
                      td 
                        a(href="http://www.creaturebox.com" target="_blank") www.creaturebox.com
                    tr
                      td Syd Mead 
                      td 
                        a(href="http://www.ydmead.com" target="_blank") www.ydmead.com
                    tr
                      td Phil Saunders
                      td 
                        a(href="http://www.artstation.com/philsaunders" target="_blank") www.artstation.com/philsaunders
                    tr
                      td Shane Glines 
                      td 
                        a(href="http://www.instagram.com/shaneglines" target="_blank") www.instagram.com/shaneglines
                    tr
                      td Brett Bean 
                      td 
                        a(href="http://www.brettbean.com" target="_blank") www.brettbean.com
                  
        
      .py-3.py-md-4(titulo="Anatomía básica")        
        .row.justify-content-center
          .col-lg-10
            p.mb-4 Según la RAE la anatomía es la ciencia que estudia la estructura y forma de los seres vivos y las relaciones entre las diversas partes que los constituyen. Aunque se trata de una ciencia derivada de la biología es muy útil en las artes plásticas y visuales pues uno de los conocimientos clave a la hora de diseñar personajes es la anatomía, independientemente de si se trata de un personaje de estilo realista o cartoon. Tener bases fuertes de anatomía ayuda a que la construcción física de los personajes sea creíble y por tanto, funcionen adecuadamente en el universo al que pertenecen.
            p.mb-5 Una buena forma de estudiar el funcionamiento del cuerpo es mediante los atlas médicos de anatomía, ya que presentan un desglose detallado que va desde la estructura ósea que soporta el cuerpo y muestra su relación con los músculos. No es necesario en principio memorizar el nombre de cada uno de los huesos y músculos que conforman el cuerpo, pero sí es sumamente importante saber dónde están ubicados, de dónde parten y a dónde llegan; debido que esto permite comprender su función en el movimiento y así mismo su importancia en la definición de siluetas y volúmenes del cuerpo.
            figure.mb-0    
              img(src='@/assets/curso/tema2/img04.png')
      .py-3.py-md-4(titulo="Proporciones del cuerpo humano")        
        .row.justify-content-center
          .col-lg-10
            p.mb-4 Cada cuerpo posee características únicas que lo diferencian de los demás, sin embargo, desde la antigüedad han sido desarrollados diferentes sistemas de proporción para representar la figura humana de una manera armónica buscando unas proporciones ideales, los egipcios por ejemplo usaban la medida del puño como base para determinar las demás proporciones del cuerpo, determinando que la altura de este correspondía a 18 veces el tamaño del puño usando 2 para el rostro, diez en la distancia que va de los hombros a las rodillas y otros 6 para la distancia comprendida entre las rodillas y los pies.
            p.mb-4 El sistema más común es el que usa la dimensión de la cabeza como medida de referencia, con el cual muchos artistas han usado en sus obras proporciones basadas en sistemas de 7, 7 ½, 8, 8 1⁄2 y hasta 9 cabezas para determinar la estatura de la figura humana.
            p.mb-4 Estos sistemas de medida y proporción llevan por nombre canon (del griego Χανων, que significa regla). Uno de los cánones más conocidos es el del Hombre de Vitruvio, famoso dibujo de Leonardo da Vinci realizado alrededor de 1490 en el cual se representa una figura masculina inscrita al interior de un cuadrado y una circunferencia con 2 pares de brazos y piernas sobrepuestas, este estudio anatómico fue hecho a partir de textos arquitectónicos de Marco Vitruvio (de donde saca su nombre) y se rige bajo un sistema de proporciones de 8 cabezas.
            p.mb-5 Cabe resaltar que aunque se acepte el uso de un canon anatómico para la representación de las proporciones perfectas, esta es una idealización y las proporciones reales de cada persona varían en función de diversos factores como su origen étnico, genética heredada, condiciones de vida, etc. sin embargo, los cánones son útiles para construir estructuras anatómicas sólidas y su conocimiento nos permite tomar ciertas licencias para poder deformar las proporciones y así generar personajes con estilos más realistas o cartoon.
            figure.mb-0    
              img(src='@/assets/curso/tema2/img05.png')

    Separador              
            
    h4.mb-4 Procedimiento para dibujar un cuerpo humano según el canon de 8 cabezas
    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-5 
          img(src='@/assets/curso/tema2/img06.png')
       
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El canon es una noción que se refiere a las proporciones perfectas o correctas del cuerpo humano y las relaciones de medidas armónicas entre las distintas partes de una representación y tiene los siguientes pasos:

    TabsA.color-primario.mb-5    
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 1")
        h4 Paso 1       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img07.svg')
            p.mb-0 Para generar una figura humana usando como base el canon idealizado de 8 cabezas se debe crear una cuadrícula de 8 unidades de alto y 2 de ancho, la unidad de medida corresponde al alto de la cabeza desde el mentón hasta la coronilla.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 2")
        h4 Paso 2   
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img08.svg')
            p.mb-0 Seguidamente, en la fila número uno dibujar un círculo desde la línea superior de la cuadrícula y alineando su mitad con la línea central vertical, la circunferencia debe tener por altura 2 tercios del cuadro y en el tercio restante dibujar una semicircunferencia afilada en su parte inferior central que inicie desde el último tercio del círculo ya existente y que termine en la línea inferior del cuadro 1.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 3")
        h4 Paso 3       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img09.svg')
            p.mb-0 En la mitad de la fila 2 hacer una línea horizontal que tenga por ancho el equivalente a 2 unidades del alto de la cabeza; es decir, debe ir trazada de lado a lado de la cuadrícula y servirá para indicar la posición de los hombros. Seguidamente, en la mitad de la fila 4 trazar otra línea horizontal con un ancho de 1 ½ cabezas, esta línea indica la posición de la cadera.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 4")
        h4 Paso 4       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img10.svg')
            p.mb-0 En la intersección de las líneas laterales con la línea inferior de la fila 3, dibujar pequeños círculos con un diámetro de aproximadamente una quinta parte de la altura de la cabeza, estos indican la posición de los codos. Luego sobre la línea inferior de la fila 6 dibujar 2 óvalos con una altura aproximada de un tercio del cuadro con la separación equivalente al ancho de la cabeza, la cual corresponde a la medida del alto de media cabeza. Estos óvalos representan la ubicación de las rodillas.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 5")
        h4 Paso 5      
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img11.svg')
            p.mb-4 Generar una línea que conecte desde el extremo de la línea del hombro con la circunferencia del codo la cual representa el brazo y una segunda línea desde la circunferencia del codo hasta el primer quinto de la fila 5 para representar el antebrazo hasta la muñeca.
            p.mb-0 Luego, conectar el extremo de la línea de la cadera con el óvalo de la rodilla generando una línea inclinada que representa la porción superior de la pierna y luego desde el extremo inferior del óvalo de la rodilla proyectar una línea recta hasta la línea inferior de la fila 8 para representar la porción inferior de las piernas.

      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 6")
        h4 Paso 6      
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img12.svg')
            p.mb-4 Desde la línea de la cadera dibujar una línea que suba hasta la base de la fila 3 y llegue casi a la mitad horizontal del cuadro y con esto se marcará la cintura, seguidamente proyectar este punto hasta el inicio del último décimo de la línea de los hombros para marcar el espacio de la caja torácica.
            p.mb-4 Desde los extremos laterales de la cabeza trazar líneas verticales que lleguen al primer cuarto de la fila 2 y a partir de ahí conectar con un semicírculo que llegue a la línea de los hombros, con esto se inscribe un cilindro que representa el cuello. Luego desde la mitad de la vertical del cuello proyectar una línea oblicua que conecte con la línea que define el tórax y de esta forma se obtiene la ubicación de los músculos del trapecio. 
            p.mb-4 Para definir las manos trazar una línea horizontal del ancho del codo perpendicular a la línea de la muñeca. Seguidamente trazar una línea paralela un poco por debajo de la mitad de la fila 5 la cual debe tener entre un 25% y 30% más de longitud, al conectar los extremos se genera un trapecio que sirve para representar la zona de los huesos carpianos y metacarpianos de la mano, luego generar 2 pequeños paralelopipedos que servirán para indicar la posición de los dedos.
            p.mb-4 Para los pies generar un par de trapecios que inician poco más abajo de la mitad de la octava fila con un ancho superior similar al de las rodillas y un ancho inferior equivalente a la medida de 1 cabeza.
            p.mb-4 Finalmente, inscribir un triángulo que conecte los extremos de la línea de la cadera con el primer quinto de la fila 5 para definir la zona de la pelvis.
            p.mb-0 Para el caso femenino el sistema es el mismo salvo unas pequeñas diferencias como que la línea de los hombros y cadera tienen el mismo ancho siendo este de 1 ½ cabezas, los círculos de los codos no van en la intersección de las líneas sino sobre la línea inferior de la fila 3 y alineados con el ancho de los hombros, la distancia que suben las manos es la misma que suben los codos, el cuello es más delgado y los pies y manos más pequeños.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 7")
        h4 Paso 7      
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img13.svg')
            p.mb-0 El siguiente paso corresponde a inscribir una serie de óvalos y gotas para definir los principales grupos musculares, lo que permite tener una estructura completa sobre la cual se podrán empezar a añadir distintos tipos de detalles para obtener una figura definida.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 8")
        h4 Paso 8      
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img14.svg')
            p.mb-0 Una vez se tiene una estructura definida, se puede proceder a añadir detalles usando como referencia fotografías y esquemas musculares. Esta última parte del proceso es la que requiere más sensibilidad artística y la que solo se podrá refinar con la práctica; sin embargo, al partir de una construcción geométrica simplificada es más fácil lograr representar formas complejas de manera adecuada como es el caso del cuerpo humano.
    
        

    Separador

    h4.mb-4 Cabeza y rostro

    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-5      
          img(src='@/assets/curso/tema2/img15.png')
        .cajon.color-primario.p-4.mb-4
          p.mb-4 El rostro humano es una de las partes del cuerpo más complicadas de representar, ya que en él se recoge un gran porcentaje de la expresividad que puede tener una persona y debido a la gran variedad de formas interconectadas que contiene, resulta un verdadero reto para el artista novato.
          p.mb-0 A continuación, se presenta un ejemplo representando un rostro masculino y un rostro femenino en vista frontal y ¾ usando el método de Andrew Loomis, un famoso ilustrador estadounidense que a lo largo de su vida escribió varios libros sobre dibujo:

    TabsA.color-primario.mb-5    
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 1")
        h4 Paso 1       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img16.png')
            p.mb-0 El primer paso es dibujar una circunferencia, la cual servirá de base para representar la parte superior de la cabeza.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 2")
        h4 Paso 2     
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img17.png')
            p.mb-4 Para el caso frontal (parte superior) marcar una línea vertical y una horizontal dividiendo el círculo en cuatro partes iguales, luego al costado del círculo marcar una línea vertical aproximadamente a un décimo del ancho total de la circunferencia y repetir al lado opuesto.
            p.mb-4 Conectar los puntos superiores y los inferiores de manera que quede inscrito un cuadrado al interior del círculo, las líneas verticales laterales servirán para definir el ancho del rostro y las líneas horizontales nos marcaran la altura de la línea de cabello, la altura de la línea de las cejas y la altura de la base de la nariz.
            p.mb-4 Seguidamente, trazar una línea horizontal bajo el círculo a una distancia equivalente a la existente entre las otras líneas horizontales. Esta última línea servirá para definir la base del mentón.
            p.mb-4 Para el caso del rostro en ¾ (parte inferior) dibujar un óvalo al interior y a un costado de la circunferencia representando un círculo en perspectiva, este será el equivalente al corte hecho con las líneas verticales en el rostro frontal.
            p.mb-4 Marcar dentro del círculo interior una cruz para dividirlo en 4 partes y proyectar la línea más cercana a la horizontal hacia el resto de la circunferencia para obtener la línea de la mitad de la esfera, la cual servirá para determinar el lugar donde irá la base de la nariz.
            p.mb-0 Luego, paralela a esta línea media trazar una línea superior proyectada sobre la esfera y tangente al punto más alto del circulo interno, la cual servirá para representar la línea de cabello, repetir trazando otra línea tangente al punto más bajo del circulo interno que representará la línea sobre la cual se pondrá la base de la nariz. 

      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 3")
        h4 Paso 3     
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img18.png')
            p.mb-4 Acá se empieza a definir el género sexual del rostro. Para ello, se usan trazos con formas delicadas y curvas para el caso del rostro femenino y trazos rectos y formas gruesas para el caso masculino.
            p.mb-4 En la vista frontal dividir la línea de las cejas al interior del cuadro en 8 partes, 2 partes equivaldrá al ancho de un ojo de esta forma se podrá calcular la posición de los ojos bajo la línea de las cejas.
            p.mb-4 Bajo la línea de las cejas se deben dejar las dos partes centrales vacías y en las 2 siguientes a cada lado dibujar una forma almendrada que servirá de base para dibujar los ojos. Luego se dibuja sobre la línea de las cejas los arcos que las representaran.
            p.mb-4 La nariz tiene el ancho de un ojo, por lo tanto, en la línea de la nariz se dibujan 3 semicírculos, dos pequeños a los costados y uno más grande central, de manera que los 3 juntos equivalgan al ancho de un ojo.
            p.mb-0 Para el caso de la vista ¾ el proceso es básicamente el mismo, con la diferencia que la parte del rostro que se representa más alejada tendrá una ligera reducción con respecto a su parte opuesta como se muestra en la ilustración.

      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 4")
        h4 Paso 4       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img19.png')
            p.mb-4 Se traza la línea del maxilar partiendo de las intersecciones verticales en el caso frontal y de la sección transversal de la cruz trazada en el caso de la vista ¾.
            p.mb-0 La oreja se dibuja entre las líneas horizontales de la ceja y la nariz. Para la boca se usa de guía una línea tangente a la parte inferior de la circunferencia inicial dibujando una forma similar a una “m” alargada hacia los costados para el labio superior y una curva para el labio inferior, ambas con un ancho equivalente a 2 ojos.

      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 5")
        h4 Paso 5       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img20.png')
            p.mb-4 Acá se define de mejor manera el contorno general del rostro y el cráneo como se muestra en la ilustración y se traza la línea de pelo.
            p.mb-0 Para este momento la forma general del rostro está prácticamente definida y solo es cuestión de dedicar tiempo con el objetivo de generar detalles y obtener un dibujo más logrado.

      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 6")
        h4 Paso 6       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img21.png')
            p.mb-0 Con todos los rasgos generales definidos es momento de experimentar con estilos de cabello para dar más personalidad al rostro en incluso experimentar alterando un poco las proporciones, ya que al tener definido el lugar donde se ubica cada parte, se puede jugar alterando el tamaño de los ojos, la nariz, la boca, el alto o ancho de la cara y así generar diferentes propuestas que partan de una estructura anatómica correcta.
      .tarjeta.color-acento-contenido.p-4.t1-div2(titulo="Paso 7")
        h4 Paso 7       
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5      
              img(src='@/assets/curso/tema2/img22.png')
            p.mb-4 Ya con todas las características del rostro definidas, es momento de pasar el dibujo a limpio, ya sea entintado de forma análoga o digital para deshacerse de todas las líneas guías y dejar solo los trazos finales. 
            p.mb-4 Como se puede apreciar este método funciona para hacer rostros en cualquier posición y la repetición del ejercicio una y otra vez permitirá no depender tanto de las guías para lograr un dibujo armónico.
            p.mb-0 También cabe aclarar que este método permite dibujar cualquier tipo de rostro, incluso rostros cartoon, la diferencia radica en la necesidad de alterar las proporciones para obtener distintas morfologías. Por ejemplo, en lugar de partir de un círculo perfecto iniciar con un óvalo vertical para obtener un rostro más alto u horizontal para obtener un rostro más ancho; todo es cuestión de explorar y dar rienda suelta a la imaginación.
      

    Separador

    h2 Lenguaje de formas.

    .tarjeta.p-5.mb-5(style="background-color:#F0C3C1")
      SlyderA
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img23.png')
            
            p.mb-5 El uso de las formas otorga diferentes características al diseño de un personaje lo cual contribuye a acentuar rasgos físicos y psicológicos planteados en etapas previas del proceso de creación. Por ejemplo, la decisión de añadir contornos curvos en lugar de contornos afilados en el rostro de un personaje puede evocar en el espectador la percepción de una personalidad amistosa, contrario a lo que pueden denotar los rasgos afilados y angulosos que pueden llegar a ser interpretados como señal de peligro.          
            br
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img24.png')
            p.mb-4 Tal es el caso de <i>Mickey Mouse</i>, el personaje más emblemático de la marca registrada Disney que está compuesto casi en su totalidad por formas curvas, lo que ayuda a reforzar en gran medida su carácter amistoso, en contraposición un villano como el <i>Joker</i> a pesar de usar elementos cómicos en su diseño, donde resaltan las figuras triangulares y afiladas, las cuales sirven para marcar el potencial de peligro inherente de un personaje como él.
            p.mb-5 Existen tres grandes grupos de formas que sirven para modelar visualmente las características que posee un personaje, las cuales sin saberlo se tienen inscritas en la mente como espectadores, ya que cada grupo es capaz de evocar diferentes tipos de sensaciones según como sean usadas.
            br
    
    .row.justify-content-center.mb-5 
      .col-lg-4.d-flex
        div
          figure.mb-5     
            img(src='@/assets/curso/tema2/img25.svg')
          h4 Formas cuadradas y rectas
          p.mb-0 El primer gran grupo corresponde a las formas cuadradas y rectas, pero con prevalencia de las líneas verticales y horizontales, estas son formas que suelen transmitir sensaciones de estabilidad, fortaleza, solidez, rigidez, uniformidad e incluso quietud especialmente cuando se trata del predominio de líneas horizontales las cuales son una clara analogía a la posición de reposo por excelencia del cuerpo humano. Como contraparte las líneas verticales suelen denotar actividad por ser semejantes a la posición erguida del humano cuando está despierto; sin embargo, al ser totalmente verticales generan sensaciones de quietud.
      .col-lg-4.d-flex
        div
          figure.mb-5     
            img(src='@/assets/curso/tema2/img26.svg')
          h4 Formas curvas
          p.mb-0 El segundo gran grupo está compuesto por las formas curvas, estas formas se usan principalmente para expresar fluidez, gentileza, suavidad, carisma, calma, diversión, personalidades amistosas o inofensivas; en general es una forma muy orgánica, lo que la provee de gran dinamismo además de ser formas muy fáciles de encontrar en la naturaleza. Por ejemplo, en las ondas que se generan sobre el agua.
      .col-lg-4.d-flex
        div
          figure.mb-5     
            img(src='@/assets/curso/tema2/img27.svg')
          h4 Formas angulares
          p.mb-0 El tercer gran grupo contiene formas angulares, en este grupo también están presentes las líneas rectas con la diferencia de que siempre están inclinadas lo cual sirve para denotar dinamismo, agilidad, rapidez, astucia. Sin embargo, la presencia de ángulos marcados y formas puntiagudas también puede transmitir agresividad, peligro, daño entre otras cualidades. Por ejemplo, los colmillos de un león se asemejan a la forma de un triángulo y el verlos genera alerta inmediata.

    .row.justify-content-center.mb-5
      .col-lg-10        
        .cajon.color-primario.p-4.mb-4
          p.mb-4 A pesar de que cada grupo de formas tiene características únicas, esto no quiere decir que sean excluyentes entre sí. Por ejemplo, el Pingüino de Batman tiene un cuerpo que en esencia es una esfera que en principio lo hace parecer inofensivo, pero su cara y accesorios están llenos de formas angulares que denotan claramente su peligrosidad como villano.
          p.mb-0 Para finalizar, es recomendable ver la conferencia dada por el <i>concept artist</i> Óscar Jiménez Vargas en el 17 festival de cine de Málaga donde muestra como fue el proceso de diseño de personajes para Justin y las espadas del valor desde el material complementario denominado “Diseña tus personajes de animación con arte” y la página <i>web</i> del artista.
         
    .row.justify-content-center.mb-5
      .col-lg-10 
        a.anexo.mb-4.mb-lg-0(href="http://www.senasofiaplus.edu.co" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>NOTA.</b> Se recomienda hacer el curso virtual ofertado en www.senasofiaplus.edu.co denominado “Ilustración de personajes en medios digitales”.

    div.p-4(style="background-color: #F8F1E7")
      h4.text-center Consejos
      LineaTiempoC.color-primario(text-small)
        .row.p-4(titulo="Paso 1")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img28.svg')
          .col-lg-10.d-flex.align-items-center   
            div               
              p.mb-4 <b>Usar las líneas de acción:</b> las líneas de acción son las que determinan la fluidez del movimiento, si bien es necesario hacer dibujos en los cuales los personajes están en una pose estática de forma que se facilite el proceso posterior de modelado, este es un proceso que se hace cuando el personaje está totalmente definido.
              p.mb-0 En las primeras etapas es fundamental plasmar la personalidad del personaje y para eso las líneas de acción son un elemento muy útil.
        .row.p-4(titulo="Paso 2")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img29.svg')
          .col-lg-10.d-flex.align-items-center    
            div      
              p.mb-0 <b>Poses interesantes:</b> en conjunto con el consejo anterior, la construcción de poses que ayuden a percibir la personalidad del personaje es importantísimo para la construcción visual de la misma. Si bien muchos atributos son claramente visibles al momento en que el personaje desarrolla su actuación, es una buena práctica tener elementos que insinúan dichos atributos cuando el personaje no está en movimiento.
        .row.p-4(titulo="Paso 3")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img30.svg')
          .col-lg-10.d-flex.align-items-center   
            div                           
              p.mb-0 <b>Crear siluetas claras:</b> un buen ejercicio para determinar si el personaje está bien construido, es visualizarlo en forma de silueta para de esta forma descubrir si es fácilmente reconocible, ya que de no ser así se deben aplicar los ajustes necesarios como modificar la pose o alterar las formas para garantizar que desde su representación más abstracta sea reconocible.
        .row.p-4(titulo="Paso 4")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img31.svg')
          .col-lg-10.d-flex.align-items-center    
            div                         
              p.mb-0 <b>Anatomía:</b> ya sea un personaje realista o uno estilizado, partir de una base anatómica sólida siempre es una garantía para el diseño de personajes creíbles.
        .row.p-4(titulo="Paso 5")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img32.svg')
          .col-lg-10.d-flex.align-items-center       
            div                       
              p.mb-0 <b>Evitar la simetría:</b> salvo que esté sumamente justificado, lo ideal es evitar la simetría a toda costa, porque esto permite desarrollar formas más interesantes sumado al hecho de que por naturaleza la mayoría de animales incluyendo al ser humano no son perfectamente simétricos.
        .row.p-4(titulo="Paso 6")
          .col-lg-2
            figure  
              img(src='@/assets/curso/tema2/img33.svg')
          .col-lg-10.d-flex.align-items-center  
            div                            
              p.mb-0 <b>Color:</b> al igual que la forma, el color también comunica y cada uno tiene sus significados asociados, por ello la correcta selección del color es importante para reforzar lo que se quiera que el personaje represente.
    
    Separador 

    #t_2_2.titulo-segundo
      h2 2.2  Diseño de escenarios

    p.mb-5 El diseño de escenarios es una etapa importante del proceso de creación visual, porque es en esta etapa en la que gestan los espacios y sus decorados que permitirán el desarrollo de la historia. Es el momento en el que es posible resolver rápidamente los problemas y desafíos narrativos que se puedan llegar a presentar.

    .tarjeta.p-5.mb-5(style="background-color:#F0C3C1")
      SlyderA
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img34.png')
            p.mb-4 Al igual que el diseño de personajes, los escenarios y <i>props</i> parten del proceso de creación literaria lo que brinda un contexto inicial sobre el tipo de ambiente que se debe desarrollar y en él se aplican muchos conceptos ya desarrollados hasta esta etapa. Elementos como el lenguaje audiovisual, composición, perspectiva, teoría del color, el lenguaje de formas e incluso principios anatómicos son fundamentales al plantear los escenarios.
            p.mb-5 Como todo proceso de diseño se debe partir de la investigación, esta etapa es la que siempre dará información para que todos los elementos creados convivan armónicamente en el universo donde van a existir y por tanto, evitar disonancias visuales. Claro está que todo es válido siempre y cuando tenga un propósito claro y bien definido.
            br
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img35.png')
            p.mb-5 Seguido de la investigación está la recolección de referencias, en esta etapa se recaba información visual que permita aclarar los detalles inherentes al desarrollo de las formas. Por ejemplo, si se trata del diseño de un escenario medieval, es muy posible que no se tengan del todo claros sus elementos en la biblioteca visual almacenada en el cerebro; por tanto, la opción más sencilla es buscar en internet imágenes relativas a la época y lugar requerido e incluso si es posible, dirigirse a un lugar de la época que haya logrado perdurar hasta la actualidad para estudiarlo y recolectar referencias visuales en vivo y en directo.
            br
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img36.png')
            p.mb-5 Superada la etapa de investigación y recolección de referencias, es hora de poner manos a la obra y empezar a generar propuestas en forma de bocetos rápidos para ir acercando el desarrollo visual a las necesidades de la historia, realizando las respectivas iteraciones sobre las propuestas seleccionadas hasta llegar al punto donde se obtengan las imágenes finales.
            br
        .row.justify-content-center
          .col-lg-10
            figure.mb-5     
              img(src='@/assets/curso/tema2/img37.png')
            p.mb-5 
            br

    Separador
</template>

<script>
export default {
  name: 'Tema2',
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
