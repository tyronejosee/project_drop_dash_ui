import { ReactNode } from "react";
import { Navbar } from "../common/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">{children}</main>
    </>
  );
}
