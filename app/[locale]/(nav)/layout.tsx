import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="pt-[74px] ">
      {children}
      </div>
      <Footer/>
    </>
  );
}
