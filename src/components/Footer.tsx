"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const Github = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold text-gradient">NMK.</span>
            <p className="text-zinc-600 text-xs">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NitishKudave"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/nitish-kudave-674a7b113"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 hover:text-[var(--color-neon-blue)] bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin />
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-300 group"
            whileHover={{ y: -2 }}
            style={{ cursor: 'pointer' }}
          >
            <span className="uppercase tracking-widest">Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUp size={14} />
            </motion.div>
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Nitish Mohan Kudave. Built with
            <Heart size={10} className="text-[var(--color-neon-pink)]" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}
