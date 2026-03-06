import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Trophy,
  Users,
  MapPin,
  Shield,
  Eye,
  X,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ImageGallery from "./ui/ImageGallery";

import cuiaba1 from "../../assets/images/cuiaba/20251214152723__MG_3484.jpg.jpeg";
import cuiaba2 from "../../assets/images/cuiaba/20251214152916__MG_3489.jpg.jpeg";
import cuiaba3 from "../../assets/images/cuiaba/20251214170917__MG_3521.jpg.jpeg";
import cuiaba4 from "../../assets/images/cuiaba/20251214172608__MG_3567.jpg (1).jpeg";
import cuiaba5 from "../../assets/images/cuiaba/20251214173248__MG_3582.jpg.jpeg";
import cuiaba6 from "../../assets/images/cuiaba/20251214173841__MG_3595.jpg.jpeg";
import cuiaba7 from "../../assets/images/cuiaba/20251214174711__MG_3613.jpg.jpeg";
import cuiaba8 from "../../assets/images/cuiaba/20251214175912__MG_3625.jpg.jpeg";
import cuiaba9 from "../../assets/images/cuiaba/20251214181438__MG_3646.jpg.jpeg";
import cuiaba10 from "../../assets/images/cuiaba/20251214185246__MG_3693.jpg.jpeg";

import cobexpo1 from "../../assets/images/cobexpo/_MG_9030.jpg";
import cobexpo2 from "../../assets/images/cobexpo/_MG_9045.jpg";
import cobexpo3 from "../../assets/images/cobexpo/_MG_9133.jpg";

