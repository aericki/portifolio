import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface CertificationsProps {
  isDarkMode: boolean;
}

const certifications = [
  {
    title: "Next.js do Básico ao Avançado",
    provider: "Udemy",
    year: "2024",
    description: "Curso abrangente sobre Next.js, cobrindo fundamentos e técnicas avançadas de desenvolvimento web.",
  },
  {
    title: "Desenvolvimento Web Completo: 20 Cursos e 20 Projetos",
    provider: "Udemy",
    year: "2023",
    description: "Formação completa em desenvolvimento web, incluindo HTML, CSS, JavaScript, React e mais, com projetos práticos.",
  },
  {
    title: "Algoritmos e Lógica de Programação",
    provider: "Udemy",
    year: "2023",
    description: "Curso focado em lógica de programação e resolução de problemas com algoritmos.",
  },
];

const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <section id="certificacoes" className={`py-20 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}>
            Certificações
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className={`w-6 h-6 ${isDarkMode ? "text-red-600" : "text-gray-600"} mt-1`} />
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>{cert.title}</h3>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                        {cert.provider} | {cert.year}
                      </p>
                      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{cert.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;