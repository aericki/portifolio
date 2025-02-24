import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProjectsProps {
  isDarkMode: boolean;
}

const projects = [
  {
    title: "Breaking Locations (Beta)",
    description: "Uma plataforma web para encontrar locais de treino de breaking, com geolocalização e design responsivo.",
    technologies: ["Typescript", "React", "Node.js", "Express", "Tailwind CSS"],
    media: [
      "/breaking-locations-1.jpg", // Certifique-se de que esses arquivos existem em public/
      "/breaking-locations-2.jpg",
      "/breaking-locations-3.jpg",
    ],
    url: "https://beta-breakinglocations.netlify.app",
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projects[0].media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projects[0].media.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projetos" className={`py-16 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
        >
          Projetos
        </motion.h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Carrossel */}
                <div className="md:w-1/3 relative">
                  {project.media.length > 0 ? (
                    <img
                      src={project.media[currentImageIndex]}
                      alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                      className="w-full h-48 md:h-full object-cover"
                      onError={() => console.log(`Erro ao carregar imagem: ${project.media[currentImageIndex]}`)}
                    />
                  ) : (
                    <div className="w-full h-48 md:h-full bg-gray-500 flex items-center justify-center text-white">
                      Nenhuma imagem disponível
                    </div>
                  )}
                  <div className="absolute inset-0 flex justify-between items-center px-2">
                    <button
                      onClick={handlePrev}
                      className={`p-2 rounded-full ${isDarkMode ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-600 hover:bg-gray-700 text-white"}`}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className={`p-2 rounded-full ${isDarkMode ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-600 hover:bg-gray-700 text-white"}`}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.media.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${currentImageIndex === idx ? (isDarkMode ? "bg-red-600" : "bg-gray-600") : "bg-gray-400"}`}
                      />
                    ))}
                  </div>
                </div>
                {/* Conteúdo */}
                <div className="p-6 md:w-2/3">
                  <h4 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {project.title}
                  </h4>
                  <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`${isDarkMode ? "bg-red-600/10 text-red-600" : "bg-gray-600/10 text-gray-600"} text-sm px-2 py-1 rounded`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-block ${isDarkMode ? "text-red-600 hover:text-red-700" : "text-gray-600 hover:text-gray-700"} transition transform hover:scale-105 font-bold`}
                  >
                    Visitar Projeto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;