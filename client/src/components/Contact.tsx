import { company, contact } from "../content";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="section section-mist" id="contact">
      <div className="wrap contact">
        <div>
          <SectionHeading label={contact.label} title={contact.title} intro={contact.intro} />
          <div className="contact-phone">
            <p className="label">Or call / text</p>
            <a className="phone" href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
