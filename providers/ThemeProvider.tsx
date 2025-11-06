"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"      // usa la clase CSS `dark` o `light`
      defaultTheme="system"  // usa el tema del sistema por defecto
      enableSystem={true}    // permite cambiar automáticamente
      disableTransitionOnChange // evita flashes al cambiar
    >
      {children}
    </ThemeProvider>
  );
}
