import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface ContactProps {
  isDarkMode: boolean;
}

// Estados possíveis do formulário
type FormStatus = "idle" | "sending" | "success" | "error";

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  // Estado para controlar o status do envio
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  // Referência para o formulário
  const formRef = useRef<HTMLFormElement>(null);

  // Estado para os inputs do formulário - corrija os nomes para corresponder aos campos
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Função para atualizar os dados do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Muda o status para enviando
    setFormStatus("sending");

    try {
      // Configuração do EmailJS
      const result = await emailjs.sendForm(
        "service_uy63tde",
        "template_qoxzye6",
        formRef.current,
        "Q4asDlTayjZ6zoa2_",
      );

      console.log("EmailJS resultado:", result.text);

      // Se tudo correr bem, atualiza o status e limpa o formulário
      setFormStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });

      // Após 5 segundos, volta para o estado inicial
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      // Em caso de erro, atualiza o status e exibe no console
      console.error("Erro ao enviar email:", error);
      setFormStatus("error");

      // Após 5 segundos, volta para o estado inicial
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contato"
      className={`py-20 ${isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-100"}`}
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-red-600" : "text-gray-800"}`}
          >
            {t("contact.title")}
          </h2>

          <p
            className={`text-center max-w-2xl mx-auto mb-12 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            {t("contact.intro_message")}
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-8`}
              >
                <h3
                  className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  {t("contact.contact_info_title")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${isDarkMode ? "bg-red-600/20" : "bg-gray-200"}`}
                    >
                      <Mail
                        className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {t("contact.email")}
                      </p>
                      <a
                        href="mailto:aericki@gmail.com"
                        className={`font-medium ${isDarkMode ? "text-white hover:text-red-500" : "text-gray-800 hover:text-red-600"} transition-colors`}
                      >
                        aericki@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${isDarkMode ? "bg-red-600/20" : "bg-gray-200"}`}
                    >
                      <BsWhatsapp
                        className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {t("contact.phone_whatsapp")}
                      </p>
                      <a
                        href="https://wa.me/+5513991717187"
                        className={`font-medium ${isDarkMode ? "text-white hover:text-red-500" : "text-gray-800 hover:text-red-600"} transition-colors`}
                      >
                        +55 13 99171-7187
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${isDarkMode ? "bg-red-600/20" : "bg-gray-200"}`}
                    >
                      <MapPin
                        className={`w-5 h-5 ${isDarkMode ? "text-red-600" : "text-gray-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {t("contact.location")}
                      </p>
                      <p
                        className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
                      >
                        Peruíbe, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*<motion.a
                href="/Aericki_Trindade_CV.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-gray-700 hover:bg-gray-800"} text-white p-4 rounded-lg font-semibold transition flex items-center justify-center`}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo
              </motion.a>*/}

              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/aericki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  } transition-colors shadow-md`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/aericki" // Atualize com seu perfil do LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  } transition-colors shadow-md`}
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-8`}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                {t("contact.send_message_title")}
              </h3>

              {/* Mensagens de status */}
              {formStatus === "success" && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    isDarkMode
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-100 text-green-700"
                  } flex items-start`}
                >
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {t("contact.success_message")}
                    </p>
                    <p className="text-sm mt-1">
                      {t("contact.success_sub_message")}
                    </p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    isDarkMode
                      ? "bg-red-900/30 text-red-400"
                      : "bg-red-100 text-red-700"
                  } flex items-start`}
                >
                  <AlertCircle className="w-5 h-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("contact.error_message")}</p>
                    <p className="text-sm mt-1">
                      {t("contact.error_sub_message")}
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="from_name"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t("contact.name_label")}
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-md ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-red-500"
                        : "bg-gray-50 text-gray-900 border-gray-300 focus:border-red-600"
                    } border focus:outline-none focus:ring-1 focus:ring-opacity-50 ${
                      isDarkMode ? "focus:ring-red-500" : "focus:ring-red-600"
                    } transition-colors`}
                    placeholder={t("contact.name_placeholder")}
                    disabled={formStatus === "sending"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t("contact.email_label")}
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-md ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-red-500"
                        : "bg-gray-50 text-gray-900 border-gray-300 focus:border-red-600"
                    } border focus:outline-none focus:ring-1 focus:ring-opacity-50 ${
                      isDarkMode ? "focus:ring-red-500" : "focus:ring-red-600"
                    } transition-colors`}
                    placeholder={t("contact.email_placeholder")}
                    disabled={formStatus === "sending"}
                  />
                </div>

                {/* Campo oculto para o destinatário */}
                <input type="hidden" name="to_name" value="Aericki" />

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t("contact.message_label")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full p-3 rounded-md ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-red-500"
                        : "bg-gray-50 text-gray-900 border-gray-300 focus:border-red-600"
                    } border focus:outline-none focus:ring-1 focus:ring-opacity-50 ${
                      isDarkMode ? "focus:ring-red-500" : "focus:ring-red-600"
                    } transition-colors resize-none`}
                    placeholder={t("contact.message_placeholder")}
                    disabled={formStatus === "sending"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={`w-full mt-2 p-3 rounded-md font-medium flex items-center justify-center ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-700 hover:bg-gray-800 text-white"
                  } transition-colors ${formStatus === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {formStatus === "sending" ? (
                    <>
                      <Loader className="animate-spin mr-2 h-5 w-5" />
                      {t("contact.sending_button")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {t("contact.send_button")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
