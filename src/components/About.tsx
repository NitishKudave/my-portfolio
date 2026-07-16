"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Cloud Deployments" },
  { value: 99, suffix: "%", label: "Uptime APIs" },
];

export default function About() {
  return (
    <section id="about" className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="section-number">01.</span>
          <span className="shimmer-text">About Me</span>
        </h2>
        <p className="text-zinc-500 text-center mb-16 max-w-lg mx-auto">
          A passionate full-stack developer crafting exceptional digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bio Card */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-zinc-300 leading-relaxed text-[0.95rem]">
              I am a Results-driven Full Stack Developer with <span className="text-[var(--color-neon-cyan)] font-semibold">3+ years</span> of experience in developing secure, scalable web and mobile applications. My expertise spans <span className="text-[var(--color-neon-purple)] font-semibold">Python, Django, React.js, Next.js</span>, and <span className="text-[var(--color-neon-pink)] font-semibold">Flutter</span>.
            </p>
            <br />
            <p className="text-zinc-300 leading-relaxed text-[0.95rem]">
              I have a proven track record of deploying production-ready applications on multiple cloud platforms with a strong focus on <span className="text-[var(--color-neon-green)] font-semibold">security, performance, and reliability</span>.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-3xl md:text-4xl font-black text-gradient mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
