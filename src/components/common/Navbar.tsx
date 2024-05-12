import { Link } from "react-router-dom";

import { SearchBar } from "./SearchBar";
import { Button } from "./Button";

interface NavbarProps {
  openPopup: () => void;
}

export function Navbar({ openPopup }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b dark:border-neutral-800 dark:bg-neutral-950/90 backdrop-blur-md shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-2 flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo_color.svg"
            className="h-8 aspect-square"
            alt="DropDash Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap">
            Drop Dash
          </span>
        </Link>
        <SearchBar />
        <div className="flex md:order-4 space-x-2 rtl:space-x-reverse">
          <Button variant="secondary">Login</Button>
          <Button variant="primary" onClick={openPopup}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
