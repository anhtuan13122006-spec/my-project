import { site } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Investment Research</p>
        <h1>{site.name}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#insights">
            Read our research
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
