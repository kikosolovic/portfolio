"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="  top-0 z-10 bg-background/80 backdrop-blur-sm ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a
            href="/"
            className="hover:text-primary transition duration-300"
          ></a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 text-lg">
            <li>
              <a
                href="../#about"
                className="hover:text-primary transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="../#skills"
                className="hover:text-primary transition duration-300"
              >
                Focus
              </a>
            </li>
            <li>
              <a
                href="../#projects"
                className="hover:text-primary transition duration-300"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-2xl text-primary focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background/90 py-6">
          <ul className="flex flex-col items-center space-y-6 text-xl">
            <li>
              <a
                href="../#about"
                className="hover:text-primary"
                onClick={handleToggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="../#skills"
                className="hover:text-primary"
                onClick={handleToggleMenu}
              >
                Focus
              </a>
            </li>
            <li>
              <a
                href="../#projects"
                className="hover:text-primary"
                onClick={handleToggleMenu}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
