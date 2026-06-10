"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "Django", "Django REST", "React.js", "Next.js", "Flutter",
  "PostgreSQL", "MySQL", "Firebase", "AWS", "Docker", "GitHub", "Render", "Linux"
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="text-gradient">04.</span> Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass-card px-6 py-3 rounded-xl border border-[var(--color-neon-blue)]/20 text-zinc-300 hover:text-[var(--color-neon-cyan)] hover:border-[var(--color-neon-cyan)]/50 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
