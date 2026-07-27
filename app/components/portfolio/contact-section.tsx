'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const ContactSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_zasgvy9',
        'template_rnap1jb',
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'E-b5_Gjlycly-oK3p'
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente por correo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MailIcon, label: 'Correo Electrónico', value: 'julianvasquez799@gmail.com', href: 'mailto:julianvasquez799@gmail.com' },
    { icon: PhoneIcon, label: 'WhatsApp / Teléfono', value: '+57 300 462 7891', href: 'https://wa.me/573004627891' },
    { icon: MapPinIcon, label: 'Ubicación', value: 'Bogotá, Colombia', href: '#' },
  ];

  return (
    <section id="contact" ref={ref} className="w-full bg-black py-24 px-6 md:px-12 text-white selection:bg-yellow-400 selection:text-black">
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
              Contacto & Comunicación
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Trabajemos Juntos
          </h2>
          <p className="max-w-xl text-sm text-zinc-400 font-light leading-relaxed">
            ¿Tienes un proyecto en mente o deseas consultar servicios de análisis de datos o desarrollo web? Envíame un mensaje.
          </p>
        </motion.div>

        {/* Grid: Info Cards (5 cols) + Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.15 * idx }}
                  className="flex items-center space-x-5 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {info.label}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm space-y-6"
          >
            <h3 className="text-xl font-bold text-white tracking-wide">
              Envíame un Mensaje
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 space-y-2 text-center">
                <h4 className="text-lg font-bold">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-zinc-300">
                  Gracias por comunicarte. Te responderé a la brevedad posible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-yellow-400 text-black text-xs font-bold hover:bg-yellow-300 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="carlos@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe aquí los detalles de tu consulta..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 disabled:opacity-50 transition-colors shadow-[0_0_25px_rgba(234,179,8,0.2)]"
                >
                  {isSubmitting ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <SendIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
