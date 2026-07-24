import { insights } from "../data";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Insights() {
  return (
    <section id="insights" className="section">
      <div className="container">
        <h2>Insights</h2>
        <p className="section-lead">
          Sample research notes — replace with your published reports.
        </p>
        <div className="grid">
          {insights.map((item) => (
            <article key={item.title} className="card insight-card">
              <time dateTime={item.date}>{formatDate(item.date)}</time>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
