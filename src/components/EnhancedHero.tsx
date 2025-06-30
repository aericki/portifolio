import { motion } from "framer-motion";
import { Download, ExternalLink, Github, Mail, ChevronDown } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from "react-i18next";

interface EnhancedHeroProps {
  isDarkMode: boolean;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className={`absolute inset-0 -z-10 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${isDarkMode ? "#ff0000" : "#686868"}_0%,transparent_50%)]`} />
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,90 Q20,60 40,80 T80,70 T100,80 V100 H0 Z"
            fill={isDarkMode ? '#300' : '#aaa'}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,90 Q30,50 50,70 T100,60 V100 H0 Z"
            fill={isDarkMode ? '#500' : '#ccc'}
            opacity={0.5}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 15,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto z-10">
        {/* Foto de perfil */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className={`absolute -inset-1 rounded-full ${isDarkMode ? "bg-red-600" : "bg-gray-700"}`}
              animate={{ 
                boxShadow: [
                  `0 0 5px 2px ${isDarkMode ? "rgba(220, 38, 38, 0.6)" : "rgba(55, 65, 81, 0.6)"}`,
                  `0 0 12px 4px ${isDarkMode ? "rgba(220, 38, 38, 0.4)" : "rgba(55, 65, 81, 0.4)"}`,
                  `0 0 5px 2px ${isDarkMode ? "rgba(220, 38, 38, 0.6)" : "rgba(55, 65, 81, 0.6)"}`,
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="w-32 h-32 rounded-full overflow-hidden relative">
              <img 
                src="https://github.com/aericki.png" 
                alt="Aericki Ferreira" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/128?text=Foto";
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {t("hero.greeting")}{" "}
              <motion.span
                className={`bg-gradient-to-r ${isDarkMode ? "from-red-600 to-red-400" : "from-gray-700 to-gray-500"} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("hero.name")}
              </motion.span>
            </h1>
            
            <div className={`h-12 overflow-hidden mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <TypeAnimation
                sequence={[
                  t('hero.role_web_developer'),
                  2000,
                  t('hero.role_systems_analyst'),
                  2000,
                  t('hero.role_backend'),
                  3000,
                  t('hero.role_frontend'),
                  2000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl mb-8"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://docs.google.com/document/d/1JL35R5Zy3-iTUBGkvkGPMKPhthSUZ0zDrgPACsMPMVw/edit?usp=sharing"
                  target="_blank"
                  download
                  className={`${isDarkMode ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-700 hover:bg-gray-800 text-white"} px-6 py-3 rounded-full font-medium transition inline-flex items-center`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("hero.download_cv")}
                </a>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#contato"
                  className={`${isDarkMode ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white" : "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"} px-6 py-3 rounded-full font-medium transition inline-flex items-center`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t("hero.contact_me")}
                </a>
              </motion.div>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <motion.a
                href="https://github.com/aericki"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/aericki"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        whileHover={{ y: [0, -8, 0] }}
      >
        <a href="#sobre" className="block">
          <ChevronDown className={`h-8 w-8 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
        </a>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;