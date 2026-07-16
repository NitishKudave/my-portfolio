"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown, Send, CheckCircle } from "lucide-react";

import TypingAnimation from "@/components/TypingAnimation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// SVG Icons
const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// ── Contact Component ──
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const endpoint = "https://formspree.io/f/xgoblydz";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Formspree Error:", await response.text());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, text: "nitishkudave111@gmail.com", color: "var(--color-neon-cyan)" },
    { icon: <Phone size={20} />, text: "+91 9970034911", color: "var(--color-neon-purple)" },
    { icon: <MapPin size={20} />, text: "Pune, India", color: "var(--color-neon-blue)" },
  ];

  return (
    <section id="contact" className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="section-number">05.</span>
          <span className="shimmer-text">Get In Touch</span>
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-lg mx-auto">
          Have a project in mind? Let&apos;s create something extraordinary together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-white">Let&apos;s build something amazing</h3>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Whether you have a question, a project in mind, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-zinc-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://linkedin.com/in/nitish-kudave-674a7b113"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-neon-blue)]/10"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/NitishKudave"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="glass-card p-8 rounded-2xl flex flex-col gap-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</label>
              <input type="text" id="name" name="name" required className="glow-input" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</label>
              <input type="email" id="email" name="email" required className="glow-input" placeholder="your@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Message</label>
              <textarea id="message" name="message" required rows={4} className="glow-input resize-none" placeholder="Tell me about your project..." />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 glow-button-filled flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ cursor: 'pointer' }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle size={18} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

// Dynamically import 3D components to avoid SSR issues
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

// ── Hero Section ──
function Hero() {
  return (
    <div className="z-10 w-full max-w-7xl px-6 flex flex-col items-center pt-36 md:pt-44 pb-16">
      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="floating-badge mb-8"
      >
        Available for Hire
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-center leading-[1.05]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="shimmer-text">Nitish Mohan Kudave</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <TypingAnimation />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Building secure, scalable web and mobile applications using
        <span className="text-[var(--color-neon-cyan)]"> Python</span>,
        <span className="text-[var(--color-neon-purple)]"> Django</span>,
        <span className="text-[var(--color-neon-blue)]"> React.js</span>, and
        <span className="text-[var(--color-neon-pink)]"> Flutter</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <a href="/cv.pdf" download className="glow-button-filled flex items-center gap-2">
          <ArrowDown size={16} /> Download CV
        </a>
        <a href="#contact" className="glow-button text-zinc-300 flex items-center gap-2">
          <Mail size={16} /> Get In Touch
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Main Page ──
export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <div className="z-10 w-full flex flex-col items-center" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--background) 5%, var(--background) 100%)' }}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
