import { profile } from '../data/content';

export function Hero() {
  const [first, second] = profile.headlineAccents;
  return (
    <section id="top" className="hero container">
      <p className="hero__meta">
        <span className="status-dot" aria-hidden="true" />
        {profile.meta.join(' · ')}
      </p>
      <h1 className="hero__title">
        {profile.headline} <span className="accent">{first}</span> and <span className="accent">{second}</span>.
      </h1>
      <p className="hero__intro">{profile.intro}</p>
      <div className="button-row">
        <a href="#work" className="pill pill--solid">See my work</a>
        <a href={profile.github} className="pill pill--outline" target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} className="pill pill--outline" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
