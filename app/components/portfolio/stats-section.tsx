'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

export const StatsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = { projects: 15, years: 2, clients: 10 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCounts({
        projects: Math.floor(targets.projects * easeOut),
        years: Math.floor(targets.years * easeOut * 10) / 10,
        clients: Math.floor(targets.clients * easeOut),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    { value: `${counts.projects}+`, label: 'Proyectos Completados', desc: 'En Power BI, SQL, Python y Desarrollo Web' },
    { value: `${counts.years}+`, label: 'Años de Experiencia', desc: 'Análisis institucional y desarrollo de sistemas' },
    { value: `${counts.clients}+`, label: 'Clientes & Proyectos Felices', desc: 'Soluciones entregadas con alto impacto' },
  ];

  return (
    <section ref={ref} className="w-full bg-black py-20 px-6 md:px-12 selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: idx * 0.15 }}
              className="relative group p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-black text-yellow-400 tracking-tight">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
