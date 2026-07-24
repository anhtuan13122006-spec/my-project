import { dashboard } from "../data";

export default function Dashboard() {
  return (
    <section id="dashboard" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Scoring Dashboard</h2>
        <p className="section-lead">{dashboard.lead}</p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Xếp hạng</th>
                <th>Làng nghề</th>
                <th>Địa phương</th>
                <th>Điểm có trọng số (/5)</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.rows.map((row) => (
                <tr
                  key={row.name}
                  className={row.caseStudy ? "highlight" : undefined}
                >
                  <td>{row.rank}</td>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                  <td>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">{dashboard.note}</p>
        <a
          className="dl"
          href={import.meta.env.BASE_URL + dashboard.downloadFile}
          download
        >
          {dashboard.downloadLabel} →
        </a>
      </div>
    </section>
  );
}
