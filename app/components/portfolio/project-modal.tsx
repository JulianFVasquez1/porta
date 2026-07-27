'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

export interface ProjectDetail {
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  href: string;
  technologies: string[];
  features?: string[];
  metrics?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: SMOOTH_EASE }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 text-white shadow-2xl my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-zinc-300 backdrop-blur-md transition-colors hover:bg-yellow-400 hover:text-black border border-zinc-700/50"
              aria-label="Cerrar modal"
            >
              <XIcon className="h-5 w-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-zinc-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              {/* Category Badge overlay */}
              <div className="absolute bottom-6 left-6 md:left-8">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-yellow-400 text-black shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              
              {/* Title & Metrics */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-yellow-400 font-medium mt-1">
                    Proyecto por Julián Vásquez Ojeda
                  </p>
                </div>

                {project.metrics && (
                  <div className="shrink-0 px-4 py-2 rounded-xl bg-zinc-900 border border-yellow-400/30 text-yellow-400 font-semibold text-xs tracking-wide">
                    ⚡ {project.metrics}
                  </div>
                )}
              </div>

              {/* Extended Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                  Descripción del Proyecto
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                    Funcionalidades Clave
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                        <div className="p-1 rounded bg-yellow-400/10 text-yellow-400 mt-0.5 shrink-0">
                          <CheckIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-zinc-300 font-light leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Stack */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                >
                  <span>Ver en GitHub / Proyecto</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-sm hover:bg-zinc-800 transition-colors border border-zinc-800"
                >
                  Cerrar Detalles
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
