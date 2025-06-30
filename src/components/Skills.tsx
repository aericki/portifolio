import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiPrisma, SiGit, SiLinux } from "react-icons/si";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  isDarkMode: boolean;
}

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-indigo-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Linux", icon: SiLinux, color: "text-gray-300" },
];

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  return (
    <section id="habilidades" className={`py-8 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
        >
          {t("skills.title")}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-center max-w-3xl mx-auto mb-12 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          {t("skills.description")}
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md transition-all hover:shadow-lg hover:border-red-600/50`}
            >
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <skill.icon className={`w-10 sm:w-12 h-10 sm:h-12 ${skill.color} mb-4`} />
                </motion.div>
                <h4 className={`font-semibold text-sm sm:text-base ${isDarkMode ? "text-white" : "text-gray-800"}`}>{skill.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;