import { useState, useEffect } from "react";
import {
  FaUser,
  FaCode,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

import ThemeToggle from "./ui/ThemeToggle"; // Import ThemeToggle directly

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isDarkMode,
  toggleDarkMode,
}) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Alternar visibilidade do cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Detectar scroll para mudar a aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "sobre", label: t("header.about"), icon: <FaUser /> },
    { id: "experiencia", label: t("header.experience"), icon: <FaCode /> },
    { id: "habilidades", label: t("header.skills"), icon: <FaRocket /> },
    { id: "projetos", label: t("header.projects"), icon: <FaRocket /> },
    {
      id: "certificacoes",
      label: t("header.certifications"),
      icon: <FaCode />,
    },
    { id: "contato", label: t("header.contact"), icon: <FaEnvelope /> },
  ];

  const languages = [
    {
      code: "pt",
      label: "Português",
      flag: "https://flagsapi.com/BR/flat/64.png",
    },
    {
      code: "en",
      label: "English",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      code: "es",
      label: "Español",
      flag: "https://flagsapi.com/ES/flat/64.png",
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const currentLanguage = languages.find((lang) =>
    i18n.language.startsWith(lang.code),
  );

  const shellClass = isDarkMode
    ? "glass-nav text-white"
    : "border border-stone-200/80 bg-white/80 text-stone-900 shadow-xl shadow-stone-200/20 backdrop-blur-xl";

  const navTextClass = isDarkMode ? "text-zinc-300" : "text-stone-600";
  const activeTextClass = isDarkMode ? "text-white" : "text-stone-950";

  return (
    <header className="fixed inset-x-0 top-2 z-40 px-2 sm:top-3 sm:px-4">
      <div
        className={`mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between rounded-[1.5rem] px-3 py-2 transition-all duration-300 sm:px-5 ${shellClass} ${
          scrolled ? "translate-y-0 shadow-2xl" : "translate-y-1"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-0 flex-1 text-lg font-bold sm:flex-none sm:text-xl"
        >
          <a
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3 transition-opacity hover:opacity-85"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border sm:h-10 sm:w-10 ${
                isDarkMode
                  ? "border-red-500/30 bg-red-500/12 text-red-300"
                  : "border-stone-200 bg-stone-900 text-white"
              }`}
            >
              A
            </span>
            <span className="relative flex min-w-0 flex-col leading-none">
              <span
                className={`text-md md:text-xl truncate ${isDarkMode ? "text-white" : "text-stone-950"} `}
              >
                aericki.dev
              </span>
              <span
                className={`hidden text-xs sm:block ${isDarkMode ? "text-zinc-500" : "text-stone-500"}`}
              >
                full-stack systems
              </span>
              <span
                className={`absolute -right-3 top-0 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity ${
                  isDarkMode ? "text-red-500" : "text-stone-700"
                }`}
              >
                _
              </span>
            </span>
          </a>
        </motion.h1>

        <nav className="hidden md:block pl-3">
          <ul className="flex items-center gap-2 rounded-full border border-white/5 px-2 py-2">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: navItems.findIndex((i) => i.id === item.id) * 0.1,
                }}
              >
                <a
                  href={`#${item.id}`}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id ? activeTextClass : navTextClass
                  }`}
                >
                  {activeSection === item.id ? (
                    <motion.span
                      layoutId="activeSection"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        isDarkMode ? "bg-white/8" : "bg-stone-100"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  ) : (
                    <span
                      className={`absolute inset-x-4 bottom-1 h-px scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                        isDarkMode ? "bg-red-500/70" : "bg-stone-400/70"
                      }`}
                    />
                  )}
                  <span
                    className={`text-sm ${activeSection === item.id ? "text-red-400" : ""}`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="ml-2 flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="relative group">
            <button
              className={`flex items-center gap-1 rounded-full border px-2.5 py-2 text-sm font-medium sm:gap-2 sm:px-3 ${
                isDarkMode
                  ? "border-white/10 text-zinc-200 hover:text-white"
                  : "border-stone-200 text-stone-700 hover:text-stone-950"
              } transition-colors`}
              aria-label="Selecionar idioma"
            >
              <img
                src={currentLanguage?.flag}
                alt={`Bandeira do idioma atual`}
                className="w-5 h-5 rounded-full"
              />
              <ChevronDown size={14} />
            </button>
            <div
              className={`absolute right-0 mt-3 w-40 rounded-2xl border p-2 shadow-2xl opacity-0 invisible transition-all duration-200 scale-95 group-hover:visible group-hover:scale-100 group-hover:opacity-100 ${
                isDarkMode
                  ? "border-white/10 bg-zinc-950/95"
                  : "border-stone-200 bg-white/95"
              }`}
            >
              {languages.map((lang) => (
                <button
                  type="button"
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm transition-colors
                    ${
                      i18n.language.startsWith(lang.code)
                        ? isDarkMode
                          ? "bg-white/8 text-red-400"
                          : "bg-stone-100 text-red-600"
                        : isDarkMode
                          ? "text-zinc-300 hover:bg-white/6"
                          : "text-stone-700 hover:bg-stone-100"
                    }`}
                  aria-label={`Mudar para ${lang.label}`}
                >
                  <img
                    src={lang.flag}
                    alt={`Bandeira de ${lang.label}`}
                    className="w-5 h-5 rounded-full"
                  />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleDarkMode} />

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden rounded-2xl border p-2.5 ${
              isDarkMode
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-stone-200 bg-white hover:bg-stone-50"
            } transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? t("header.close_menu") : t("header.open_menu")
            }
          >
            {isMobileMenuOpen ? (
              <FaTimes
                className={isDarkMode ? "text-red-400" : "text-stone-800"}
                size={18}
              />
            ) : (
              <FaBars
                className={isDarkMode ? "text-red-400" : "text-stone-800"}
                size={18}
              />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`fixed inset-x-3 top-24 z-40 flex flex-col gap-3 rounded-[2rem] border p-4 shadow-2xl md:hidden ${
                isDarkMode
                  ? "border-white/10 bg-zinc-950/96"
                  : "border-stone-200 bg-white/96"
              }`}
            >
              <div className="px-2 pb-2">
                <p
                  className={
                    isDarkMode
                      ? "text-sm text-zinc-500"
                      : "text-sm text-stone-500"
                  }
                >
                  Navigate fast
                </p>
              </div>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="mb-2"
                >
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "bg-white/8 text-white"
                          : "bg-stone-100 text-stone-950"
                        : isDarkMode
                          ? "text-zinc-300 hover:bg-white/6"
                          : "text-stone-700 hover:bg-stone-100"
                    } transition-all`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`text-lg ${activeSection === item.id ? "text-red-400" : ""}`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </motion.li>
              ))}
              <div className="mt-2 flex items-center justify-between rounded-2xl border border-white/8 px-4 py-3">
                <span
                  className={
                    isDarkMode
                      ? "text-sm text-zinc-400"
                      : "text-sm text-stone-500"
                  }
                >
                  {currentLanguage?.label}
                </span>
                <div className="flex items-center gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => changeLanguage(lang.code)}
                      className={`rounded-full border p-1 ${
                        i18n.language.startsWith(lang.code)
                          ? isDarkMode
                            ? "border-red-500/40 bg-red-500/12"
                            : "border-red-300 bg-red-50"
                          : isDarkMode
                            ? "border-white/10"
                            : "border-stone-200"
                      }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="h-6 w-6 rounded-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
