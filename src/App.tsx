import { useEffect, useState } from "react";
import Header from "./components/Header";
import EnhancedHero from "./components/EnhancedHero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ui/ProgressBar";
import ThemeToggle from "./components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Verificar preferência salva do usuário
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }

    document.body.style.background = isDarkMode
      ? "linear-gradient(180deg, #1a1a1a, #4b0000)"
      : "linear-gradient(180deg, #f0f0f0, #d4d4d4)";
    document.body.style.color = isDarkMode ? "#d4d4d4" : "#333333";

    const handleScroll = () => {
      const sections = ["sobre", "experiencia", "habilidades", "projetos", "certificacoes", "contato"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      });

      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? "dark" : ""}`}>
      {/* Barra de progresso acima de tudo */}
      <ProgressBar isDarkMode={isDarkMode} />
      
      {/* Header posicionado abaixo da barra de progresso */}
      <Header 
        activeSection={activeSection} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        ThemeToggle={ThemeToggle}
      />
      
      {/* Conteúdo principal */}
      <EnhancedHero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      
      {/* Botão "Voltar ao topo" com animação de entrada/saída */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg ${
              isDarkMode 
                ? "bg-red-600 text-white hover:bg-red-700" 
                : "bg-gray-600 text-white hover:bg-gray-700"
            } transition-colors`}
            aria-label="Voltar ao topo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;