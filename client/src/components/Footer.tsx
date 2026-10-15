import logoWhite from "../assets/logos/prism_logo_white.svg";
import { company } from "../content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <img src={logoWhite} alt={company.name} width={360} height={88} />
        <div className="footer-meta">
          <p>
            {company.domain} · <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>
          <p>© {new Date().getFullYear()} {company.name}</p>
        </div>
      </div>
    </footer>
  );
}
