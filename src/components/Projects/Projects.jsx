import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

function Projects() {
  // Array de projets exemple - à remplacer par vos vrais projets
  const projects = [
    {
      id: 1,
      title: "BlaBlaBook",
      description:
        "Gestion de bibliothèque en ligne BlaBlaBook, réalisé pendant la formation au titre DWWM.",
      technologies: [
        "Node.js",
        "SvelteKit",
        "PostgreSQL",
        "Sequelize",
        "API REST",
        "EJS",
        "Back-office",
        "Travail en équipe",
      ],
      imageUrl: "/LogoBBB.png",
      liveUrl:
        "https://69fa6ad89dd96c81865240d2--splendorous-daffodil-a47e83.netlify.app/",
      githubUrl: null,
    },
    {
      id: 2,
      title: "Gamer Challenges",
      description:
        "Plateforme web dédiée aux défis gaming, challenges et partage des performances.",
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "Typescript",
        "PostgreSQL",
        "Sequelize",
        "API REST",
        "Travail en équipe",
      ],
      imageUrl: "/Title.png",
      liveUrl: "https://gamerchallenges-frontend-hmda.vercel.app",
      githubUrl: null,
    },
    {
      id: 3,
      title: "ELEGANT GENTLEMEN",
      description:
        "Une simple maquette totalement responsive. Une réalisation faite en stage.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Maquette",
        "Responsive",
        "Autonomie",
      ],
      imageUrl: "/backgroundForSection1.jpg",
      liveUrl: "https://elegant-gentleman.vercel.app/",
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 px-6 py-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
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
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
