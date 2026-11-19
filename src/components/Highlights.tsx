import { highlights } from '../data/content';

export function Highlights() {
  return (
    <section aria-label="Highlights" className="container section--tight">
      <dl className="highlights">
        {highlights.map((item) => (
          <div key={item.value} className="highlights__item">
            <dt className="highlights__value">{item.value}</dt>
            <dd className="highlights__label">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
