import { problems } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Problems() {
  return (
    <section className="section section-mist">
      <div className="wrap">
        <SectionHeading label={problems.label} title={problems.title} intro={problems.intro} />
        <div className="grid grid-3">
          {problems.items.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
