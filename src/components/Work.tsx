import { projects, sideProjects } from '../data/content';
import { ProjectCard } from './ProjectCard';

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="container section">
      <div className="section__head">
        <h2 className="section__title">Selected work</h2>
        <p className="section__note">DigiPlus · 2024 – present</p>
      </div>

      <div className="stack">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="grid-2">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {sideProjects.length > 0 && (
        <>
          <h3 className="subhead">Side projects</h3>
          <div className="grid-3">
            {sideProjects.map((project) => (
              <a key={project.url} href={project.url} className="side-card" target="_blank" rel="noreferrer">
                <span className="side-card__stack">{project.stack}</span>
                <span className="side-card__name">{project.name}</span>
                <span className="side-card__summary">{project.summary}</span>
                <span className="side-card__link">View on GitHub →</span>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
