"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projects = [
  {
    title: "RajNify Music Streaming App",
    tech: ["Flutter", "Firebase", "REST APIs"],
    desc: "Cross-platform music streaming application with dark-themed, Spotify-inspired UI. Features background player, offline storage and real-time search.",
    github: "https://github.com/NitishKudave/RajNify-App"
  },
  {
    title: "ICMR NITVAR Institutional Website",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    desc: "Comprehensive institutional website with secure CMS, role-based access control, and dynamic admin dashboard.",
    github: "#"
  },
  {
    title: "AMR Study Portal",
    tech: ["React.js", "Firebase", "Firestore"],
    desc: "Interactive portal for Antimicrobial Resistance research with OAuth 2.0, real-time sync, and Google Cloud Functions.",
    github: "#"
  },
  {
    title: "IAT Platform",
    tech: ["Django", "PostgreSQL", "Render"],
    desc: "Production-grade psychology research platform with secure auth, exact timing measurements, and 99.9% uptime APIs.",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 w-full max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="text-gradient">03.</span> Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl flex flex-col h-full hover:border-[var(--color-neon-blue)]/50"
          >
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-[var(--color-neon-purple)]/10 text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/20">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-zinc-400 flex-grow mb-6">{project.desc}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <Github size={20} /> Code
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={20} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
