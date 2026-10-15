// Todos los textos de la web viven acá. Para cambiar copy no hace falta tocar el diseño.
// Los textos marcados con TODO son provisorios: revisarlos y reemplazarlos.

import islaBosch1 from '../assets/proyectos/isla-bosch/render-1.jpg';
import islaBosch2 from '../assets/proyectos/isla-bosch/render-2.jpg';
import islaBosch3 from '../assets/proyectos/isla-bosch/render-3.jpg';
import islaBoschPortada from '../assets/proyectos/isla-bosch/portada.jpg';

export const site = {
  name: 'Lunaria',
  tagline: 'Diseño con intención',
  title: 'Lunaria | Estudio creativo',
  description:
    'Lunaria crea identidades, experiencias digitales y piezas visuales para marcas con ideas propias.',
  email: 'lunaria.estudionm@gmail.com',
  instagram: 'https://www.instagram.com/lunaria.estudiocreativo/',
  instagramHandle: '@lunaria.estudiocreativo',
  whatsapp: 'https://wa.me/',
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  eyebrow: 'Identidad · Digital · Movimiento',
  title: 'Tu marca merece un universo propio.',
  text: 'Creamos identidades visuales, experiencias digitales y contenido en movimiento para marcas con algo propio que decir.',
  cta: { label: 'Hablemos de tu idea', href: '#contacto' },
  ctaSecondary: { label: 'Conocé lo que hacemos', href: '#servicios' },
};

export const services = [
  {
    title: 'Identidad de marca',
    text: 'Logo, paleta, tipografía y manual de marca para que tu proyecto tenga una voz visual propia y coherente.',
    includes: ['Estrategia de marca', 'Diseño de logotipo', 'Sistema visual'],
    cta: 'Listos para dar identidad',
    visual: 'identity',
  },
  {
    title: 'Diseño web & UI/UX',
    text: 'Sitios y experiencias digitales intuitivas, atractivas y pensadas para las personas que las usan.',
    includes: ['Arquitectura y wireframes', 'Diseño UI responsive', 'Prototipo interactivo'],
    cta: 'Listos para diseñar',
    visual: 'web',
  },
  {
    title: 'Contenido para redes',
    text: 'Plantillas, estética y dirección visual para que tu comunidad reconozca tu universo a primera vista.',
    includes: ['Dirección visual', 'Piezas para redes', 'Contenido de campaña'],
    cta: 'Listos para crear',
    visual: 'social',
  },
  {
    title: 'Motion graphics',
    text: 'Animación gráfica para comunicar ideas, darle ritmo a tu contenido y hacer que tu marca se mueva.',
    includes: ['Guion y storyboard', 'Animación 2D', 'Motion graphics'],
    cta: 'Listos para animar',
    visual: 'motion',
  },
  {
    title: 'Diseño 3D',
    text: 'Visualización y animación 3D de productos, objetos y conceptos para presentar cada detalle con impacto.',
    includes: ['Diseño de producto', 'Modelado y materiales', 'Render 3D'],
    cta: 'Listos para modelar',
    visual: '3d',
  },
  {
    title: 'Packaging & producto',
    text: 'Diseño de envases y piezas aplicadas al producto, de la idea inicial a una presentación memorable.',
    includes: ['Diseño de envase', 'Etiquetas y variantes', 'Visualización de producto'],
    cta: 'Listos para presentar',
    visual: 'pack',
  },
];

