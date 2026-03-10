import { ExternalLink, Github } from "lucide-react";

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="bg-slate-800 backdrop-blur rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-slate-700">
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <p className="text-slate-400 text-sm">Image du projet</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full transition">
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.length > 0 ? (
            technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-xs rounded-full">
                {tech}
              </span>
            ))
          ) : (
            <span className="text-slate-500 text-xs">
              Technologies à venir...
            </span>
          )}
        </div>

        {/* Links for mobile */}
        <div className="flex gap-3 md:hidden">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium transition text-center">
              Visiter
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-sm font-medium transition text-center">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
