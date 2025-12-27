"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { SplashCursor } from "@/components/reactbits/SplashCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SplashCursor />
      {children}
    </ThemeProvider>
  );
}
