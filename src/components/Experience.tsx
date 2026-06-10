"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer",
    company: "Raygain Technologies",
    date: "June 2023 - Present",
    desc: "Developed and deployed secure full-stack applications using Python/Django, React.js, and Flutter. Deployed on AWS and Render with CI/CD."
  },
  {
    role: "Python Developer",
    company: "Globe Minds Technologies",
    date: "May 2021 - June 2023",
    desc: "Developed multiple Django-based applications serving 1000+ users. Applied web security best practices and data visualization."
  },
  {
    role: "Python Developer Intern",
    company: "Sagveek Technologies",
    date: "May 2020 - April 2021",
    desc: "6 months training + 6 months internship gaining foundational backend engineering skills."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 w-full max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="text-gradient">02.</span> Experience
      </h2>
      <div className="relative border-l border-[var(--color-neon-purple)]/30 md:w-3/4 mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--background)] border-2 border-[var(--color-neon-cyan)]" />
            <div className="glass-card p-8 rounded-2xl hover:border-[var(--color-neon-purple)]/50 transition-colors">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-[var(--color-neon-cyan)] text-lg mt-1">{exp.company}</h4>
              <span className="text-zinc-500 text-sm block mb-4 mt-2">{exp.date}</span>
              <p className="text-zinc-400">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
