import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p className="section-lead">{about.mission}</p>
        <ul className="check-list">
          {about.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
