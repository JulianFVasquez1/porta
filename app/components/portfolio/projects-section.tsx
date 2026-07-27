'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/projects-data';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ProjectsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" ref={ref} className="w-full bg-black py-24 px-6 md:px-12 text-white selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto space-y-16">

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
              Portafolio de Trabajos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Proyectos Destacados
          </h2>
          <p className="max-w-xl text-sm text-zinc-400 font-light leading-relaxed">
            Haz clic en cualquier proyecto para ver la página de detalle completa con tecnologías, funcionalidades y más.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.12 * idx }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] h-full"
              >
                {/* Cover Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900 shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute bottom-4 left-4 text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-yellow-400 text-black">
                    {project.category}
                  </span>

                  {/* Arrow indicator on hover */}
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700/60 text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 group-hover:border-yellow-400/50 transition-all duration-300">
                    <ArrowRightIcon />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-1 rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-zinc-900 text-zinc-600 border border-zinc-800">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60">
                    <div className="flex items-center space-x-1.5">
                      {project.status && (
                        <>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          <span className="text-[10px] font-medium text-zinc-500">{project.status}</span>
                        </>
                      )}
                    </div>
                    <span className="inline-flex items-center space-x-1 text-xs font-semibold text-zinc-500 group-hover:text-yellow-400 transition-colors duration-300">
                      <span>Ver detalles</span>
                      <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
