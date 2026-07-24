import { site, footer } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-title">
          Independent Investment Research Project — Làng Nghề Truyền Thống Việt Nam
        </p>
        <p className="disclaimer">{footer.disclaimer}</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
