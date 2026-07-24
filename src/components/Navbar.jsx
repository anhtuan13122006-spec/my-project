import { site } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Research Focus" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand">
          {site.shortName}
        </a>
        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
