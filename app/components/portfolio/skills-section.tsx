'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const skillsItems: CardStackItem[] = [
  {
    id: 'power-bi',
    title: 'Power BI',
    tag: 'Business Intelligence',
    description: 'Diseño de Dashboards interactivos, modelado DAX, ETL y monitoreo de KPIs institucionales.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'python',
    title: 'Python',
    tag: 'Data Science & Automation',
    description: 'Extracción, limpieza, procesamiento automatizado y análisis de datos masivos con Pandas/NumPy.',
    imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'sql',
    title: 'SQL Databases',
    tag: 'Bases de Datos',
    description: 'Consultas avanzadas, optimización de queries y gestión relacional en MySQL y PostgreSQL.',
    imageSrc: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'data-analytics',
    title: 'Data Analyst',
    tag: 'Especialidad Principal',
    description: 'Transformación estratégica de datos en ventajas competitivas y reportes gerenciales.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'excel',
    title: 'Excel Avanzado',
    tag: 'Análisis Operativo',
    description: 'Power Query, tablas dinámicas avanzadas y automatización de reportes operativos.',
    imageSrc: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'react-next',
    title: 'React & Next.js',
    tag: 'Desarrollo Web',
    description: 'Construcción de aplicaciones web modernas, responsivas e interactivas.',
    imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'ts-js',
    title: 'TypeScript / JavaScript',
    tag: 'Frontend Engineering',
    description: 'Desarrollo frontend limpio, tipado robusto y arquitectura de software escalable.',
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
  },
];

export const SkillsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" ref={ref} className="w-full bg-black py-24 px-6 md:px-12 text-white selection:bg-yellow-400 selection:text-black overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-yellow-400" />
            <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">
              Competencias Técnicas & Especialidades
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Habilidades & Especialidades
          </h2>
          <p className="max-w-xl text-sm text-zinc-400 font-light leading-relaxed">
            Haz clic o arrastra las tarjetas para interactuar con mi stack tecnológico y áreas de dominio.
          </p>
        </motion.div>

        {/* CardStack Component */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.2 }}
          className="w-full"
        >
          <CardStack
            items={skillsItems}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={480}
            cardHeight={300}
          />
        </motion.div>

      </div>
    </section>
  );
};