import pgbattle1 from "../../assets/images/pgbreakingbattle/20260118_201407.jpg";
import pgbattle2 from "../../assets/images/pgbreakingbattle/DSC09170.jpg";

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
  images?: { src: string; alt: string }[];
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const openPreview = (url: string) => {
    setPreviewUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewUrl(null);
    document.body.style.overflow = "auto";
  };

  const bestBreakersImages = [
    { src: cuiaba1, alt: "Best Breakers — Briefing com jurados no estádio em Cuiabá" },
    { src: cuiaba2, alt: "Best Breakers — Jurados utilizando tablets para votação" },
    { src: cobexpo1, alt: "Best Breakers — Jurados votando durante batalha na COBEXPO" },
    { src: cobexpo2, alt: "Best Breakers — Sistema de julgamento em ação" },
    { src: cuiaba3, alt: "Best Breakers — Campeonato de breaking em Cuiabá" },
    { src: pgbattle2, alt: "Best Breakers — Juízes avaliando batalhas em Praia Grande" },
    { src: cuiaba4, alt: "Best Breakers — Evento no estádio Arena Pantanal" },
    { src: cuiaba5, alt: "Best Breakers — Jurados concentrados durante avaliação" },
    { src: cuiaba6, alt: "Best Breakers — Ambiente do campeonato de breaking" },
    { src: pgbattle1, alt: "Best Breakers — Público acompanhando as batalhas" },
    { src: cuiaba7, alt: "Best Breakers — Apresentação dos resultados em tempo real" },
    { src: cuiaba8, alt: "Best Breakers — Atletas competindo no campeonato" },
    { src: cobexpo3, alt: "Best Breakers — Mesa de jurados na COBEXPO" },
    { src: cuiaba9, alt: "Best Breakers — Visão geral do evento" },
    { src: cuiaba10, alt: "Best Breakers — Encerramento do campeonato" },
  ];

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
    images: bestBreakersImages,
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
      className={`py-20 sm:py-28 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-50"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? "text-red-600" : "text-gray-800"
              }`}
          >
            {t("projects.title")}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            {t("projects.description")}
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            FEATURED PROJECT — Best Breakers
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Featured Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isDarkMode
                  ? "bg-red-600/20 text-red-400 border border-red-600/30"
                  : "bg-gray-800/10 text-gray-700 border border-gray-800/20"
                }`}
            >
              ★ {t("projects.featured")}
            </div>
          </div>

          {/* Featured Card */}
          <div
            className={`rounded-2xl overflow-hidden border transition-shadow ${isDarkMode
                ? "bg-gray-800/80 border-gray-700/50 shadow-2xl shadow-red-900/10"
                : "bg-white border-gray-200 shadow-xl"
              }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Gallery Side */}
              <div className="p-4 sm:p-6">
                <ImageGallery
                  images={bestBreakersImages}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Info Side */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-4 leading-tight ${isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                  >
                    {featuredProject.title}
                  </h3>

                  <p
                    className={`mb-6 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {featuredProject.description}
                  </p>

                  {/* Stats Grid */}
                  {featuredProject.stats && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {featuredProject.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className={`flex items-center gap-3 p-3 rounded-xl ${isDarkMode
                              ? "bg-gray-700/50 border border-gray-600/30"
                              : "bg-gray-50 border border-gray-100"
                            }`}
                        >
                          <span
                            className={`flex-shrink-0 ${isDarkMode ? "text-red-500" : "text-gray-700"
                              }`}
                          >
                            {stat.icon}
                          </span>
                          <span
                            className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-800"
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
                      className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                    >
                      {t("projects.technologies_used")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${isDarkMode
                              ? "bg-red-600/10 text-red-300 border border-red-600/20 hover:bg-red-600/20"
                              : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${isDarkMode
                          ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
                          : "bg-gray-800 text-white hover:bg-gray-900 hover:shadow-lg"
                        }`}
                    >
                      <ExternalLink size={16} />
                      {t("projects.view_project")}
                    </a>
                  )}
                  {featuredProject.liveUrl && (
                    <button
                      onClick={() => openPreview(featuredProject.liveUrl!)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all cursor-pointer ${isDarkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
                          : "border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400"
                        }`}
                    >
                      <Eye size={16} />
                      {t("projects.visualize")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            OTHER PROJECTS — Card Grid
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer ${isDarkMode
                  ? "bg-gray-800/70 border-gray-700/50 hover:border-gray-600 hover:shadow-xl hover:shadow-black/20"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
                }`}
            >
              {/* Card Preview Area */}
              {project.liveUrl && (
                <div
                  className={`relative h-44 overflow-hidden ${isDarkMode ? "bg-gray-700/50" : "bg-gray-100"
                    }`}
                  onClick={() => project.liveUrl && openPreview(project.liveUrl)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`p-3 rounded-full transition-all group-hover:scale-110 ${isDarkMode
                            ? "bg-gray-600/50 text-gray-400 group-hover:bg-red-600/20 group-hover:text-red-400"
                            : "bg-gray-200 text-gray-500 group-hover:bg-gray-300 group-hover:text-gray-700"
                          }`}
                      >
                        <Eye size={24} />
                      </div>
                      <span
                        className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                      >
                        {t("projects.preview")}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                <h3
                  className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-5 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {project.description}
                </p>

                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${isDarkMode
                            ? "bg-gray-700/80 text-gray-300 border border-gray-600/30"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
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
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${isDarkMode
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
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${isDarkMode
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

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/aericki"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all cursor-pointer ${isDarkMode
                ? "bg-red-600 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-600/20"
                : "bg-gray-800 hover:bg-gray-900 text-white hover:shadow-lg"
              }`}
          >
            <Github size={20} />
            {t("hero.view_more_projects")}
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PREVIEW MODAL (iframe)
      ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-7xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading Spinner */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-3 border-gray-200 border-t-red-600 rounded-full animate-spin" />
                  <span className="text-sm text-gray-500">Carregando...</span>
                </div>
              </div>

              <iframe
                src={previewUrl}
                title="Project Preview"
                className="w-full h-full border-0 relative z-10"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />

              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 cursor-pointer"
                aria-label="Fechar preview"
              >
                <X size={20} />
              </button>

              {/* Open in new tab */}
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/50 text-white text-xs font-medium hover:bg-black/70 transition-colors z-20"
              >
                <ExternalLink size={14} />
                Abrir em nova aba
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
