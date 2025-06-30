import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectCarouselProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  isDarkMode: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  title,
  description,
  technologies,
  liveUrl,
  repoUrl,
  isDarkMode,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const { t } = useTranslation();

  // Função para abrir/fechar o modal com iframe
  const togglePreview = () => {
    setShowPreview(!showPreview);
    // Controlar o scroll da página
    document.body.style.overflow = !showPreview ? "hidden" : "auto";
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-lg overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Área de preview/thumbnail */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <div
            className={`flex items-center justify-center h-64 md:h-80 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                className={`text-3xl ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <Eye />
              </div>
              <p
                className={`text-center ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t("projects.preview")}
              </p>

              {liveUrl && (
                <button
                  onClick={togglePreview}
                  className={`mt-2 px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-600 hover:bg-gray-700 text-white"
                  } transition-colors`}
                >
                  <Eye size={16} />
                  {t("projects.view_site")}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Informações do projeto */}
        <div className="md:w-1/2 p-6">
          <h3
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {description}
          </p>

          <div className="mb-4">
            <h4
              className={`text-sm font-semibold mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {t("projects.technologies_used")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-2 rounded-full ${
                    isDarkMode
                      ? "bg-red-600 bg-opacity-20 text-white"
                      : "bg-gray-600 bg-opacity-20 text-white"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-sm ${
                  isDarkMode
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-600 text-white hover:bg-gray-700"
                } transition-colors`}
              >
                <ExternalLink size={16} />
                {t("projects.view_project")}
              </a>
            )}

            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-sm ${
                  isDarkMode
                    ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    : "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                } transition-colors`}
              >
                <Github size={16} />
                Repositório
              </a>
            )}

            {liveUrl && (
              <button
                onClick={togglePreview}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-sm ${
                  isDarkMode
                    ? "border border-gray-500 text-gray-400 hover:bg-gray-700"
                    : "border border-gray-400 text-gray-500 hover:bg-gray-200"
                } transition-colors`}
              >
                <Eye size={16} />
                {t("projects.visualize")}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal com iframe */}
      <AnimatePresence>
        {showPreview && liveUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={togglePreview}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-7xl h-[85vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
              </div>

              <iframe
                src={liveUrl}
                title={`${title} preview`}
                className="w-full h-full border-0 relative z-10"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />

              <button
                onClick={togglePreview}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors z-20"
                aria-label="Fechar preview"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCarousel;
