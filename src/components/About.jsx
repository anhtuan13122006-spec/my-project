import { about, site } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Về Dự Án & Tác Giả</h2>
        <div className="positioning-grid">
          <div>
            <h4 className="positioning-label is">Đây LÀ</h4>
            <ul className="check-list">
              {about.isList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="positioning-label isnot">Đây KHÔNG PHẢI</h4>
            <ul className="cross-list">
              {about.isNotList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-grid">
          <p className="body-text">{about.bio}</p>
          <div className="role-list">
            {about.roles.map((r) => (
              <div key={r.role}>
                <span className="role">{r.role}</span>
                <span className="focus">{r.focus}</span>
              </div>
            ))}
          </div>
        </div>
        <a
          className="dl"
          href={import.meta.env.BASE_URL + about.charterFile}
          download
        >
          Tải Project Charter đầy đủ (.docx) →
        </a>
        <p className="contact-line">
          Liên hệ: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </section>
  );
}
