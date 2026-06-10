"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Python Developer",
  "Django Expert",
  "Flutter Developer",
  "Cloud Engineer"
];

export default function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === role) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : role.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <span className="block text-gradient mt-2 min-h-[1.5em]">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-[var(--color-neon-cyan)] ml-1 align-middle"
      />
    </span>
  );
}
