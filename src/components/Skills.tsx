import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiLinux,
  SiGo,
  SiPython,
  SiDocker,
  SiSqlite,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  isDarkMode: boolean;
}

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Golang", icon: SiGo, color: "text-cyan-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "Express", icon: SiExpress, color: "text-gray-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-indigo-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "SQLite", icon: SiSqlite, color: "text-blue-300" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Linux", icon: SiLinux, color: "text-gray-300" },
];

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  return (
    <section id="habilidades" className="py-18 sm:py-24">
      <div className="section-shell">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${
            isDarkMode ? "text-white" : "text-stone-950"
          }`}
        >
          {t("skills.title")}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mb-12 max-w-3xl text-left text-base leading-8 ${
            isDarkMode ? "text-zinc-300" : "text-stone-600"
          }`}
        >
          {t("skills.description")}
        </motion.p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
              className={`group rounded-[1.5rem] border p-[1px] ${
                isDarkMode
                  ? "border-white/10 bg-white/4 hover:border-red-500/30"
                  : "border-stone-200 bg-white hover:border-red-200 hover:shadow-lg"
              }`}
            >
              <div
                className={`h-full rounded-[1.45rem] p-6 text-center ${
                  isDarkMode ? "bg-zinc-950/70" : "bg-white"
                }`}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/4"
                >
                  <skill.icon className={`h-8 w-8 ${skill.color}`} />
                </motion.div>
                <h4
                  className={`text-sm font-semibold sm:text-base ${
                    isDarkMode ? "text-white" : "text-stone-900"
                  }`}
                >
                  {skill.name}
                </h4>
                <div
                  className={`mx-auto mt-4 h-px w-10 transition-all duration-300 group-hover:w-16 ${isDarkMode ? "bg-red-500/60" : "bg-red-400/60"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
