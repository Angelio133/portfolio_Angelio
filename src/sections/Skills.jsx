function Skills() {
  const skillGroups = [
    {
      category: "DATA SCIENCE & IA",
      subtitle: "[ SYSTEM_CORE_DATA ]",
      theme: "cyan",
      items: [
        { name: "Machine Learning", level: "65%" },
        { name: "Analyse de Données", level: "55%" },
        { name: "Python", level: "60%" },
        { name: "Streamlit", level: "80%" },
      ],
    },
    {
      category: "DÉVELOPPEMENT FRONT-END",
      subtitle: "[ INTERFACE_MATRIX ]",
      theme: "electric-blue",
      items: [
        { name: "Next.js", level: "61%" },
        { name: "React Native", level: "70%" },
        { name: "Flutter", level: "45%" },
        { name: "Sass / SCSS", level: "55%" },
      ],
    },
    {
      category: "DÉVELOPPEMENT BACK-END & OUTILS",
      subtitle: "[ SYS_KERNEL ]",
      theme: "green-neon",
      items: [
        { name: "Node.js", level: "60%" },
        { name: "Express", level: "55%" },
        { name: "Docker", level: "65%" },
        { name: "WSL2 / Linux", level: "50%" },
        { name: "Git & GitHub", level: "92%" },
      ],
    },
  ];

  return (
    <section id="skills" className="gauge-skills-section">
      <div className="gauge-header">
        <h2 className="gauge-main-title">COMPÉTENCES_</h2>
      </div>

      <div className="gauge-grid">
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className={`gauge-card theme-${group.theme}`}>
            <div className="card-scanline"></div>
            <div className="card-hud-corners">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="card-header-block">
              <span className="card-serial">{group.subtitle}</span>
              <h3 className="card-group-title">{group.category}</h3>
            </div>

            <div className="gauges-list">
              {group.items.map((skill, skillIdx) => (
                <div key={skillIdx} className="gauge-wrapper">
                  <div className="gauge-info">
                    <span className="gauge-name">{skill.name}</span>
                  </div>
                  <div className="gauge-bar-container">
                    <div
                      className="gauge-progress-fill"
                      style={{ "--progress": skill.level }}
                    >
                      <div className="gauge-laser-tip"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
