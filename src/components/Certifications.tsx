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
    <section id="certificacoes" className="py-18 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`mb-12 text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${isDarkMode ? "text-white" : "text-stone-950"}`}
          >
            {t("certifications.title")}
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`h-full rounded-[1.75rem] p-6 sm:p-7 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${isDarkMode ? "bg-red-500/12 text-red-300" : "bg-red-50 text-red-700"}`}
                      >
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <span
                        className={
                          isDarkMode
                            ? "text-xs uppercase tracking-[0.28em] text-zinc-500"
                            : "text-xs uppercase tracking-[0.28em] text-stone-500"
                        }
                      >
                        {cert.year}
                      </span>
                    </div>

                    <h3
                      className={`mt-6 text-xl font-semibold ${isDarkMode ? "text-white" : "text-stone-950"}`}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm ${isDarkMode ? "text-red-300" : "text-red-700"}`}
                    >
                      {cert.provider}
                    </p>
                    <p
                      className={`mt-5 text-base leading-8 ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}
                    >
                      {cert.description}
                    </p>
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
