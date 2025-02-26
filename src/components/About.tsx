import { motion } from "framer-motion";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="sobre" className="py-16 max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
      >
        Sobre Mim
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-base sm:text-lg text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"} px-20 text-justify text-wrap `}
      >
        Sou estudante de Análise e Desenvolvimento de Sistemas na UNISA (conclusão em 2025), apaixonado por desenvolvimento web. Trabalho com JavaScript, TypeScript, Node.js e React, criando soluções eficientes para frontend e backend. Busco uma oportunidade como Desenvolvedor Web Júnior ou Estagiário para crescer e contribuir com projetos únicos.
      </motion.p>
    </section>
  );
};

export default About;