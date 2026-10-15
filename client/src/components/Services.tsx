import { services } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading label={services.label} title={services.title} intro={services.intro} />
        <div className="grid grid-3">
          {services.items.map((s, i) => (
            <article className="service" key={s.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
        <p className="fine">{services.note}</p>
      </div>
    </section>
  );
}
