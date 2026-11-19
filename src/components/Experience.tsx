import { education, experience, toolkit } from '../data/content';

export function Experience() {
  return (
    <section id="experience" className="container section">
      <h2 className="section__title">Experience</h2>
      <ol className="timeline">
        {experience.map((role) => (
          <li key={role.period} className="timeline__item">
            <p className="timeline__period">{role.period}</p>
            <div>
              <h3 className="timeline__role">
                {role.title} · {role.company}
              </h3>
              <p className="timeline__summary">{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid-2 extras">
        <div>
          <h3 className="subhead subhead--flush">Toolkit</h3>
          <ul className="chips" aria-label="Tools">
            {toolkit.daily.map((tool) => (
              <li key={tool} className="chip chip--strong">{tool}</li>
            ))}
            {toolkit.also.map((tool) => (
              <li key={tool} className="chip">{tool}</li>
            ))}
            <li className="chip chip--dashed">Learning {toolkit.learning}</li>
          </ul>
        </div>
        <div>
          <h3 className="subhead subhead--flush">Education &amp; recognition</h3>
          <ul className="plain-list">
            {education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
