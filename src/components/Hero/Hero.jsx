import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 pt-20">
      <div className="max-w-3xl mx-auto">
        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Développeur{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Web
            </span>{" "}
            créatif
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Je suis Vincent MAURY. En 2025, j'ai décidé de laisser les couteaux
            des cuisines pour me lancer dans le développement web. J'aime
            résoudre des problèmes, apprendre en continu et surtout travailler
            en équipe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition transform hover:scale-105">
              Voir mes projets
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition"
                size={20}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-300 hover:text-white hover:border-indigo-400 font-semibold rounded-lg transition">
              Me contacter
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="p-3 bg-slate-700/50 hover:bg-indigo-500/50 rounded-lg transition border border-slate-600">
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-700/50 hover:bg-indigo-500/50 rounded-lg transition border border-slate-600">
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-700/50 hover:bg-indigo-500/50 rounded-lg transition border border-slate-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
