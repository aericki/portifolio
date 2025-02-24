import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className={`absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,${isDarkMode ? "#ff0000" : "#gray-600"}_0%,transparent_100%)] opacity-10`} />
      <div className="container px-4 py-32 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Olá, me chamo{" "}
            <motion.span
              className={`bg-gradient-to-r ${isDarkMode ? "from-red-600 to-red-600/50" : "from-gray-600 to-gray-600/50"} bg-clip-text text-transparent`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Aéricki
            </motion.span>
            <br />
            , seja bem vindo!
          </h1>
          <p className={`text-xl sm:text-2xl mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Desenvolvedor Web Júnior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/Aericki_Trindade_CV.pdf"
                download
                className={`${isDarkMode ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-600 hover:bg-gray-700 text-white"} px-6 py-2 rounded-full font-semibold transition inline-flex items-center`}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contato"
                className={`${isDarkMode ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white" : "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"} px-6 py-2 rounded-full font-semibold transition inline-block`}
              >
                Entrar em Contato
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          whileHover={{ y: [0, -8, 0], transition: { duration: 1, repeat: Infinity }}}
        >
          <a href="#sobre" className="block">
            <ArrowDown className={`h-6 w-6 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;