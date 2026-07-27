'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
    part3?: string;
  };
  socialLinks: { icon: React.ComponentType<{ className?: string }>; href: string }[];
  locationText: string;
  hideCircle?: boolean;
  className?: string;
}

// Custom smooth ease-out curve (no bounce, silky fluid motion)
const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase transition-colors hover:text-white"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ComponentType<{ className?: string }> }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  hideCircle = false,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black text-white p-6 font-sans md:p-12 selection:bg-yellow-400 selection:text-black',
        className
      )}
    >
      {/* 1. Header (Navegación) */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-xl font-bold tracking-wider text-white"
        >
          {logoText}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="hidden items-center space-x-8 md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-12 gap-4 py-4">

        {/* 2. Texto Izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="z-20 md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start justify-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="w-8 h-0.5 bg-yellow-400 mb-6 origin-left"
          />
          <p className="max-w-xs text-sm leading-relaxed text-zinc-300 md:mx-0 font-light">{mainText}</p>
          <a href={readMoreLink} className="mt-6 inline-block text-sm font-semibold text-white underline underline-offset-8 decoration-1 hover:text-yellow-400 transition-colors">
            Read More
          </a>
        </motion.div>

        {/* 3. Centro: Círculo Amarillo + Foto Animados */}
        <div className="relative md:col-span-5 flex justify-center items-center h-full min-h-[300px] md:min-h-[450px]">

          {/* Círculo Amarillo (SE MANTIENE IGUAL QUE EL ORIGINAL) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: SMOOTH_EASE,
              delay: 0.2
            }}
            className="absolute z-0 h-[260px] w-[260px] rounded-full bg-[#EAB308] md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px] -translate-y-4 md:-translate-y-8 shadow-[0_0_80px_rgba(234,179,8,0.2)]"
          ></motion.div>

          {/* Foto (AQUÍ ESTÁN LOS CAMBIOS PARA AGRANDAR AL SUJETO) */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className={cn(
              "relative z-10 h-auto object-cover pointer-events-none select-none drop-shadow-2xl origin-bottom",
              // Mantenemos los anchos originales para no alterar el layout
              "w-[320px] md:w-[500px] lg:w-[800px]", 
              // APLICAMOS ESCALA para agrandar al sujeto un 25% (puedes usar scale-110 o scale-150 si prefieres)
              "scale-150", 
              // Ajustamos la posición vertical para que el corte inferior quede bien tras la escala
              "translate-y-12 md:translate-y-20 lg:translate-y-24"
            )}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: SMOOTH_EASE,
              delay: 0.5
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* 4. Texto Gigante Derecha */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 1.0 }}
          className="z-20 md:col-span-4 flex items-center justify-center md:justify-start"
        >
          <h1 className="text-6xl font-black text-white md:text-8xl lg:text-[120px] leading-[0.88] tracking-tight">
            {overlayText.part1}
            <br />
            {overlayText.part2}
            {overlayText.part3 && (
              <>
                <br />
                {overlayText.part3}
              </>
            )}
          </h1>
        </motion.div>
      </div>

      {/* 5. Footer */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center space-x-5"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};