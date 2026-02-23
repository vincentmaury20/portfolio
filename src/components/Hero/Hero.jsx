function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 flex justify-center">
          <img
            src="/public/Avatar-Type.png"
            alt="Photo de Vincent"
            className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white/20"
          />
        </div>

        <div className="md:col-span-3 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenue sur mon portfolio
          </h1>

          <p className="text-xl mb-8">
            Découvrez mes projets et compétences en développement web
          </p>

          <a
            href="#projects"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 transition">
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
