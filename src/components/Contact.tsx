import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Download } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! Entrarei em contato em breve.");
  };

  return (
    <section id="contato" className={`py-20 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}>
            Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Informações</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
                  <a href="mailto:aerickidev@gmail.com" className={`hover:${isDarkMode ? "text-red-600" : "text-gray-600"} transition`}>
                    aerickidev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
                  <a href="tel:+5513991717187" className={`hover:${isDarkMode ? "text-red-600" : "text-gray-600"} transition`}>
                    +55 13 99171-7187
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
                  <span>Peruíbe - SP, Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-600"}`} />
                  <a
                    href="https://github.com/aericki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:${isDarkMode ? "text-red-600" : "text-gray-600"} transition`}
                  >
                    github.com/aericki
                  </a>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-gray-800 border-gray-300"} border focus:outline-none focus:border-red-600`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-gray-800 border-gray-300"} border focus:outline-none focus:border-red-600`}
                />
                <textarea
                  placeholder="Mensagem"
                  required
                  className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-gray-800 border-gray-300"} border focus:outline-none focus:border-red-600 min-h-[150px]`}
                />
                <button
                  type="submit"
                  className={`${isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"} text-white px-6 py-2 rounded-full font-semibold transition w-full`}
                >
                  Enviar Mensagem
                </button>
              </form>
              <motion.a
                href="/Aericki_Trindade_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"} text-white px-6 py-2 rounded-full font-semibold transition inline-flex items-center w-full justify-center mt-4`}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

//TODO: Enviar e-mail, adicionar foto hero, adicionar redes sociais