import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code, Heart } from "lucide-react";
import { SiTypescript, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`pt-4 pb-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
          {/* Sobre */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Aéricki Ferreira
            </h3>
            <p className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Desenvolvedor Web apaixonado por criar experiências digitais 
              interativas e acessíveis com as tecnologias mais modernas do mercado.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/aericki" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300" 
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } transition-colors`}
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/aericki" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300" 
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:aerickidev@gmail.com" 
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300" 
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } transition-colors`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Links Rápidos
            </h3>
            <ul className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <li>
                <a 
                  href="#sobre" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#experiencia" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Experiência
                </a>
              </li>
              <li>
                <a 
                  href="#habilidades" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Habilidades
                </a>
              </li>
              <li>
                <a 
                  href="#projetos" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Projetos
                </a>
              </li>
              <li>
                <a 
                  href="#certificacoes" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Certificações
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="hover:underline hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Contato
            </h3>
            <ul className={`space-y-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <li className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Mail size={16} />
                </div>
                <a 
                  href="mailto:aerickidev@gmail.com" 
                  className="hover:text-red-600 transition-colors"
                >
                  aerickidev@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin size={16} />
                </div>
                <span>Peruíbe - SP, Brasil</span>
              </li>
              {/*<li className="flex items-center gap-3 mt-4">
                <a 
                  href="/Aericki_Trindade_CV.pdf" 
                  download 
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm ${
                    isDarkMode
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-700 text-white hover:bg-gray-800"
                  } transition-colors`}
                >
                  <ExternalLink size={14} />
                  Baixar Currículo
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
        
        {/* Tecnologias */}
        <div className="max-w-4xl mx-auto">
          <div className={`flex flex-wrap justify-center items-center gap-6 py-8 border-t border-b mb-8 ${
            isDarkMode ? "border-gray-800 text-gray-500" : "border-gray-300 text-gray-500"
          }`}>
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span className="text-sm">Desenvolvido com:</span>
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
        
        {/* Copyright */}
        <div className="text-center">
          <p className={`text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
            © {currentYear} Aericki Trindade Araujo de Jesus Ferreira. Todos os direitos reservados.
          </p>
          <p className={`text-xs mt-2 flex justify-center items-center gap-1 ${isDarkMode ? "text-gray-700" : "text-gray-400"}`}>
            Feito com <Heart className="h-3 w-3 text-red-500" /> e muitas xícaras de café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;