export default {
  global: {
    componenteFormativo: 'Fundamentos de <i>concept art</i>',
    descripcionCurso:
      'El <i>concept art</i> es la etapa en la cual se da solución a todos los desafíos narrativos en una producción mediante la creación de imágenes, permitiendo la optimización de recursos gracias a que tiene la posibilidad de generar en la ilustración una variedad de propuestas en periodos cortos de tiempo, en contraposición a otros métodos como la escultura o modelación de maquetas que requiere de mucho más tiempo para generar una sola propuesta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelos de color',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propiedades del color',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Círculo cromático',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Armonía del color',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Psicología del color',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Concept art</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño de personajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diseño de escenarios',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bancroft, T. (2012). Character mentor: learn by example to use expressions, poses, and staging to bring your characters to life. CRC Press.',
    },
    {
      referencia: 'Cortes, J. (2020). 19 Principios del diseño de personajes. ',
      link:
        'https://www.notodoanimacion.es/principios-del-diseno-de-personajes/',
    },
    {
      referencia:
        'Gámez, J. (2019). Cómo contar historias con el uso del color. ',
      link: 'https://www.animum3d.com/blog/uso-del-color-en-ilustracion/',
    },
    {
      referencia:
        'Jiménez, Ó. (2016). Diseña tus personajes de Animación con arte. ',
      link: 'https://www.animum3d.com/blog/ez-animacion-oscar-jimenez/',
    },
    {
      referencia:
        'González, D. (2015). Diseño de videojuegos: da forma a tus sueños. Ra-Ma.',
    },
    {
      referencia: 'Real Academia Española (RAE). Color. ',
      link: 'https://dle.rae.es/color',
    },
    {
      referencia: 'Vargas, Ó. J. (2020). Character Desing. ',
      link: '',
    },
    {
      referencia:
        'Whelan, B. (1994). La armonía en el color - Nuevas tendencias (Color Harmony 2). México: FinalCopy.  ',
      link:
        'https://corazondpapel.files.wordpress.com/2012/10/45547856-salinas-rosario-la-armonia-en-el-color-nuevas-tendencias.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acrílico',
      significado:
        'la pintura acrílica es una clase de pintura que contiene un material plastificado, pintura de secado rápido, en la que los pigmentos están contenidos en una emulsión de un polímero acrílico. Aunque solubles en agua una vez que secas son resistentes a la misma. Destaca especialmente por la rapidez del secado. Asimismo, al secar se modifica ligeramente el tono, más que en el óleo.',
    },
    {
      termino: 'Oleos',
      significado:
        'tipo de pintura que utiliza un vehículo graso, por lo general aceite de linaza, como disolvente de los pigmentos.',
    },
    {
      termino: 'Perpendicular',
      significado:
        'dicho de una línea o de un plano: Que forma ángulo recto contra línea o con otro plano.',
    },
    {
      termino: 'Silueta',
      significado: 'contorno de la figura.',
    },
    {
      termino: 'Tangente',
      significado:
        'recta que toca a una curva o a una superficie sin cortarlas.',
    },
  ],
  complementario: [
    {
      texto: 'Cortes, J. (2020). 19 Principios del diseño de personajes.',
      tipo: 'Artículo web',
      link:
        'https://www.notodoanimacion.es/principios-del-diseno-de-personajes/',
    },
    {
      texto: 'Gámez, J. (2019). Cómo contar historias con el uso del color.',
      tipo: 'Artículo web',
      link: 'https://www.animum3d.com/blog/uso-del-color-en-ilustracion/',
    },
    {
      texto: 'Jiménez, Ó. (2016). Diseña tus personajes de Animación con arte.',
      tipo: 'Página web',
      link: 'https://www.animum3d.com/blog/ez-animacion-oscar-jimenez/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Alexander García',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura -Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Andrés Camilo Penagos Beltran',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jose Daniel Guerrero Lievano',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
