// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-10 w-full py-4 bg-white dark:bg-black">
      <div className="container mx-auto flex h-10 items-center justify-between px-4">
        <Link href="/"   className="text-transparent font-bold text-3xl"
  style={{
    background: 'linear-gradient(100deg, #FFA929 31.75%, #9A63C5 94.48%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>
          LXRY
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-md font-medium text-black dark:text-white hover:text-amber-300 ">
            Home
          </Link>
          <Link href="/product" className="text-md font-medium text-black dark:text-white hover:text-amber-300 ">
            Product
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm dark:bg-gray-900/90">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-amber-300 py-2 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-sm font-medium text-white hover:text-amber-300 py-2 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}