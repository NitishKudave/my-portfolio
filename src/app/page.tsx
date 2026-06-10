"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import TypingAnimation from "@/components/TypingAnimation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// ----------------------------------------------------------------------
// EMBEDDED CONTACT COMPONENT
// ----------------------------------------------------------------------
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

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData.entries());
    object.access_key = "68c60623-f654-4ce4-b6c1-f4dcd025decb";
    const json = JSON.stringify(object);
    
    const endpoint = ["https://api", ".web3", "forms.com/submit"].join("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json,
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 w-full max-w-5xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">05.</span> Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's build something amazing</h3>
            <p className="text-zinc-400 mb-8">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--color-neon-cyan)]">
                  <Mail size={20} />
                </div>
                <span>nitishkudave111@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--color-neon-purple)]">
                  <Phone size={20} />
                </div>
                <span>+91 9970034911</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--color-neon-blue)]">
                  <MapPin size={20} />
                </div>
                <span>Pune, India</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://linkedin.com/in/nitish-kudave-674a7b113" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/NitishKudave" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white hover:border-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <form className="glass-card p-8 rounded-2xl flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-zinc-400">Name</label>
              <input type="text" id="name" name="name" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
              <input type="email" id="email" name="email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
              <textarea id="message" name="message" required rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors resize-none"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="mt-4 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
              {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

// Dynamically import 3D components to avoid SSR issues
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-background">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Content Overlay */}
      <div className="z-10 w-full max-w-7xl px-6 flex flex-col items-center pt-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center">
          <span className="block text-foreground">Nitish Mohan Kudave</span>
          <TypingAnimation />
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl text-center">
          Building secure, scalable web and mobile applications using Python, Django, React.js, and Flutter.
        </p>
      </div>

      <div className="z-10 w-full flex flex-col items-center mt-20 bg-background/80 backdrop-blur-sm">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
