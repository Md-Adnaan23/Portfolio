export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        MD ADNAAN<span>.</span>
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#github">GitHub</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Let's Talk ↗
      </a>
    </header>
  );
}