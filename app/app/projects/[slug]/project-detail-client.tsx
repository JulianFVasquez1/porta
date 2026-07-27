'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectData } from '@/lib/projects-data';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  project: ProjectData;
}

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ProjectDetailClient({ project }: Props) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">

      {/* ── Cover Image (full bleed) ── */}
      <div className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={project.coverImageUrl || project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

        {/* Back button floating on top of cover */}
        <div className="absolute top-6 left-6 md:left-12 z-10">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-zinc-700/60 text-zinc-300 text-sm font-medium hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
          >
            <ArrowLeftIcon />
            <span>Volver al portafolio</span>
          </Link>
        </div>

        {/* Category badge on cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.1 }}
          className="absolute bottom-10 left-6 md:left-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg bg-yellow-400 text-black shadow-lg">
            {project.category}
          </span>
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">

        {/* ── Title Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.15 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            {project.role && (
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>{project.role}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span>{project.year}</span>
              </div>
            )}
            {project.status && (
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-green-400 font-semibold">{project.status}</span>
              </div>
            )}
            {project.metrics && (
              <div className="ml-auto px-3 py-1.5 rounded-lg bg-zinc-900 border border-yellow-400/30 text-yellow-400 font-semibold tracking-wide">
                ⚡ {project.metrics}
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-zinc-900" />

        {/* ── Overview + Tech ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Description (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.25 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="w-6 h-0.5 bg-yellow-400" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">
                Descripción del Proyecto
              </h2>
            </div>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Tech Stack (1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.35 }}
            className="space-y-5"
          >
            <div className="flex items-center space-x-3">
              <div className="w-6 h-0.5 bg-yellow-400" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">
                Stack Tecnológico
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/60 hover:text-yellow-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Features ── */}
        {project.features?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-6 h-0.5 bg-yellow-400" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">
                Funcionalidades Clave
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: SMOOTH_EASE, delay: 0.45 + idx * 0.07 }}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-zinc-950 border border-zinc-800/70 hover:border-yellow-400/30 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="mt-0.5 p-1.5 rounded-md bg-yellow-400/10 text-yellow-400 shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-zinc-300 font-light leading-snug">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* ── Contact Info (for client projects) ── */}
        {project.contact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.55 }}
            className="space-y-5 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/70"
          >
            <div className="flex items-center space-x-3">
              <div className="w-6 h-0.5 bg-yellow-400" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">
                Información del Cliente
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.contact.phone && (
                <a
                  href={`tel:${project.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all group"
                >
                  <div className="p-1.5 rounded-md bg-yellow-400/10 text-yellow-400 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Teléfono</p>
                    <p className="text-sm text-zinc-300 group-hover:text-yellow-400 transition-colors font-medium">{project.contact.phone}</p>
                  </div>
                </a>
              )}
              {project.contact.email && (
                <a
                  href={`mailto:${project.contact.email}`}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-all group"
                >
                  <div className="p-1.5 rounded-md bg-yellow-400/10 text-yellow-400 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-zinc-300 group-hover:text-yellow-400 transition-colors font-medium break-all">{project.contact.email}</p>
                  </div>
                </a>
              )}
              {project.contact.location && (
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="p-1.5 rounded-md bg-yellow-400/10 text-yellow-400 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Ubicación</p>
                    <p className="text-sm text-zinc-300 font-medium leading-snug">{project.contact.location}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.6 }}
          className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-zinc-500 font-light">
            ¿Te interesa este proyecto? Puedes verlo en vivo o contactarme.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-end">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-sm hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-700"
            >
              Contáctame
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-zinc-900 text-zinc-300 font-bold text-sm hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-yellow-400/40 hover:text-yellow-400"
              >
                <span>Ver Sitio Web</span>
                <ExternalLinkIcon />
              </a>
            )}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition-colors shadow-[0_0_24px_rgba(234,179,8,0.25)]"
            >
              <span>Ver en GitHub</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Footer strip ── */}
      <footer className="py-8 text-center border-t border-zinc-900 bg-black text-zinc-600">
        <p className="text-xs font-semibold tracking-wider uppercase">
          Julián Vásquez Ojeda &copy; {new Date().getFullYear()} — Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
