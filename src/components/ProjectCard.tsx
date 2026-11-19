import type { Project } from '../data/content';

function Visual({ project }: { project: Project }) {
  if (project.image) {
    return <img className="card__image" src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />;
  }
  if (project.checklist) {
    return (
      <div className="card__checklist">
        <p className="card__checklist-heading">{project.checklist.heading}</p>
        <ul>
          {project.checklist.items.map((item) => {
            const { text, mark } = typeof item === 'string' ? { text: item, mark: '✓' } : item;
            return (
              <li key={text}>
                <span className={mark === '✓' ? 'check' : 'check check--open'} aria-hidden="true">{mark}</span> {text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className="card__stat" aria-hidden="true">
      <span className="card__stat-value">{project.stat.value}</span>
      <span className="card__stat-label">{project.stat.label}</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const variant = project.featured ? (project.checklist ? 'card--featured-light' : 'card--featured') : 'card--standard';
  return (
    <article className={`card ${variant}`}>
      <div className="card__body">
        <p className="card__brand">{project.brand}</p>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{project.summary}</p>
        <ul className="tags" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
      </div>
      <Visual project={project} />
    </article>
  );
}
