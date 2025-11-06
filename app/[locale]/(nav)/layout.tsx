import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
