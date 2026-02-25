function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-base-100 text-white px-6 pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenue sur mon portfolio
          </h1>

          <p className="text-xl mb-8">
            Découvrez mes projets et compétences en développement web
          </p>

          <a
            href="#projects"
            className="px-6 py-3 bg-slate-700 text-blue-200 font-semibold rounded hover:bg-blue-600 hover:text-white transition ">
            Voir mes projets
          </a>
        </div>
        <div className="text-2xl md:col-span-3 mx-6 ">
          <p>
            Je suis Vincent MAURY. En 2025, j'ai décidé de laissé les couteaux
            et l'ambiance brûlantes des cuisines pour me lancer dans le
            développement web et ses maux de tête bien particuliers. J'aime
            résoudre des problèmes, apprendre en continy et surtout travailler
            en équipe, où communication et structure sont pour moi essentielles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
