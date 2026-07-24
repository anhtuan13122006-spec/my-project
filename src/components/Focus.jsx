import { focusAreas } from "../data";

export default function Focus() {
  return (
    <section id="focus" className="section section-alt">
      <div className="container">
        <h2>Research Focus</h2>
        <div className="grid">
          {focusAreas.map((area) => (
            <div key={area.title} className="card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
