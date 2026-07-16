"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

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
    github: "https://github.com/NitishKudave/RajNify-App",
    color: "var(--color-neon-blue)",
    number: "01",
  },
  {
    title: "ICMR NITVAR Institutional Website",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    desc: "Comprehensive institutional website with secure CMS, role-based access control, and dynamic admin dashboard.",
    github: "#",
    color: "var(--color-neon-purple)",
    number: "02",
  },
  {
    title: "AMR Study Portal",
    tech: ["React.js", "Firebase", "Firestore"],
    desc: "Interactive portal for Antimicrobial Resistance research with OAuth 2.0, real-time sync, and Google Cloud Functions.",
    github: "#",
    color: "var(--color-neon-cyan)",
    number: "03",
  },
  {
    title: "IAT Platform",
    tech: ["Django", "PostgreSQL", "Render"],
    desc: "Production-grade psychology research platform with secure auth, exact timing measurements, and 99.9% uptime APIs.",
    github: "#",
    color: "var(--color-neon-pink)",
    number: "04",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="section-number">04.</span>
          <span className="shimmer-text">Projects</span>
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-lg mx-auto">
          Selected work that showcases my skills and passion.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card"
            >
              <div className="glass-card p-7 rounded-2xl flex flex-col h-full group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-4xl font-black opacity-10 font-mono"
                    style={{ color: project.color }}
                  >
                    {project.number}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-5">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-md font-medium transition-colors duration-300"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
