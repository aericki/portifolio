import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface ExperienceProps {
  isDarkMode: boolean;
}

const experiences = [
  {
    title: "Desenvolvedor Web",
    company: "Projetos Pessoais",
    period: "2023 - Presente",
    description: "Desenvolvi aplicações web e APIs usando Node.js, Express, TypeScript e React. Criei o Breaking Locations (Beta), uma plataforma web para encontrar locais de treino de breaking.",
    technologies: ["JavaScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Técnico de Manutenção de Computadores",
    company: "Peruíbe, SP",
    period: "Experiência Anterior",
    description: "Realizei formatação, reparo e montagem de computadores, oferecendo suporte técnico e desenvolvendo habilidades de resolução de problemas.",
    technologies: ["Suporte Técnico", "Hardware", "Resolução de Problemas"],
  },
  {
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    company: "UNISA",
    period: "Conclusão Prevista: Dezembro 2025",
    description: "Atualmente cursando graduação em Análise e Desenvolvimento de Sistemas, focando em tecnologias web modernas e práticas de desenvolvimento de software.",
    technologies: [],
  },
];

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  return (
    <section id="experiencia" className={`py-20 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}>
            Experiência
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
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`${isDarkMode ? "bg-red-600/10 text-red-600" : "bg-gray-600/10 text-gray-600"} text-sm px-2 py-1 rounded`}
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