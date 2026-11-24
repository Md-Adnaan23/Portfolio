import { useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className="navbar" onKeyDown={handleKeyDown}>
      <a href="#home" className="logo" onClick={closeMenu}>
        MD ADNAAN<span>.</span>
      </a>

      <button
        ref={menuButtonRef}
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="portfolio-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>

      <nav
        id="portfolio-nav"
        aria-label="Main navigation"
        className={menuOpen ? "is-open" : ""}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#github" onClick={closeMenu}>GitHub</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a href="#contact" className="nav-button" onClick={closeMenu}>
        Let’s Talk ↗
      </a>
    </header>
  );
}