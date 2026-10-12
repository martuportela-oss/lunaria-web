// Todos los textos de la web viven acá. Para cambiar copy no hace falta tocar el diseño.
// Los textos marcados con TODO son provisorios: revisarlos y reemplazarlos.

export const site = {
  name: 'Lunaria',
  tagline: 'Estudio creativo',
  title: 'Lunaria | Estudio creativo',
  description:
    'Lunaria es un estudio creativo que fusiona diseño, sensibilidad y narrativa visual para acompañar proyectos que inspiran.',
  // TODO: reemplazar por los datos reales
  email: 'hola@lunaria.com',
  instagram: 'https://instagram.com/lunaria',
  instagramHandle: '@lunaria',
  whatsapp: 'https://wa.me/540000000000',
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Esencia', href: '#esencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  eyebrow: 'Estudio creativo',
  title: 'Diseño para ideas extraordinarias.',
  text: 'Fusionamos diseño, sensibilidad y narrativa visual para acompañar proyectos creativos que inspiran.',
  cta: { label: 'Hablemos de tu proyecto', href: '#contacto' },
  ctaSecondary: { label: 'Ver servicios', href: '#servicios' },
};

// TODO: ajustar a los servicios reales de la agencia
export const services = [
  {
    title: 'Identidad de marca',
    text: 'Logo, paleta, tipografía y manual de marca para que tu proyecto tenga una voz visual propia y coherente.',
  },
  {
    title: 'Diseño editorial',
    text: 'Portadas, maquetación y piezas gráficas para autoras, creadoras y proyectos del mundo literario.',
  },
  {
    title: 'Contenido para redes',
    text: 'Plantillas, estética y dirección visual para que tu comunidad reconozca tu universo a primera vista.',
  },
  {
    title: 'Papelería y merchandising',
    text: 'Tarjetas, packaging y piezas físicas pensadas con intención y atención al detalle.',
  },
];

export const pillars = [
  { icon: 'moon', title: 'Inspiración', text: 'Encontramos inspiración en las ideas, las formas, los colores y todo lo que despierta la creatividad.' },
  { icon: 'leaf', title: 'Sensibilidad', text: 'Valoramos los detalles, la estética cuidada y la comunicación visual que transmite emociones.' },
  { icon: 'star', title: 'Estética', text: 'Una identidad visual coherente, atemporal y versátil, con un estilo elegante y moderno.' },
  { icon: 'heart', title: 'Conexión', text: 'Diseñamos para crear vínculos entre ideas, personas y marcas que inspiran.' },
];

export const essence = {
  title: 'Creatividad con propósito.',
  text: [
    'Lunaria nace de la pasión por el diseño, la narrativa visual y el mundo literario. Es un espacio donde las ideas se convierten en identidades, y cada proyecto se trabaja con intención, sensibilidad y atención al detalle.',
    'Creemos en el poder de una estética cuidada para conectar emociones, contar historias y dar vida a marcas que inspiran.',
  ],
};

// TODO: reemplazar por proyectos reales (imagen, cliente, resultado)
export const projects = [
  { tag: 'Identidad', title: 'Proyecto 01', note: 'Próximamente' },
  { tag: 'Editorial', title: 'Proyecto 02', note: 'Próximamente' },
  { tag: 'Redes', title: 'Proyecto 03', note: 'Próximamente' },
];

export const about = {
  title: 'Detrás de Lunaria.',
  text: [
    // TODO: contar la historia real de las dos personas del estudio
    'Somos un estudio creativo pequeño y cercano. Trabajamos de la mano con cada cliente para entender su historia y traducirla en una identidad visual con alma.',
  ],
};

export const contact = {
  title: 'Cuéntanos tu historia.',
  text: 'Si tenés una idea, un proyecto o una marca por nacer, escribinos. Respondemos con cariño y sin apuro.',
};
