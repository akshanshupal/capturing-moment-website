"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  delay = 0,
  y = 18,
  stagger = 0.06,
  enableHover = false,
  className,
  wordClassName,
}: {
  text: string;
  delay?: number;
  y?: number;
  stagger?: number;
  enableHover?: boolean;
  className?: string;
  wordClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const words = React.useMemo(() => text.trim().split(/\s+/).filter(Boolean), [text]);

  if (reduceMotion) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className={`inline-block ${wordClassName ?? ""}`}
          variants={{
            hidden: { opacity: 0, y, filter: "blur(8px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={
            enableHover
              ? {
                  y: -2,
                  scale: 1.02,
                  filter: "drop-shadow(0px 12px 28px rgba(255,255,255,0.18))",
                }
              : undefined
          }
          whileTap={enableHover ? { scale: 0.98 } : undefined}
        >
          {word}
          {idx < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
