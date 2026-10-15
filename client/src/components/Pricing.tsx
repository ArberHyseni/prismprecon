import { pricing } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <SectionHeading label={pricing.label} title={pricing.title} intro={pricing.intro} />
        <div className="grid grid-3">
          {pricing.plans.map((plan) => (
            <article className={plan.featured ? "plan plan-featured" : "plan"} key={plan.name}>
              {plan.featured && <p className="tag">Most popular</p>}
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price}
                <span>/mo</span>
              </p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="per-bid">
          <h3>Or pay per bid</h3>
          <dl>
            {pricing.perBid.map((b) => (
              <div key={b.label}>
                <dt>{b.label}</dt>
                <dd>{b.price}</dd>
              </div>
            ))}
          </dl>
          <p className="fine">{pricing.perBidNote}</p>
        </div>
      </div>
    </section>
  );
}
