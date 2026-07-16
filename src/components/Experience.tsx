"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Raygain Technologies",
    date: "June 2023 - Present",
    desc: "Developed and deployed secure full-stack applications using Python/Django, React.js, and Flutter. Deployed on AWS and Render with CI/CD pipelines.",
    highlights: ["Python/Django", "React.js", "AWS", "CI/CD"],
  },
  {
    role: "Python Developer",
    company: "Globe Minds Technologies",
    date: "May 2021 - June 2023",
    desc: "Developed multiple Django-based applications serving 1000+ users. Applied web security best practices and data visualization techniques.",
    highlights: ["Django", "1000+ Users", "Security", "Data Viz"],
  },
  {
    role: "Python Developer Intern",
    company: "Sagveek Technologies",
    date: "May 2020 - April 2021",
    desc: "6 months training + 6 months internship gaining foundational backend engineering skills in Python and web development.",
    highlights: ["Python", "Backend", "Training", "Web Dev"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="section-number">03.</span>
          <span className="shimmer-text">Experience</span>
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-lg mx-auto">
          My professional journey in software development.
        </p>

        <div className="relative md:w-4/5 mx-auto pl-8">
          {/* Glowing Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="mb-10 last:mb-0 relative"
            >
              {/* Pulsing Dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="glass-card p-7 rounded-2xl ml-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={16} className="text-[var(--color-neon-cyan)]" />
                      {exp.role}
                    </h3>
                    <h4 className="text-[var(--color-neon-purple)] font-medium mt-0.5">{exp.company}</h4>
                  </div>
                  <span className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {exp.date}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-neon-blue)]/8 text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/15 font-medium"
                    >
                      {tag}
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
