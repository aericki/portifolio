import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CertificationsProps {
  isDarkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const certifications = [
    {
      title: t("certifications.nextjs_title"),
      provider: t("certifications.nextjs_provider"),
      year: t("certifications.nextjs_year"),
      description: t("certifications.nextjs_description"),
    },
    {
      title: t("certifications.web_dev_title"),
      provider: t("certifications.web_dev_provider"),
      year: t("certifications.web_dev_year"),
      description: t("certifications.web_dev_description"),
    },
    {
      title: t("certifications.algorithms_title"),
      provider: t("certifications.algorithms_provider"),
      year: t("certifications.algorithms_year"),
      description: t("certifications.algorithms_description"),
    },
  ];

  return (
    <section id="certificacoes" className={`py-5 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}>
            {t("certifications.title")}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
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
                      <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>{cert.title}</h3>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                        {cert.provider} | {cert.year}
                      </p>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{cert.description}</p>
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

export default Certifications;