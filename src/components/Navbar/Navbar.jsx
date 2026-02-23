function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Nom */}
        <div className="w-full flex items-center gap-3 mx-auto sm:mx-0">
          <img
            src="/public/Avatar-Type.png"
            alt="Avatar de Vincent"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-gray-900">Vincent Maury</h1>
        </div>

        {/* Liens */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-600 transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              Parcours
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="sm:hidden">
          <button className="text-gray-700 text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
