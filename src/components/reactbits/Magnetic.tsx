"use client";

import React, { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Magnetic({
  children,
  strength = 0.22,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const clamp = useMemo(() => {
    return (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
  }, []);

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const maxX = rect.width * 0.35;
        const maxY = rect.height * 0.35;
        const nextX = clamp(x * strength, -maxX, maxX);
        const nextY = clamp(y * strength, -maxY, maxY);
        el.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "translate3d(0px, 0px, 0)";
      }}
      style={{ willChange: "transform" }}
      transition={{ type: "spring", stiffness: 350, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}

