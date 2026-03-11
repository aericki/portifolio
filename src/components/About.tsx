import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const locale = i18n.language.startsWith("en")
    ? "en"
    : i18n.language.startsWith("es")
      ? "es"
      : "pt";

  const highlights = {
    pt: [
      "Interfaces com foco em clareza e conversao",
      "Back-end solido com Go, Node.js e integrações reais",
      "Visao de produto do conceito ao deploy",
    ],
    en: [
      "Interfaces focused on clarity and conversion",
      "Solid backends with Go, Node.js, and real integrations",
      "Product vision from concept to deployment",
    ],
    es: [
      "Interfaces enfocadas en claridad y conversion",
      "Backends solidos con Go, Node.js e integraciones reales",
      "Vision de producto del concepto al deploy",
    ],
  } as const;

  return (
    <section id="sobre" className="py-18 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-6 inline-flex rounded-full border px-4 py-2 text-sm ${
            isDarkMode
              ? "border-red-500/20 bg-red-500/10 text-red-200"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {t("about.title")}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`rounded-[2rem] p-8 sm:p-10 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
          >
            <h2
              className={`text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${isDarkMode ? "text-white" : "text-stone-950"}`}
            >
              {t("about.title")}
            </h2>
            <p
              className={`mt-6 max-w-3xl text-balance text-base  leading-8 sm:text-lg ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}
            >
              {t("about.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {highlights[locale].map((item) => (
              <div
                key={item}
                className={`rounded-[1.75rem] border p-6 ${
                  isDarkMode
                    ? "border-white/10 bg-white/4 text-zinc-200"
                    : "border-stone-200 bg-white text-stone-700 shadow-sm"
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                  Core
                </span>
                <p className="mt-3 text-base font-semibold leading-7">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
