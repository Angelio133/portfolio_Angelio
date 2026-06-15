function Projects() {
  const myProjects = [
    {
      id: "01",
      title: "MITANDREMA AI",
      category: "Pour la securité Routière / MADAGASCAR",
      description:
        "Plateforme intelligente et déconnectée d'analyse et de prévention des accidents de la route. Cartographie embarquée et module de vigilance active pour tout Madagascar.... Projet en cours de déploiement",
      tech: ["Machine Learning", "React Native", "Expo", "Python"],
      link: "#",
    },
    {
      id: "02",
      title: "CROP YIELD PREDICTOR",
      category: "DATA SCIENCE / AGRICULTURE",
      description:
        "Modèle de prédiction des rendements agricoles basé sur le Random Forest, déployé via une interface web moderne.",
      tech: ["Random Forest", "Streamlit", "Python", "Pandas"],
      link: "https://github.com/Angelio133/Projet_Yield/settings",
    },
  ];

  return (
    <section id="projects" className="brutal-projects-section">
      <div className="section-title-block">
        <h2 className="brutal-main-title">PROJETS_</h2>
      </div>

      <div className="brutal-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="brutal-project-card">
            <div className="card-header">
              <span className="project-number">[{project.id}]</span>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>

            <div className="card-footer">
              <div className="tech-list">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-item">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Ici, on a uniquement le bouton Live Demo, comme demandé */}
              <div className="project-links">
                <a
                  href={project.link}
                  className="brutal-icon-link"
                  title="Live Demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>[LIVE_DEMO]</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
