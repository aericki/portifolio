import { useState } from "react";
import { FaUser, FaCode, FaRocket, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "sobre", label: "Sobre", icon: <FaUser /> },
    { id: "experiencia", label: "Experiência", icon: <FaCode /> },
    { id: "habilidades", label: "Habilidades", icon: <FaRocket /> },
    { id: "projetos", label: "Projetos", icon: <FaRocket /> }, // Adicionado
    { id: "certificacoes", label: "Certificações", icon: <FaCode /> },
    { id: "contato", label: "Contato", icon: <FaEnvelope /> },
  ];

  return (
    <header className={`fixed top-0 w-full ${isDarkMode ? "bg-black bg-opacity-90" : "bg-gray-100 bg-opacity-90"} py-4 shadow-md z-20`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? "text-red-600" : "text-gray-800"}  `}>
          Aéricki Ferreira
        </h1>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-2xl">
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
          <button
            className="sm:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes className={isDarkMode ? "text-red-600" : "text-gray-800"} /> : <FaBars className={isDarkMode ? "text-red-600" : "text-gray-800"} />}
          </button>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center space-x-1 hover:text-red-600 transition ${
                    activeSection === item.id ? (isDarkMode ? "text-red-600" : "text-gray-800") : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={`sm:hidden absolute top-16 left-0 w-full h-screen px-4 py-6 ${isDarkMode ? "bg-black bg-opacity-95" : "bg-gray-100 bg-opacity-95"}`}
        >
          <ul className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center justify-center space-x-2 hover:text-red-600 transition ${
                    activeSection === item.id ? (isDarkMode ? "text-red-600" : "text-gray-800") : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;