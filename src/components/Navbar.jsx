import { useState } from "react";
import { site } from "../data";

const links = [
  { href: "#methodology", label: "Phương pháp luận" },
  { href: "#industry", label: "Industry Report" },
  { href: "#cases", label: "Case Studies" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#about", label: "Về dự án" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          {site.shortName.toUpperCase()} <span>{site.shortNameAccent.toUpperCase()}</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
