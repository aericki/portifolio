import { useState, useEffect } from "react";
import Header from "./components/Header";
import EnhancedHero from "./components/EnhancedHero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next"; // Importar useTranslation

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre"); // Add activeSection state
  const { t, i18n } = useTranslation(); // Usar o hook useTranslation e obter i18n

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    

    const handleScroll = () => {
      const sections = [
        "sobre",
        "experiencia",
        "habilidades",
        "projetos",
        "certificacoes",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for active section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const seoLocaleMap: Record<string, string> = {
      pt: "pt_BR",
      en: "en_US",
      es: "es_ES",
    };

    const pageTitle = t("page_title");
    const pageDescription = t("seo_description");
    const pageKeywords = t("seo_keywords");
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const currentLocale = seoLocaleMap[i18n.language] ?? "pt_BR";

    document.title = t("page_title");
    document.documentElement.lang = i18n.language;

    const upsertMetaTag = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const upsertLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", rel);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute("href", href);
    };

    upsertMetaTag("name", "description", pageDescription);
    upsertMetaTag("name", "keywords", pageKeywords);
    upsertMetaTag("property", "og:title", pageTitle);
    upsertMetaTag("property", "og:description", pageDescription);
    upsertMetaTag("property", "og:url", currentUrl);
    upsertMetaTag("property", "og:locale", currentLocale);
    upsertMetaTag("name", "twitter:title", pageTitle);
    upsertMetaTag("name", "twitter:description", pageDescription);

    upsertLinkTag("canonical", currentUrl);
  }, [t, i18n.language]);


  
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />
      <main className="flex-grow">
        <EnhancedHero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
