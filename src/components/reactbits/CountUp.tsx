"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function CountUp({
  to,
  from = 0,
  duration = 2,
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) {
      el.textContent = to.toLocaleString();
      return;
    }

    let cancelled = false;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (cancelled) return;
        el.textContent = Math.floor(latest).toLocaleString();
      },
    });
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [duration, from, inView, reduceMotion, to]);

  return (
    <span ref={ref} className={className}>
      {from.toLocaleString()}
    </span>
  );
}
