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
    <section id="contato" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`mb-6 text-3xl font-bold tracking-[-0.04em] sm:text-4xl ${isDarkMode ? "text-white" : "text-stone-950"}`}
          >
            {t("contact.title")}
          </h2>

          <p
            className={`mb-12 max-w-2xl text-base leading-8 ${isDarkMode ? "text-zinc-400" : "text-stone-600"}`}
          >
            {t("contact.intro_message")}
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div
                className={`rounded-[2rem] p-8 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
              >
                <h3
                  className={`mb-6 text-xl font-semibold ${isDarkMode ? "text-white" : "text-stone-950"}`}
                >
                  {t("contact.contact_info_title")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl p-3 ${isDarkMode ? "bg-red-500/12" : "bg-red-50"}`}
                    >
                      <Mail
                        className={`h-5 w-5 ${isDarkMode ? "text-red-300" : "text-red-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-stone-500"}`}
                      >
                        {t("contact.email")}
                      </p>
                      <a
                        href="mailto:aericki@gmail.com"
                        className={`font-medium ${isDarkMode ? "text-white hover:text-red-300" : "text-stone-900 hover:text-red-700"} transition-colors`}
                      >
                        aericki@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl p-3 ${isDarkMode ? "bg-red-500/12" : "bg-red-50"}`}
                    >
                      <BsWhatsapp
                        className={`h-5 w-5 ${isDarkMode ? "text-red-300" : "text-red-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-stone-500"}`}
                      >
                        {t("contact.phone_whatsapp")}
                      </p>
                      <a
                        href="https://wa.me/+5513991717187"
                        className={`font-medium ${isDarkMode ? "text-white hover:text-red-300" : "text-stone-900 hover:text-red-700"} transition-colors`}
                      >
                        +55 13 99171-7187
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl p-3 ${isDarkMode ? "bg-red-500/12" : "bg-red-50"}`}
                    >
                      <MapPin
                        className={`h-5 w-5 ${isDarkMode ? "text-red-300" : "text-red-700"}`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-stone-500"}`}
                      >
                        {t("contact.location")}
                      </p>
                      <p
                        className={`font-medium ${isDarkMode ? "text-white" : "text-stone-900"}`}
                      >
                        Peruíbe, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/aericki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border p-3 ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-white hover:bg-white/8"
                      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                  } transition-colors shadow-md`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/aericki" // Atualize com seu perfil do LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border p-3 ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-white hover:bg-white/8"
                      : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
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

            <div
              className={`rounded-[2rem] p-8 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}
            >
              <h3
                className={`mb-6 text-xl font-semibold ${isDarkMode ? "text-white" : "text-stone-950"}`}
              >
                {t("contact.send_message_title")}
              </h3>

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
                      isDarkMode ? "text-zinc-300" : "text-stone-700"
                    }`}
                  >
                    {t("contact.name_label")}
                  </label>
                  <div
                    className={`input-shell ${!isDarkMode ? "border-stone-200 bg-stone-50" : ""}`}
                  >
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className={`w-full bg-transparent px-4 py-3 text-sm focus:outline-none ${
                        isDarkMode ? "text-white" : "text-stone-900"
                      }`}
                      placeholder={t("contact.name_placeholder")}
                      disabled={formStatus === "sending"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-zinc-300" : "text-stone-700"
                    }`}
                  >
                    {t("contact.email_label")}
                  </label>
                  <div
                    className={`input-shell ${!isDarkMode ? "border-stone-200 bg-stone-50" : ""}`}
                  >
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className={`w-full bg-transparent px-4 py-3 text-sm focus:outline-none ${
                        isDarkMode ? "text-white" : "text-stone-900"
                      }`}
                      placeholder={t("contact.email_placeholder")}
                      disabled={formStatus === "sending"}
                    />
                  </div>
                </div>

                <input type="hidden" name="to_name" value="Aericki" />

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      isDarkMode ? "text-zinc-300" : "text-stone-700"
                    }`}
                  >
                    {t("contact.message_label")}
                  </label>
                  <div
                    className={`input-shell ${!isDarkMode ? "border-stone-200 bg-stone-50" : ""}`}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full resize-none bg-transparent px-4 py-3 text-sm focus:outline-none ${
                        isDarkMode ? "text-white" : "text-stone-900"
                      }`}
                      placeholder={t("contact.message_placeholder")}
                      disabled={formStatus === "sending"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={`button-primary mt-2 flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold ${formStatus === "sending" ? "cursor-not-allowed opacity-70" : ""}`}
                >
                  {formStatus === "sending" ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      {t("contact.sending_button")}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
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
