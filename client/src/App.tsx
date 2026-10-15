import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { Services } from "./components/Services";
import { WhyPrism } from "./components/WhyPrism";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Problems />
        <Services />
        <WhyPrism />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
