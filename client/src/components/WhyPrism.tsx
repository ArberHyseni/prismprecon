import { why } from "../content";
import { SectionHeading } from "./SectionHeading";

export function WhyPrism() {
  return (
    <section className="section section-dark" id="why">
      <div className="wrap">
        <SectionHeading label={why.label} title={why.title} />
        <div className="grid grid-3">
          {why.items.map((w) => (
            <article key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
