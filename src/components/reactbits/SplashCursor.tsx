"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Splash = {
  id: string;
  x: number;
  y: number;
  size: number;
};

export function SplashCursor({
  color = "#2b7eff",
  maxSplashes = 18,
  ttlMs = 650,
  minSize = 10,
  maxSize = 26,
}: {
  color?: string;
  maxSplashes?: number;
  ttlMs?: number;
  minSize?: number;
  maxSize?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const timeoutsRef = useRef<number[]>([]);

  const randomId = useMemo(() => {
    return () => {
      if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
      return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const getSize = () => {
      const clampedMin = Math.max(1, minSize);
      const clampedMax = Math.max(clampedMin, maxSize);
      return clampedMin + Math.random() * (clampedMax - clampedMin);
    };

    const spawn = (clientX: number, clientY: number) => {
      const id = randomId();
      const size = getSize();
      const splash: Splash = { id, x: clientX, y: clientY, size };

      setSplashes((prev) => {
        const next = prev.length >= maxSplashes ? prev.slice(prev.length - (maxSplashes - 1)) : prev;
        return [...next, splash];
      });

      const timeoutId = window.setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== id));
      }, ttlMs);
      timeoutsRef.current.push(timeoutId);
    };

    let raf = 0;
    const onPointerMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => spawn(e.clientX, e.clientY));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutsRef.current = [];
    };
  }, [maxSize, maxSplashes, minSize, randomId, reduceMotion, ttlMs]);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {splashes.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 1.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              background: color,
              transform: "translate(-50%, -50%)",
              filter: "blur(0.2px)",
            }}
            className="absolute rounded-full"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
