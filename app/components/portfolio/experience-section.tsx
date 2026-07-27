'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const experiences = [
  {
    role: 'Analista de Datos',
    company: 'Universidad Santo Tomás',
    location: 'Tunja, Boyacá',
    period: '2025',
    achievements: [
      'Diseñé y administré dashboards en Power BI para monitoreo de KPIs institucionales, reduciendo tiempos de revisión gerencial.',
      'Automaticé la extracción, limpieza y procesamiento de conjuntos de datos de más de 5.000 registros mensuales.',
      'Generé reportes estructurados semanales para apoyo a la toma de decisiones de directivos y coordinadores.',
      'Apliqué paquetes estadísticos para el análisis de conjuntos de datos académicos y operativos.',
      'Coordiné y colaboré en entornos de trabajo virtual, garantizando cumplimiento de lineamientos de planeación e información.',
    ],
  },
];

const education = [
  {
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad Santo Tomás',
    location: 'Tunja, Boyacá',
    period: '2022 – Actualidad (10° Semestre)',
    description: 'Enfoque en Ciencia de Datos, Ingeniería de Software, Bases de Datos Relacionales y Arquitectura de Sistemas.',
  },
];

export const ExperienceSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="experience" ref={ref} className="w-full bg-black py-24 px-6 md:px-12 text-white selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-yellow-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">
                Trayectoria Profesional
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Experiencia & Educación
            </h2>
            <p className="max-w-xl text-sm text-zinc-400 font-light leading-relaxed">
              Mi recorrido aplicando ingeniería de datos y software para crear impacto institucional.
            </p>
          </motion.div>

          {/* Download CV CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.3 }}
          >
            <a
              href="/CV/CV_Julian_Vasquez_Ojeda..pdf"
              download
              className="cv-download-btn"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                width: '190px',
                height: '44px',
                cursor: 'pointer',
                border: '2px solid #EAB308',
                boxShadow: '4px 4px 0px #EAB308',
                backgroundColor: '#111111',
                borderRadius: '10px',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <style>{`
                .cv-download-btn .btn-text {
                  transform: translateX(18px);
                  color: #EAB308;
                  font-weight: 700;
                  font-size: 13px;
                  letter-spacing: 0.02em;
                  white-space: nowrap;
                  transition: all 0.3s ease;
                }
                .cv-download-btn .btn-icon {
                  position: absolute;
                  transform: translateX(148px);
                  height: 100%;
                  width: 42px;
                  background-color: #EAB308;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.3s ease;
                }
                .cv-download-btn .btn-icon svg {
                  width: 20px;
                  fill: #111111;
                }
                .cv-download-btn:hover .btn-text {
                  color: transparent;
                  transition: all 0.3s ease;
                }
                .cv-download-btn:hover .btn-icon {
                  width: 190px;
                  transform: translateX(0);
                  transition: all 0.3s ease;
                }
                .cv-download-btn:active {
                  transform: translate(3px, 3px);
                  box-shadow: 0px 0px 0px #EAB308;
                }
              `}</style>
              <span className="btn-text">Descarga mi CV</span>
              <span className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"/>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"/>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"/>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experiencia Laboral (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-3 text-yellow-400">
              <BriefcaseIcon className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white tracking-wide">Experiencia Laboral</h3>
            </div>

            <div className="relative pl-6 space-y-12 border-l border-zinc-800">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.2 + idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_#EAB308] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-500 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                        <p className="text-sm font-semibold text-yellow-400">{exp.company} • <span className="text-zinc-400 font-normal">{exp.location}</span></p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-zinc-300 font-light leading-relaxed">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-yellow-400 font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Educación & Formación (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3 text-yellow-400">
              <GraduationCapIcon className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white tracking-wide">Formación Académica</h3>
            </div>

            <div className="relative pl-6 space-y-8 border-l border-zinc-800">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.3 + idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-yellow-400 transition-colors" />

                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-500 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                        <p className="text-xs font-medium text-yellow-400">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
