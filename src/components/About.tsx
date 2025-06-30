import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-16 max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
      >
        {t("about.title")}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-base sm:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto text-left`}
      >
        {t("about.description")}
      </motion.p>
    </section>
  );
};

export default About;