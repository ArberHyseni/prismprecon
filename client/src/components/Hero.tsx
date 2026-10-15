import logo from "../assets/logos/prism_logo_charcoal.svg";
import { company, hero } from "../content";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <img className="hero-logo" src={logo} alt={company.name} width={440} height={108} />
        <p className="label">{hero.label}</p>
        <h1>{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
        <div className="cta-row">
          <a href="#contact" className="btn">Get your first takeoff free</a>
          <a href="#pricing" className="btn btn-ghost">See pricing</a>
        </div>
        <ul className="stats">
          {hero.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
