function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full navbar bg-base-100 shadow-sm z-50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="w-full flex items-center gap-3 mx-auto sm:mx-0">
          <img
            src="/Avatar-Type.png"
            alt="Avatar de Vincent"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-mist-50">Vincent Maury</h1>
        </div>
        <ul className="hidden sm:flex gap-6 text-mist-50 font-medium">
          <li>
            <a href="#hero" className="btn btn-lg btn-ghost">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="btn btn-lg btn-ghost">
              Parcours
            </a>
          </li>
          <li>
            <a href="#projects" className="btn btn-lg btn-ghost">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-lg btn-ghost">
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
