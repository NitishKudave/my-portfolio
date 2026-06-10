"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 w-full max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-gradient">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/10 to-[var(--color-neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-zinc-300 leading-relaxed relative z-10 text-lg">
              I am a Results-driven Full Stack Developer with 3+ years of experience in developing secure, scalable web and mobile applications. My expertise spans Python, Django, React.js, Next.js, and Flutter.
              <br /><br />
              I have a proven track record of deploying production-ready applications on multiple cloud platforms with a strong focus on security, performance, and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "3+ Years", desc: "Experience" },
              { title: "10+", desc: "Projects Completed" },
              { title: "Multiple", desc: "Deployments" },
              { title: "Full Stack", desc: "Expertise" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-[var(--color-neon-cyan)]/50 transition-colors"
              >
                <h3 className="text-3xl font-bold text-gradient mb-2">{stat.title}</h3>
                <p className="text-zinc-400 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
