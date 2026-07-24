import { industryReport } from "../data";

export default function IndustryReport() {
  return (
    <section id="industry" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{industryReport.title}</h2>
        <p className="section-lead">{industryReport.subtitle}</p>
        <div className="stat-grid">
          {industryReport.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <div className="num">{stat.num}</div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="body-text">{industryReport.body}</p>
        <div className="key-finding">
          <span className="key-finding-tag">Hàm ý đầu tư</span>
          <p>{industryReport.keyFinding}</p>
        </div>
        <a
          className="dl"
          href={import.meta.env.BASE_URL + industryReport.downloadFile}
          download
        >
          {industryReport.downloadLabel} →
        </a>
      </div>
    </section>
  );
}
