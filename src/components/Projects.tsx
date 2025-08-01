import { motion } from "framer-motion";
import ProjectCarousel from "./ui/ProjectCarousel";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl?: string; // Add repoUrl as an optional property
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t("projects.breaking_locations_title"),
      description: t("projects.breaking_locations_description"),
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "MongoDB",
      ],
      liveUrl: "https://beta-breakinglocations.netlify.app",
    },
  ];

  return (
    <section
      id="projetos"
      className={`py-10 ${
        isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl sm:text-3xl font-bold mb-7 text-center ${
            isDarkMode ? "text-red-600" : "text-gray-800"
          }`}
        >
          {t("projects.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-3xl mx-auto mb-12 text-left ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          {t("projects.description")}
        </motion.p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCarousel
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/aericki"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-700 hover:bg-gray-800 text-white"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t("hero.view_more_projects")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
