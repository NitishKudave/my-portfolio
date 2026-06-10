"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          NMK.
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-zinc-300 hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <a 
          href="/cv.pdf" 
          download 
          className="glass-card px-4 py-2 rounded-full text-sm font-medium hover:border-white transition-all cursor-pointer"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
