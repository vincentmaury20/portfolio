import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg z-50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Avatar-Type.png"
              alt="Avatar de Vincent"
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
            />
            <h1 className="text-xl font-bold text-white">Vincent Maury</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-100 font-medium">
          <li>
            <Link to="/">
              <span className="hover:text-indigo-400 transition-colors duration-300 relative group">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span className="hover:text-indigo-400 transition-colors duration-300 relative group">
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Projects">
              <span className="hover:text-indigo-400 transition-colors duration-300 relative group">
                Projets
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <span className="hover:text-indigo-400 transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-indigo-400 transition-colors">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col gap-0 p-4">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                <span className="block px-4 py-3 text-slate-100 hover:text-indigo-400 hover:bg-slate-700/50 rounded transition-colors">
                  Accueil
                </span>
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={closeMobileMenu}>
                <span className="block px-4 py-3 text-slate-100 hover:text-indigo-400 hover:bg-slate-700/50 rounded transition-colors">
                  Projets
                </span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={closeMobileMenu}>
                <span className="block px-4 py-3 text-slate-100 hover:text-indigo-400 hover:bg-slate-700/50 rounded transition-colors">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
