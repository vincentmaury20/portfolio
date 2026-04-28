import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function About() {
  const skills = [
    "HTML5 et CSS3",
    "React",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "Svelte",
    "PHP",
    "Symfony",
  ];

  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-300 px-6 py-20">
      {/* WRAPPER PRINCIPAL — FIXE LA PHOTO EN HAUT */}
      <div className="flex flex-col md:flex-row items-start gap-12 max-w-5xl">
        {/* PHOTO */}
        <div className="shrink-0 mt-4">
          {/* Photo mobile */}
          <img
            src="/photoPF.png"
            alt="Photo de Vincent"
            className="
    hidden          /* caché sur mobile */
    md:block        /* visible à partir de md */
    w-56 sm:w-64 md:w-80 lg:w-96
    aspect-[3/4]
    rounded-xl
    object-cover
    border-4 border-indigo-500
    shadow-2xl
  "
          />
        </div>

        {/* TEXTE + BOUTON + COMPÉTENCES */}
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 max-w-xl">
          <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>

          <p className="text-lg mb-4">
            Je suis Vincent MAURY. Après 17 ans dans la restauration et le
            traiteur, j’ai choisi de mettre mon sens du service et de
            l’organisation au profit du développement web. J’aime comprendre les
            besoins réels des gens, créer des outils simples et utiles, et
            rendre leur quotidien plus fluide.
          </p>

          <p className="text-lg mb-4">
            Ce qui m’anime : apprendre en continu, résoudre des problèmes
            concrets et travailler en équipe.
          </p>

          <p className="text-lg mb-6">
            Je suis quelqu’un de curieux, patient, et toujours prêt à apprendre.
            Le web est devenu pour moi un nouveau terrain d’expression.
          </p>

          {/* BOUTON */}
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition"
            onClick={() => setShowSkills(!showSkills)}>
            {showSkills ? <ChevronUp /> : <ChevronDown />}
            <span>{showSkills ? "Voir moins" : "Voir plus"}</span>
          </button>

          {/* LISTE DES COMPÉTENCES */}
          {showSkills && (
            <div className="mt-6 p-4 bg-slate-700/40 border border-slate-600 rounded-lg animate-fadeIn">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Mes compétences
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 bg-slate-800/60 rounded-md border border-slate-700 flex items-center gap-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
