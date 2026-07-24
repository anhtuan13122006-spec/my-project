import { site } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-inner">
        <h2>Contact</h2>
        <p className="section-lead">
          Interested in our research or a potential collaboration? Reach out.
        </p>
        <a className="btn btn-primary" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </section>
  );
}
