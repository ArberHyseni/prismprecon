import wordmark from "../assets/logos/prism_wordmark_charcoal.svg";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="Prism home">
          <img src={wordmark} alt="Prism" width={140} height={59} />
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#why">Why Prism</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="btn btn-sm">Free first takeoff</a>
        </nav>
      </div>
    </header>
  );
}
