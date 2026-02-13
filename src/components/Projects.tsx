import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Users, MapPin, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  stats?: Stat[];
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const featuredProject: Project = {
    title: t("projects.bestbreakers_system_title"),
    description: t("projects.bestbreakers_system_description"),
    technologies: [
      "Go",
      "React",
      "TypeScript",
      "WebSocket",
      "SQLite",
      "Tailwind CSS",
      "Docker",
      "REST API",
    ],
    liveUrl: "https://www.bestbreakers.com.br",
    stats: [
      {
        icon: <Trophy size={18} />,
        value: t("projects.bestbreakers_system_stat_championships"),
      },
      {
        icon: <Users size={18} />,
        value: t("projects.bestbreakers_system_stat_athletes"),
      },
      {
        icon: <MapPin size={18} />,
        value: t("projects.bestbreakers_system_stat_states"),
      },
      {
        icon: <Shield size={18} />,
        value: t("projects.bestbreakers_system_stat_crews"),
      },
    ],
  };

  const projects: Project[] = [
    {
      title: t("projects.bestbreakers_ranking_title"),
      description: t("projects.bestbreakers_ranking_description"),
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "i18next",
        "@tanstack/react-table",
      ],
      liveUrl: "https://www.bestbreakers.com.br",
    },
    {
      title: t("projects.estela_logistics_title"),
      description: t("projects.estela_logistics_description"),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://cliente-estela-lp.vercel.app/",
    },
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
      className={`py-16 ${
        isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${
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
          className={`max-w-3xl mx-auto mb-12 text-center ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("projects.description")}
        </motion.p>

        {/* Featured Project - Best Breakers System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isDarkMode
                  ? "bg-red-600/20 text-red-400 border border-red-600/30"
                  : "bg-gray-800/10 text-gray-700 border border-gray-800/20"
              }`}
            >
              ★ {t("projects.featured")}
            </div>
          </div>

          <div
            className={`rounded-xl overflow-hidden shadow-xl border ${
              isDarkMode
                ? "bg-gray-800 border-red-600/20"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="p-6 sm:p-8">
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {featuredProject.title}
              </h3>

              <p
                className={`mb-6 text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {featuredProject.description}
              </p>

              {/* Stats Grid */}
              {featuredProject.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {featuredProject.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-gray-700/60 border border-gray-600/40"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <span
                        className={
                          isDarkMode ? "text-red-500" : "text-gray-700"
                        }
                      >
                        {stat.icon}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {t("projects.technologies_used")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        isDarkMode
                          ? "bg-red-600/15 text-red-300 border border-red-600/20"
                          : "bg-gray-700/10 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-800 text-white hover:bg-gray-900"
                    }`}
                  >
                    <ExternalLink size={16} />
                    {t("projects.view_project")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className={`rounded-xl overflow-hidden shadow-md border transition-shadow hover:shadow-xl ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="p-5">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-md ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                        isDarkMode
                          ? "bg-red-600/80 text-white hover:bg-red-600"
                          : "bg-gray-700 text-white hover:bg-gray-800"
                      }`}
                    >
                      <ExternalLink size={14} />
                      {t("projects.view_project")}
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                        isDarkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                          : "border-gray-300 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Github size={14} />
                      {t("projects.source_code")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/aericki"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-700 hover:bg-gray-800 text-white"
            }`}
          >
            <Github size={20} className="mr-2" />
            {t("hero.view_more_projects")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;