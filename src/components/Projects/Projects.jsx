import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  // Array de projets exemple - à remplacer par vos vrais projets
  const projects = [
    {
      id: 1,
      title: "Projet à venir",
      description:
        "Ajoutez vos projets ici. Chaque projet affichera une image, une description et les technologies utilisées.",
      technologies: ["React", "Tailwind", "Vite"],
      imageUrl: null,
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      title: "Projet à venir",
      description:
        "Cliquez sur les cartes pour voir plus de détails et accéder aux liens vers votre site et votre code.",
      technologies: ["JavaScript", "CSS", "HTML"],
      imageUrl: null,
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 3,
      title: "Projet à venir",
      description:
        "Les cartes sont entièrement responsives et s'adaptent à tous les appareils.",
      technologies: ["Node.js", "Express", "MongoDB"],
      imageUrl: null,
      liveUrl: null,
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
            Découvrez mes réalisations et les technologies que j'utilise pour
            créer des solutions web modernes et performantes.
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
