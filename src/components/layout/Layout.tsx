import { ReactNode, useState } from "react";
import { Navbar } from "../common/Navbar";
import { LoginForm } from "../../pages/LoginForm";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openPopup = () => {
    setIsLoginOpen(true);
  };

  const closePopup = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <Navbar openPopup={openPopup} />
      <main className="relative max-w-screen-2xl mx-auto">{children}</main>
      {isLoginOpen && <LoginForm closePopup={closePopup} />}
    </>
  );
}
