// ==========================================
// DATOS CENTRALIZADOS DE PROYECTOS
// Fuente única de verdad para cards y páginas de detalle
// ==========================================

export interface ProjectContact {
  phone?: string;
  email?: string;
  location?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  coverImageUrl?: string;
  href: string;
  liveUrl?: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  role?: string;
  year?: string;
  status?: string;
  contact?: ProjectContact;
}

export const projects: ProjectData[] = [
  {
    slug: 'dashboard-seguimiento-institucional',
    title: 'Dashboard de Seguimiento Institucional',
    category: 'Power BI & SQL',
    shortDescription: 'Panel de control interactivo para la visualización de KPIs académicos y administrativos con actualización automatizada.',
    fullDescription:
      'Diseñado e implementado para la Universidad Santo Tomás, este dashboard centraliza el monitoreo de más de 5.000 registros mensuales, optimizando los tiempos de toma de decisiones gerenciales. Incorpora modelado multidimensional en estrella, medidas DAX avanzadas, y filtros jerárquicos que permiten al equipo directivo navegar desde lo macro hacia el nivel de detalle operativo con total fluidez.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80',
    href: 'https://github.com/JulianFVasquez1',
    technologies: ['Power BI', 'SQL Server', 'Excel Avanzado', 'DAX', 'ETL', 'Star Schema'],
    features: [
      'Visualización en tiempo real de KPIs académicos y administrativos',
      'Modelado multidimensional en estrella con SQL Server',
      'Filtros jerárquicos por facultades, coordinaciones y periodos',
      'Cálculos DAX avanzados: variaciones, acumulados, comparativos',
      'Exportación estructurada de informes gerenciales en PDF',
      'Actualización automatizada mensual con integración ETL',
    ],
    metrics: '5.000+ registros/mes',
    role: 'Analista BI & Desarrollador',
    year: '2024',
    status: 'Producción',
  },
  {
    slug: 'portafolio-web',
    title: 'Portafolio Web ',
    category: 'Desarrollo Frontend',
    shortDescription: 'Sitio web personal diseñado con estética minimalista dark, animaciones fluidas y arquitectura por componentes.',
    fullDescription:
      'Plataforma web moderna construida con Next.js 14 y TypeScript desde cero. Implementa un sistema de diseño minimalista dark con curvas de aceleración personalizadas utilizando Framer Motion, arquitectura modular con shadcn UI, integración de formulario de contacto funcional con EmailJS y optimizaciones de rendimiento y SEO que garantizan una experiencia premium.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&auto=format&fit=crop&q=80',
    href: 'https://github.com/JulianFVasquez1',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn UI', 'EmailJS'],
    features: [
      'Hero interactivo con fotografía corporativa y animación fluida de entrada',
      'Scroll reveal animado con Framer Motion en cada sección',
      'Formulario de contacto funcional integrado con EmailJS',
      'Arquitectura modular con componentes reutilizables TypeScript',
      'Páginas de detalle por proyecto con rutas dinámicas',
      'Diseño 100% responsivo optimizado para todos los dispositivos',
    ],
    metrics: '100% Responsivo & Performante',
    role: 'Desarrollador Full Frontend',
    year: '2025',
    status: 'En producción',
  },
  {
    slug: 'pipeline-extraccion-datos',
    title: 'Pipeline de Extracción & Limpieza de Datos',
    category: 'Python & Data Engineering',
    shortDescription: 'Sistema automatizado de procesamiento ETL para consolidar bases de datos institucionales mensuales.',
    fullDescription:
      'Motor de automatización desarrollado en Python utilizando Pandas y SQLAlchemy. El sistema extrae reportes de múltiples fuentes de datos no estructurados (Excel, CSV, reportes institucionales), realiza validación estricta de tipos de datos, limpieza de duplicados y nulos, y los consolida en PostgreSQL garantizando integridad referencial para análisis analítico posterior.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80',
    href: 'https://github.com/JulianFVasquez1',
    technologies: ['Python 3.11', 'Pandas', 'PostgreSQL', 'SQLAlchemy', 'OpenPyXL', 'Logging'],
    features: [
      'Extracción automática de archivos Excel y CSV institucionales multifuente',
      'Validación de integridad con reglas de negocio configurables',
      'Limpieza avanzada de duplicados, nulos y anomalías de tipos',
      'Carga a PostgreSQL con manejo transaccional ACID completo',
      'Generación de logs de trazabilidad detallados por ejecución',
      'Reducción del tiempo de procesamiento manual en un 75%',
    ],
    metrics: '-75% tiempo de procesamiento',
    role: 'Data Engineer',
    year: '2024',
    status: 'Entregado ',
  },
  {
    slug: 'everwood-faqs',
    title: 'Everwod FAQ Cloud',
    category: 'Full Stack & SaaS',
    shortDescription: 'Plataforma centralizada de gestión de conocimiento que convierte documentos en FAQs automatizadas con búsqueda inteligente y dashboard de métricas.',
    fullDescription:
      'Everwod FAQ Cloud es una plataforma SaaS full stack que centraliza la gestión del conocimiento organizacional. Permite subir documentos base y convertirlos automáticamente en preguntas frecuentes estructuradas. Incluye un sistema de subida de archivos, panel de sugerencias, dashboard de métricas en tiempo real, detección de estado del servicio, cursor personalizado animado, modo oscuro/claro con toggle, y una interfaz premium con glassmorphism y animaciones fluidas. Desplegado en Vercel con Next.js App Router.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80',
    href: 'https://github.com/JulianFVasquez1/everwod-FAQs',
    liveUrl: 'https://everwod-fa-qs.vercel.app/',
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'App Router'],
    features: [
      'Carga y procesamiento de documentos para generación automática de FAQs',
      'Dashboard de métricas y análisis en tiempo real',
      'Sistema de sugerencias y gestión de archivos subidos',
      'Cursor personalizado animado con efecto difference blend',
      'Toggle de modo oscuro/claro con transición suave',
      'Navegación completa: Subir, Archivos, Sugerencias, Dashboard y Métricas',
      'Indicador de estado del servicio en tiempo real',
      'Interfaz premium con glassmorphism, gradientes y tipografía display',
    ],
    metrics: 'SaaS ',
    role: 'Full Stack Developer',
    year: '2025',
    status: 'Entregado ',
  },
  {
    slug: 'hjb-lomos',
    title: 'HJB Premium — Lomo Fino al Vacío',
    category: 'E-commerce & Desarrollo Web',
    shortDescription: 'Sitio web corporativo de venta al por mayor de lomo fino de res empacado al vacío. Calidad premium certificada por INVIMA, para HJB de Héctor Julio Báez Fuentes.',
    fullDescription:
      'Plataforma web completa desarrollada para HJB Premium, empresa especializada en la venta al por mayor de lomo fino de res empacado al vacío en Colombia. El sitio presenta el catálogo de productos con certificación INVIMA, sección de nosotros, página de calidad, formulario de cotización y módulo de contacto con integración a WhatsApp. Construido con Next.js App Router, incluye un panel de administración privado, diseño premium con tipografía de display, carrusel de imágenes del producto y SEO local orientado al mercado colombiano.',
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1600&auto=format&fit=crop&q=80',
    href: 'https://hjb-lomos-ruby.vercel.app/',
    technologies: ['Next.js 14', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel', 'App Router'],
    features: [
      'Catálogo de productos premium: lomo fino de res 100% seleccionado empacado al vacío',
      'Certificación y sección de calidad INVIMA con información regulatoria',
      'Formulario de cotización mayorista para clientes B2B',
      'Integración de botón flotante de WhatsApp  para contacto directo',
      'Carrusel interactivo de imágenes del producto con controles de navegación',
      'Panel de acceso privado para administración del contenido',
      'SEO local optimizado para Colombia con metadatos Open Graph y Twitter Card',
      'Menú responsivo con navegación móvil tipo drawer animado',
    ],
    metrics: 'Venta mayorista B2B',
    role: 'Desarrollador Frontend & Web',
    year: '2025',
    status: 'En producción',
    liveUrl: 'https://hjb-lomos-ruby.vercel.app/',
    contact: {
  
    },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
