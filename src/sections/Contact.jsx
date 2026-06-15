// 1. On importe tes fichiers JPG depuis le dossier assets
import fbLogo from "../assets/facebook.jpg";
import lnLogo from "../assets/link.jpg";
import mailLogo from "../assets/gmail.jpg";

function Contact() {
  return (
    <section id="contact" className="brutal-contact-section">
      <div className="contact-container">
        {/* BLOC FORMULAIRE */}
        <div className="contact-form-box">
          <h2 className="contact-title">Me Contacter</h2>

          <form
            action="https://formspree.io/f/xqeonkev"
            method="POST"
            className="brutal-form"
          >
            <div className="form-group">
              <label htmlFor="name">NOM_OU_ENTREPRISE</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex: Jean Dupont"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">VOTRE_EMAIL</label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                placeholder="Ex: jean@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Dis-moi tout sur ton projet..."
              ></textarea>
            </div>

            <button type="submit" className="brutal-btn-submit">
              Envoyer↗
            </button>
          </form>
        </div>

        {/* BLOC LIENS SOCIAUX ET TÉLÉPHONES */}
        <div className="contact-info-box">
          <h3 className="contact-subtitle">DIRECT_LINKS_</h3>

          {/* Grille contenant uniquement les logos des réseaux sociaux */}
          <div className="social-brutal-icons-grid">
            {/* FACEBOOK */}
            <a
              href="https://web.facebook.com/lucaslion.wille?locale=fr_FR"
              target="_blank"
              rel="noreferrer"
              className="social-icon-card fb"
              title="Facebook"
            >
              <img src={fbLogo} alt="Facebook" className="social-jpg-icon" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/angelio-fabien-9827b1365"
              target="_blank"
              rel="noreferrer"
              className="social-icon-card ln"
              title="LinkedIn"
            >
              <img src={lnLogo} alt="LinkedIn" className="social-jpg-icon" />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:angelio006lucas@gmail.com"
              className="social-icon-card mail"
              title="Email Direct"
            >
              <img src={mailLogo} alt="Email" className="social-jpg-icon" />
            </a>
          </div>

          {/* Zone pour les numéros de téléphone (sans cadre, écriture simple) */}
          <div className="phone-text-container">
            <p>
              Téléphone :{" "}
              <a href="tel:+261383590910" className="phone-simple-link">
                038 35 909 10
              </a>
              {" (Telma / Orange) / "}
              <a href="tel:+261321599104" className="phone-simple-link">
                032 15 991 04
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
