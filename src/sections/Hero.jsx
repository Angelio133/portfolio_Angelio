import maPhoto from "../assets/bog.jpg";

function Hero() {
  return (
    <section id="hero" className="hero-premium">
      <div className="hero-grid">
        <div className="hero-text-block">
          <span className="hero-subtitle-top">
            Développeur Full-Stack & Data Scientist
          </span>
          <h1 className="hero-name">ANDRINAINA Angelio Sarobidy Fabien</h1>
          <p className="hero-lead">
            Étudiant en Intelligence Artificielle et Sciences des Données à
            Madagascar. Je combine la puissance de l'analyse de données et du
            Machine Learning avec le développement d'applications web et mobiles
            modernes.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="action-link">
              Découvrir mes projets →
            </a>
          </div>
        </div>

        <div className="hero-image-block">
          <div className="photo-wrapper">
            <img src={maPhoto} alt="Angelio" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
