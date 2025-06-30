import { useState, useEffect } from "react";
import { FaUser, FaCode, FaRocket, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

// Componente ThemeToggle
interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

import ThemeToggle from "./ui/ThemeToggle"; // Import ThemeToggle directly

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isDarkMode,
  toggleDarkMode
}) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Alternar visibilidade do cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
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

  const navItems = [
    { id: "sobre", label: t("header.about"), icon: <FaUser /> },
    { id: "experiencia", label: t("header.experience"), icon: <FaCode /> },
    { id: "habilidades", label: t("header.skills"), icon: <FaRocket /> },
    { id: "projetos", label: t("header.projects"), icon: <FaRocket /> },
    { id: "certificacoes", label: t("header.certifications"), icon: <FaCode /> },
    { id: "contato", label: t("header.contact"), icon: <FaEnvelope /> },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header 
      className={`fixed top-[-4px] h-14 w-full z-40 transition-all item duration-300 ${
        scrolled ? "py-2" : "py-4"
      } ${
        isDarkMode 
          ? scrolled ? "bg-black/90 shadow-md shadow-red-900/10" : "bg-black/80" 
          : scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      } backdrop-blur-sm`}
      style={{ marginTop: '4px' }} // Espaço para a barra de progresso (3px da barra + 1px da sombra)
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-xl sm:text-2xl font-bold ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
        >
          <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
            <span className="relative">
              aericki.dev
              <span 
                className={`absolute -right-2 top-0 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
              >
                _
              </span>
            </span>
          </a>
        </motion.h1>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.findIndex(i => i.id === item.id) * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  className={`flex items-center space-x-1 hover:text-red-600 transition-colors relative group ${
                    activeSection === item.id 
                      ? (isDarkMode ? "text-red-600" : "text-gray-900") 
                      : isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {activeSection === item.id ? (
                    <motion.span
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                        isDarkMode ? "bg-red-600" : "bg-gray-800"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <span className={`absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-300 ${
                      isDarkMode ? "bg-red-600/50" : "bg-gray-800/50"
                    }`} />
                  )}
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center ">
          {/* Language Selector */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-md font-medium flex items-center gap-1 ${
                isDarkMode ? "text-gray-300 hover:text-red-600" : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              {i18n.language.toUpperCase()}
              <ChevronDown size={16} />
            </button>
            <div className={`absolute right-0 mt-2 w-28 rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <a
                href="#"
                onClick={() => changeLanguage("pt")}
                className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} rounded-md`}
              >
                Português
              </a>
              <a
                href="#"
                onClick={() => changeLanguage("en")}
                className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} rounded-md`}
              >
                English
              </a>
              <a
                href="#"
                onClick={() => changeLanguage("es")}
                className={`block px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} rounded-md`}
              >
                Español
              </a>
            </div>
          </div>

          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleDarkMode} />
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-1.5 rounded-md ${
              isDarkMode 
                ? "bg-gray-800 hover:bg-gray-700" 
                : "bg-gray-200 hover:bg-gray-300"
            } transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t("header.close_menu") : t("header.open_menu")}
          >
            {isMobileMenuOpen ? (
              <FaTimes className={isDarkMode ? "text-red-500" : "text-gray-800"} size={18} />
            ) : (
              <FaBars className={isDarkMode ? "text-red-500" : "text-gray-800"} size={18} />
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden w-full ${
              isDarkMode ? "bg-black/95" : "bg-white/95"
            } shadow-lg`}
          >
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col py-4 px-4"
            >
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
                    className={`flex items-center space-x-3 py-2.5 px-4 rounded-lg ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "bg-gray-800 text-red-500"
                          : "bg-gray-200 text-gray-900"
                        : isDarkMode 
                          ? "text-gray-300 hover:bg-gray-800/60" 
                          : "text-gray-700 hover:bg-gray-200/60"
                    } transition-all`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;