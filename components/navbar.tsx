"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import { usePathname } from "next/navigation";

// function toggleMenu() {}
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isProjectPath = pathname?.split("/").includes("project");

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (isProjectPath) {
    return null;
  } else {
    return (
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a
              href="/"
              className="hover:text-primary transition duration-300"
            ></a>
          </div>

          {/* Desktop Navigation */}
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
                  Skills
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
              <li>
                <a
                  href="../#contact"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className="text-2xl text-primary focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
              {/* Toggle between hamburger and close icon */}
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
                  Skills
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
              <li>
                <a
                  href="../#contact"
                  className="hover:text-primary"
                  onClick={handleToggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}
