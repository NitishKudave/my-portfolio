"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    color: "var(--color-neon-blue)",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    color: "var(--color-neon-purple)",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django / DRF", level: 92 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    color: "var(--color-neon-cyan)",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud size={20} />,
    color: "var(--color-neon-pink)",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 78 },
      { name: "Linux / CI-CD", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-zinc-300 font-medium">{name}</span>
        <motion.span
          className="text-xs font-mono"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="section-number">02.</span>
          <span className="shimmer-text">Technical Skills</span>
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-lg mx-auto">
          Technologies I work with to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-7 rounded-2xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${category.color}15`,
                    color: category.color,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skill Bars */}
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.2 + skillIdx * 0.15 + 0.3}
                  color={category.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
