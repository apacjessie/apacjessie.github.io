import { principles } from '../data/content';

export function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container section">
        <h2 className="section__title">How I work</h2>
        <div className="grid-3 approach__grid">
          {principles.map((item, index) => (
            <div key={item.title}>
              <p className="approach__number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="approach__title">{item.title}</h3>
              <p className="approach__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
