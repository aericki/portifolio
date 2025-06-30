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
      title: t("experience.web_developer_title"),
      company: t("experience.web_developer_company"),
      period: t("experience.web_developer_period"),
      description: t("experience.web_developer_description"),
      technologies: ["Node.js,", "Express", "TypeScript", "JavaScript", "React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: t("experience.computer_technician_title"),
      company: t("experience.computer_technician_company"),
      period: t("experience.computer_technician_period"),
      description: t("experience.computer_technician_description"),
      technologies: ["Suporte Técnico", "Hardware", "Resolução de Problemas", "Manutenção de Computadores" ],
    },
    {
      title: t("experience.systems_analysis_degree_title"),
      company: t("experience.systems_analysis_degree_company"),
      period: t("experience.systems_analysis_degree_period"),
      description: t("experience.systems_analysis_degree_description"),
      technologies: ["Análise de Sistemas", "Desenvolvimento de Software", "Metodologias Ágeis", "Banco de Dados", "Estrutura de Dados", "Boas Práticas"],
    },
  ];

  return (
    <section id="experiencia" className={`py-10 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}>
            {t("experience.title")}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className={`w-6 h-6 ${isDarkMode ? "text-red-600" : "text-gray-600"} mt-1`} />
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>{exp.title}</h3>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                        {exp.company} | {exp.period}
                      </p>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>{exp.description}</p>
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={`${tech}-${techIndex}`}
                              className={`${isDarkMode ? "bg-red-600/45 text-white" : "bg-gray-600/10 text-gray-600"} text-sm px-2 py-1 rounded`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
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