// Ejemplos conceptuales provisorios para definir el estilo de la sección.
export const projects = [
  {
    slug: 'brava', title: 'Brava', category: 'Identidad', description: 'Una identidad enérgica para una marca gastronómica ficticia.',
    art: 'brava', size: 'wide', type: 'Identidad de marca', focus: 'Energía, color y una voz propia', tools: 'Estrategia · Dirección de arte · Sistema visual',
    intro: 'Una marca gastronómica inventada para explorar cómo una identidad puede sentirse cercana, intensa y fácil de reconocer.',
    idea: 'Brava nace como un lugar imaginario de cocina simple, sabores intensos y encuentros sin protocolo. El concepto cruza una paleta cálida con una tipografía de mucha presencia para construir una marca que se vea tan expresiva como se siente.',
    gallery: ['Sistema visual', 'Piezas de marca', 'Paleta & tipografía'],
  },
  {
    slug: 'casa-calma', title: 'Casa calma', category: 'Diseño web · UI/UX', description: 'Una experiencia digital simple para un espacio de bienestar imaginario.',
    art: 'casa', size: 'narrow', type: 'Diseño web · UI/UX', focus: 'Claridad, pausa y navegación simple', tools: 'Arquitectura · Interfaz · Prototipo',
    intro: 'Un concepto digital ficticio para un espacio de bienestar que invita a bajar el ritmo desde el primer momento.',
    idea: 'La propuesta imagina una web serena y fácil de recorrer, donde cada decisión ayuda a encontrar una actividad, conocer el espacio o reservar una clase. La composición editorial y los tonos suaves transmiten calma sin perder claridad.',
    gallery: ['Inicio & navegación', 'Agenda de actividades', 'Experiencia móvil'],
  },
  {
    slug: 'pausa', title: 'Pausa', category: 'Motion graphics', description: 'Un concepto de movimiento inspirado en bajar el ritmo.',
    art: 'pausa', size: 'narrow', type: 'Motion graphics', focus: 'Ritmo, atmósfera y movimiento', tools: 'Dirección de arte · Animación · Sonido',
    intro: 'Una pieza de movimiento conceptual sobre la importancia de hacer espacio y volver a lo esencial.',
    idea: 'Formas suaves, pausas y transiciones lentas construyen una pequeña identidad en movimiento. El ejercicio explora cómo el ritmo y el sonido también pueden expresar la personalidad de una marca.',
    gallery: ['Formas en movimiento', 'Exploración de color', 'Cuadro de cierre'],
  },
  {
    slug: 'isla-bosch', title: 'Isla Bosch', category: 'Diseño 3D · Punto de venta', description: 'Isla exhibidora para el Sistema Inalámbrico 12V/18V de Bosch.',
    art: 'forma', size: 'wide', type: 'Diseño 3D · Punto de venta', focus: 'Exhibición de producto y comunicación de marca', tools: 'Modelado · Materiales · Iluminación · Render',
    intro: 'Presentación de diseño y visualización 3D para una isla comercial (punto de venta) destinada a la marca Bosch.',
    idea: 'El objetivo del diseño es destacar la versatilidad del sistema de baterías intercambiables (“Una batería, muchas posibilidades”) de las líneas 12V y 18V. La estructura busca un equilibrio entre funcionalidad industrial y estética premium.',
    features: [
      { title: 'Zonificación', text: 'División clara entre las líneas de producto con paneles gráficos informativos.' },
      { title: 'Iluminación', text: 'Cenefa superior con iluminación LED perimetral e interna para destacar el producto desde lejos y generar atracción visual.' },
      { title: 'Materialidad', text: 'Uso de texturas metálicas y acabados en “diamond plate” (suelo antideslizante) en la superficie de exhibición para reforzar la durabilidad y el carácter industrial de la marca.' },
      { title: 'Almacenamiento', text: 'Góndolas inferiores optimizadas para carga de stock de producto.' },
    ],
    gallery: ['Vista lateral', 'Detalle superior'],
    real: true,
    thumb: islaBoschPortada,
    cover: islaBosch1,
    images: [islaBosch2, islaBosch3],
    sketchfab: {
      src: 'https://sketchfab.com/models/6a3e5ed2b87446e9ab169d8dbc58df67/embed',
      url: 'https://sketchfab.com/3d-models/isla-bosch-sistema-inalambrico-12v18v-6a3e5ed2b87446e9ab169d8dbc58df67',
      title: 'Isla Bosch Sistema Inalámbrico 12V/18V',
      author: 'Nicolás Martín',
      authorUrl: 'https://sketchfab.com/martin.nicolas',
    },
  },
];

export const pillars = [
  { icon: 'moon', title: 'Estrategia', text: 'Entendemos cada desafío para diseñar una respuesta clara y alineada con tus objetivos.' },
  { icon: 'leaf', title: 'Sensibilidad', text: 'Cuidamos los detalles y creamos comunicación visual que conecta con las personas.' },
  { icon: 'star', title: 'Innovación', text: 'Exploramos formatos, tecnología y nuevas formas de presentar cada idea.' },
  { icon: 'heart', title: 'Colaboración', text: 'Trabajamos cerca de cada equipo para transformar ideas en experiencias reales.' },
];

export const essence = {
  title: 'Creatividad con propósito.',
  text: [
    'Lunaria combina estrategia y diseño para construir marcas con una identidad clara y una presencia visual consistente.',
    'Desde la primera idea hasta la experiencia digital, cada proyecto se trabaja con curiosidad, sensibilidad y atención al detalle.',
  ],
};

export const about = {
  title: 'Creamos en equipo.',
  text: [
    'En Lunaria trabajamos codo a codo con cada proyecto: escuchamos, intercambiamos ideas y cuidamos cada detalle, desde la primera charla hasta el resultado final.',
    'Combinamos estrategia y sensibilidad para crear identidades y experiencias digitales que se sienten propias y ayudan a cada marca a crecer.',
  ],
};

export const contact = {
  title: '¿Tenés un proyecto en mente?',
  text: 'Contanos qué estás imaginando, en qué etapa está tu proyecto y qué te gustaría crear. Nos va a encantar leerte.',
};
