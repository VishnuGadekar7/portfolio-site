import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

export default function ProjectCard({ project, onOpen }) {
  const gradients = [
    "from-cyan-500 via-blue-500 to-purple-600",
    "from-pink-500 via-red-500 to-orange-500",
    "from-green-500 via-teal-500 to-cyan-500",
    "from-purple-500 via-pink-500 to-red-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
  ];

  const gradient = gradients[(project.id - 1) % gradients.length];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
      onClick={onOpen}
    >
      {/* Gradient Header with Icon */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl"
        >
          <FaRocket className="text-white text-3xl" />
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="text-white text-center">
            <FaExternalLinkAlt className="text-2xl mx-auto mb-2" />
            <p className="text-sm font-semibold">View Details</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Stack Badges */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-cyan-400 font-medium group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-400 font-medium">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
            <FaCode className="text-lg" />
            <span>Explore Project</span>
          </div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaExternalLinkAlt className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
          </motion.div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
      </div>
    </motion.div>
  );
}
