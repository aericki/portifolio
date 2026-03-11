import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience.bestbreakers_founder_title"),
      company: t("experience.bestbreakers_founder_company"),
      period: t("experience.bestbreakers_founder_period"),
      description: t("experience.bestbreakers_founder_description"),
      technologies: [
        "Go",
        "React",
        "TypeScript",
        "WebSocket",
        "SQLite",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      title: t("experience.web_developer_title"),
      company: t("experience.web_developer_company"),
      period: t("experience.web_developer_period"),
      description: t("experience.web_developer_description"),
      technologies: [
        "Node.js",
        "Express",
        "TypeScript",
        "React",
        "Go",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      title: t("experience.computer_technician_title"),
      company: t("experience.computer_technician_company"),
      period: t("experience.computer_technician_period"),
      description: t("experience.computer_technician_description"),
      technologies: [
        "Suporte Técnico",
        "Hardware",
        "Resolução de Problemas",
        "Manutenção de Computadores",
      ],
    },
    {
      title: t("experience.systems_analysis_degree_title"),
      company: t("experience.systems_analysis_degree_company"),
      period: t("experience.systems_analysis_degree_period"),
      description: t("experience.systems_analysis_degree_description"),
      technologies: [
        "Análise de Sistemas",
        "Desenvolvimento de Software",
        "Metodologias Ágeis",
        "Banco de Dados",
        "Estrutura de Dados",
        "Boas Práticas",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-18 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`mb-14 text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${
              isDarkMode ? "text-white" : "text-stone-950"
            }`}
          >
            {t("experience.title")}
          </h2>

          <div className="relative mx-auto max-w-5xl space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-red-500/0 before:via-red-500/50 before:to-red-500/0 sm:before:left-7">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                <div
                  className={`absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border sm:left-[13px] ${
                    isDarkMode
                      ? "border-red-500/30 bg-red-500/12 text-red-300"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  <BadgeCheck className="h-4 w-4" />
                </div>

                <div
                  className={`rounded-[1.75rem] p-6 sm:p-8 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <p
                        className={
                          isDarkMode
                            ? "text-xs uppercase tracking-[0.26em] text-zinc-500"
                            : "text-xs uppercase tracking-[0.26em] text-stone-500"
                        }
                      >
                        {exp.company}
                      </p>
                      <h3
                        className={`mt-3 text-xl font-semibold sm:text-2xl ${isDarkMode ? "text-white" : "text-stone-950"}`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm ${isDarkMode ? "text-red-300" : "text-red-700"}`}
                      >
                        {exp.period}
                      </p>
                      <p
                        className={`mt-5 text-base leading-8 ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}
                      >
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex max-w-sm flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={`${tech}-${techIndex}`}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                            isDarkMode
                              ? "border-red-500/18 bg-red-500/10 text-red-100"
                              : "border-stone-200 bg-stone-100 text-stone-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
