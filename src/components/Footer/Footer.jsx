import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-700 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 pb-8 border-b border-slate-700">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Vincent Maury</h3>
            <p className="text-slate-300 text-sm">
              Développeur web passionné par la création d'expériences modernes
              et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-slate-400 hover:text-indigo-400 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-indigo-400 transition">
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-indigo-500/50 rounded-lg transition border border-slate-700">
                <Github size={20} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-indigo-500/50 rounded-lg transition border border-slate-700">
                <Linkedin size={20} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-indigo-500/50 rounded-lg transition border border-slate-700">
                <Mail size={20} className="text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
          <p className="flex items-center gap-1">
            © {currentYear} Vincent Maury. Fait avec{" "}
            <Heart size={16} className="text-indigo-500" /> en France.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-indigo-400 transition">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
