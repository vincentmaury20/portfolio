import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  // Array de projets exemple - à remplacer par vos vrais projets
  const projects = [
    {
      id: 1,
      title: "BlaBlaBook",
      description:
        "Gestion de bibliothèque en ligne BlaBlaBook, réalisé en équipe dans le cadre de la formation au titre DWWM.",
      technologies: [
        "Node.js",
        "SvelteKit",
        "PostgreSQL",
        "Sequelize",
        "API REST",
        "EJS",
        "Back-office",
      ],
      imageUrl: "/public/LogoBBB.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      title: "Gamer Challenges",
      description:
        "Réalisation en équipe. Plateforme web dédiée aux défis gaming, permettant aux joueurs de se challenger et de partager leurs performances.",
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "Typescript",
        "PostgreSQL",
        "Sequelize",
        "API REST",
      ],
      imageUrl: "/public/Title.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 3,
      title: "ELEGANT GENTLEMEN",
      description:
        "Une simple maquette totalement responsive, créée pour un client réel. Une réalisation faite en stage.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/public/backgroundForSection1.jpg",
      liveUrl: "https://elegant-gentleman.vercel.app/",
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Vous pouvez voir trois de mes projets, avec différentes technologies
            et différentes manières de travailler.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-700">
          <p className="text-slate-300 mb-4">
            Vous avez des questions sur mes projets ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
