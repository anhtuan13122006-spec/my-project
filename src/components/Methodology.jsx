import { methodology } from "../data";

export default function Methodology() {
  return (
    <section id="methodology" className="section">
      <div className="container">
        <h2 className="section-title">Phương Pháp Luận</h2>
        <p className="section-lead">{methodology.lead}</p>
        <blockquote className="quote-block">{methodology.quote}</blockquote>
        <div className="framework-grid">
          {methodology.frameworks.map((fw) => (
            <div key={fw.title} className="fw-card">
              <h4>{fw.title}</h4>
              <p>{fw.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
