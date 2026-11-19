import { profile } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="container section--tight">
      <div className="contact">
        <h2 className="contact__title">Building something that needs to scale? Let’s talk.</h2>
        <div className="button-row">
          <a href={`mailto:${profile.email}`} className="pill pill--light">{profile.email}</a>
          <a href={profile.github} className="pill pill--on-accent" target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} className="pill pill--on-accent" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with care, reviewed by a human.</span>
      </footer>
    </section>
  );
}
