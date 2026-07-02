import contactInfo from "../../data/contactInfo.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Contact.css";

function Contact() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="contact" ref={ref}>
      <div className="container contact-wrapper">
        <div className="contact-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="massive-text gradient-text">Let&apos;s Talk</h2>
          <p>
            Whether you&apos;re hiring, looking for a freelance developer, or just want to connect, feel free to
            reach out.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item) => (
            <div className="contact-card glass-card" key={item.id}>
              <i className={`${item.icon} contact-icon`}></i>
              <div className="contact-details">
                <h3>{item.title}</h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
