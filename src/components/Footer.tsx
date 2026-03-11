import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code } from "lucide-react";
import { SiTypescript, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import { useTranslation } from "react-i18next";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative overflow-hidden pb-10 pt-8 ${isDarkMode ? "bg-transparent" : "bg-stone-50"}`}
    >
      <div className="section-shell">
        <div
          className={`mb-8 h-px w-full bg-gradient-to-r ${isDarkMode ? "from-transparent via-red-500/40 to-transparent" : "from-transparent via-red-300 to-transparent"}`}
        />

        <div
          className={`rounded-[2rem] p-8 sm:p-10 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
        >
          <div className="grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h3
                className={`mb-4 text-lg font-bold ${isDarkMode ? "text-white" : "text-stone-950"}`}
              >
                {t("footer.about_title")}
              </h3>
              <p
                className={`mb-4 leading-8 ${isDarkMode ? "text-zinc-400" : "text-stone-600"}`}
              >
                {t("footer.about_description")}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/aericki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border p-2.5 ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-zinc-200 hover:bg-white/8"
                      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                  } transition-colors`}
                  aria-label="Github"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/aericki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border p-2.5 ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-zinc-200 hover:bg-white/8"
                      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                  } transition-colors`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:aericki@gmail.com"
                  className={`rounded-full border p-2.5 ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-zinc-200 hover:bg-white/8"
                      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                  } transition-colors`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3
                className={`mb-4 text-lg font-bold ${isDarkMode ? "text-white" : "text-stone-950"}`}
              >
                {t("footer.quick_links_title")}
              </h3>
              <ul
                className={`space-y-2 ${isDarkMode ? "text-zinc-400" : "text-stone-600"}`}
              >
                <li>
                  <a
                    href="#sobre"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.experience")}
                  </a>
                </li>
                <li>
                  <a
                    href="#habilidades"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.skills")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.projects")}
                  </a>
                </li>
                <li>
                  <a
                    href="#certificacoes"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.certifications")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    {t("header.contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`mb-4 text-lg font-bold ${isDarkMode ? "text-white" : "text-stone-950"}`}
              >
                {t("footer.contact_title")}
              </h3>
              <ul
                className={`space-y-3 ${isDarkMode ? "text-zinc-400" : "text-stone-600"}`}
              >
                <li className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:aericki@gmail.com"
                    className="hover:text-red-600 transition-colors"
                  >
                    aericki@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <span>{t("footer.location_text")}</span>
                </li>
              </ul>
            </div>

            <div
              className={`md:col-span-3 mt-2 flex flex-wrap items-center justify-center gap-6 rounded-[1.5rem] border px-6 py-8 ${
                isDarkMode
                  ? "border-white/10 text-zinc-500"
                  : "border-stone-200 text-stone-500"
              }`}
            >
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span className="text-sm">{t("footer.developed_with")}</span>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center"
                >
                  <SiReact className="text-cyan-500 text-2xl" />
                  <span className="text-xs mt-1">React</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center"
                >
                  <SiTypescript className="text-blue-500 text-2xl" />
                  <span className="text-xs mt-1">TypeScript</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center"
                >
                  <SiTailwindcss className="text-cyan-400 text-2xl" />
                  <span className="text-xs mt-1">Tailwind</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center"
                >
                  <SiFramer className="text-pink-500 text-2xl" />
                  <span className="text-xs mt-1">Framer</span>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p
              className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-stone-500"}`}
            >
              © {currentYear} Aericki Trindade Araujo de Jesus Ferreira.{" "}
              {t("footer.copyright")}
            </p>
            <p
              className={`mt-2 flex items-center justify-center gap-1 text-xs ${isDarkMode ? "text-zinc-600" : "text-stone-400"}`}
            >
              {t("footer.made_with_love")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
