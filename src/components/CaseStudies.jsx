import { caseStudies } from "../data";

export default function CaseStudies() {
  return (
    <section id="cases" className="section">
      <div className="container">
        <h2 className="section-title">Investment Analysis Reports</h2>
        <p className="section-lead">
          Hai làng nghề được chọn nghiên cứu chuyên sâu, đại diện hai mô hình
          kinh tế tương phản: di sản/du lịch và xuất khẩu giá trị cao. Dùng
          chung cấu trúc 11 mục để đảm bảo khả năng so sánh trực tiếp —
          nguyên tắc coverage initiation của equity research.
        </p>
        <div className="case-grid">
          {caseStudies.map((report) => (
            <article key={report.title} className="card case-card">
              <span className="tag">{report.tag}</span>
              <div className={`rec rec-${report.recTone}`}>
                {report.recommendation}
              </div>
              <h3>
                {report.title} <span className="location">— {report.location}</span>
              </h3>
              <p className="case-subtitle">{report.subtitle}</p>
              <dl className="snapshot-list">
                {report.snapshot.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="case-block-label">Luận điểm đầu tư</p>
              <p className="case-text">{report.thesis}</p>
              <p className="case-block-label">Rủi ro trọng yếu</p>
              <p className="case-text">{report.keyRisk}</p>
              <a
                className="dl"
                href={import.meta.env.BASE_URL + report.downloadFile}
                download
              >
                Tải báo cáo đầy đủ (.docx) →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
