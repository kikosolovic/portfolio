function toggleMenu() {}
export default function Navbar() {
  const isMenuOpen = false;
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kristian Solovic</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <a
                href="#about"
                className="hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-primary"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary"
                onClick={toggleMenu}
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
