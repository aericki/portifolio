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
    {
      src: cuiaba1,
      alt: "Best Breakers — Briefing com jurados no estádio em Cuiabá",
    },
    {
      src: cuiaba2,
      alt: "Best Breakers — Jurados utilizando tablets para votação",
    },
    {
      src: cobexpo1,
      alt: "Best Breakers — Jurados votando durante batalha na COBEXPO",
    },
    { src: cobexpo2, alt: "Best Breakers — Sistema de julgamento em ação" },
    { src: cuiaba3, alt: "Best Breakers — Campeonato de breaking em Cuiabá" },
    {
      src: pgbattle2,
      alt: "Best Breakers — Juízes avaliando batalhas em Praia Grande",
    },
    { src: cuiaba4, alt: "Best Breakers — Evento no estádio Arena Pantanal" },
    {
      src: cuiaba5,
      alt: "Best Breakers — Jurados concentrados durante avaliação",
    },
    { src: cuiaba6, alt: "Best Breakers — Ambiente do campeonato de breaking" },
    { src: pgbattle1, alt: "Best Breakers — Público acompanhando as batalhas" },
    {
      src: cuiaba7,
      alt: "Best Breakers — Apresentação dos resultados em tempo real",
    },
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
    <section id="projetos" className="py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2
            className={`mb-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${
              isDarkMode ? "text-white" : "text-stone-950"
            }`}
          >
            {t("projects.title")}
          </h2>
          <p
            className={`max-w-2xl text-base leading-8 sm:text-lg ${
              isDarkMode ? "text-zinc-400" : "text-stone-600"
            }`}
          >
            {t("projects.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] ${
                isDarkMode
                  ? "border border-red-600/30 bg-red-600/12 text-red-300"
                  : "border border-red-200 bg-red-50 text-red-700"
              }`}
            >
              ★ {t("projects.featured")}
            </div>
          </div>

          <div
            className={`overflow-hidden rounded-[2rem] p-1 ${
              isDarkMode
                ? "bg-gradient-to-br from-red-500/20 via-white/6 to-white/4"
                : "bg-gradient-to-br from-red-200 via-white to-stone-200"
            }`}
          >
            <div
              className={`overflow-hidden rounded-[1.9rem] ${isDarkMode ? "bg-zinc-950/92" : "bg-white/98"}`}
            >
              <div className="p-6 sm:p-8">
                <div>
                  <p
                    className={
                      isDarkMode
                        ? "text-xs uppercase tracking-[0.3em] text-zinc-500"
                        : "text-xs uppercase tracking-[0.3em] text-stone-600"
                    }
                  >
                    Best Breakers
                  </p>
                  <h3
                    className={`mb-4 mt-3 text-2xl font-bold leading-tight sm:text-3xl ${
                      isDarkMode ? "text-white" : "text-stone-950"
                    }`}
                  >
                    {featuredProject.title}
                  </h3>

                  <p
                    className={`mb-6 text-sm leading-7 sm:text-base ${
                      isDarkMode ? "text-zinc-300" : "text-stone-700"
                    }`}
                  >
                    {featuredProject.description}
                  </p>

                  {featuredProject.stats && (
                    <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {featuredProject.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className={`rounded-2xl border p-4 ${
                            isDarkMode
                              ? "border-white/8 bg-white/4"
                              : "border-stone-200 bg-stone-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex-shrink-0 ${
                                isDarkMode ? "text-red-400" : "text-red-700"
                              }`}
                            >
                              {stat.icon}
                            </span>
                            <span
                              className={`text-sm font-semibold ${
                                isDarkMode ? "text-white" : "text-stone-900"
                              }`}
                            >
                              {stat.value}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <h4
                      className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
                        isDarkMode ? "text-zinc-500" : "text-stone-600"
                      }`}
                    >
                      {t("projects.technologies_used")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                            isDarkMode
                              ? "border-red-500/18 bg-red-500/10 text-red-100 hover:bg-red-500/14"
                              : "border-stone-200 bg-stone-100 text-stone-800 hover:bg-stone-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      {t("projects.view_project")}
                    </a>
                  )}
                  {featuredProject.liveUrl && (
                    <button
                      onClick={() => openPreview(featuredProject.liveUrl!)}
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all ${
                        isDarkMode
                          ? "border-white/12 text-zinc-200 hover:bg-white/6"
                          : "border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <Eye size={16} />
                      {t("projects.visualize")}
                    </button>
                  )}
                </div>
              </div>

              <div className="border-t border-black/5 p-4 sm:p-6 dark:border-white/6">
                <ImageGallery
                  images={bestBreakersImages}
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-[1.75rem] border p-1 transition-all ${
                isDarkMode
                  ? "border-white/10 bg-white/4 hover:border-red-500/20"
                  : "border-stone-200 bg-white hover:border-red-200 hover:shadow-xl"
              }`}
            >
              <div
                className={`h-full rounded-[1.7rem] ${isDarkMode ? "bg-zinc-950/80" : "bg-white"}`}
              >
                <div className="p-5 sm:p-6">
                  <p
                    className={
                      isDarkMode
                        ? "text-xs uppercase tracking-[0.26em] text-zinc-500"
                        : "text-xs uppercase tracking-[0.26em] text-stone-500"
                    }
                  >
                    Project {index + 1}
                  </p>
                  <h3
                    className={`mb-2 mt-3 text-lg font-bold ${
                      isDarkMode ? "text-white" : "text-stone-950"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-5 text-sm leading-7 ${
                      isDarkMode ? "text-zinc-400" : "text-stone-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                            isDarkMode
                              ? "border-white/10 bg-white/5 text-zinc-300"
                              : "border-stone-200 bg-stone-100 text-stone-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium"
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
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                          isDarkMode
                            ? "border-white/12 text-zinc-300 hover:bg-white/6"
                            : "border-stone-200 text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        <Github size={14} />
                        {t("projects.source_code")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="button-primary group inline-flex items-center gap-2 px-7 py-3.5 font-medium"
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
              className="relative h-[85vh] w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-red-600" />
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

              <button
                onClick={closePreview}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 cursor-pointer"
                aria-label="Fechar preview"
              >
                <X size={20} />
              </button>

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
