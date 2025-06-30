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
        Sou um profissional recém-formado em Análise e Desenvolvimento de Sistemas pela UNISA, com uma paixão sólida por transformar ideias em soluções web eficientes e intuitivas. Minha expertise abrange o desenvolvimento frontend e backend, utilizando tecnologias modernas como JavaScript, TypeScript, Node.js e React. Busco uma oportunidade para aplicar meus conhecimentos e contribuir com projetos inovadores, sempre focado em otimização e boas práticas de desenvolvimento.
      </motion.p>
    </section>
  );
};

export default About;