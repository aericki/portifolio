import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

interface EnhancedHeroProps {
  isDarkMode: boolean;
}

const ambientParticles = [
  { left: "8%", top: "18%", size: 8, duration: 8, delay: 0 },
  { left: "18%", top: "72%", size: 10, duration: 10, delay: 1 },
  { left: "32%", top: "14%", size: 6, duration: 7, delay: 0.6 },
  { left: "56%", top: "22%", size: 12, duration: 11, delay: 1.4 },
  { left: "68%", top: "70%", size: 7, duration: 9, delay: 0.8 },
  { left: "86%", top: "18%", size: 9, duration: 8.5, delay: 1.1 },
  { left: "78%", top: "44%", size: 5, duration: 6.5, delay: 0.5 },
  { left: "45%", top: "82%", size: 9, duration: 12, delay: 1.7 },
];

const localeCopy = {
  pt: {
    badge: "Full-stack engineer focado em produto, performance e entrega real.",
    eyebrow: "Portfolio 2026",
    availability: "Disponivel para freelas e oportunidades remotas",
    summary: "Construo experiencias web robustas, interfaces refinadas e sistemas orientados a negocio com execucao end-to-end.",
    signal: "Entrega com visao de produto",
    signalCopy: "Da estrategia ao deploy, com foco em confiabilidade, clareza e resultado.",
    panels: ["Frontend premium", "Backends robustos", "UX orientada a conversao"],
    mobileNote: "Desenvolvo produtos digitais completos com foco em clareza, performance e impacto real.",
  },
  en: {
    badge: "Full-stack engineer focused on product, performance, and real delivery.",
    eyebrow: "Portfolio 2026",
    availability: "Available for freelance and remote opportunities",
    summary: "I build robust web experiences, refined interfaces, and business-driven systems with end-to-end execution.",
    signal: "Product-minded delivery",
    signalCopy: "From strategy to deployment, with emphasis on reliability, clarity, and measurable outcomes.",
    panels: ["Premium frontend", "Robust backends", "Conversion-driven UX"],
    mobileNote: "I build complete digital products with focus on clarity, performance, and real impact.",
  },
  es: {
    badge: "Ingeniero full-stack enfocado en producto, rendimiento y entrega real.",
    eyebrow: "Portfolio 2026",
    availability: "Disponible para proyectos freelance y oportunidades remotas",
    summary: "Construyo experiencias web solidas, interfaces refinadas y sistemas orientados al negocio con ejecucion end-to-end.",
    signal: "Entrega con vision de producto",
    signalCopy: "De la estrategia al deploy, con foco en confiabilidad, claridad y resultados medibles.",
    panels: ["Frontend premium", "Backends robustos", "UX orientada a conversion"],
    mobileNote: "Desarrollo productos digitales completos con foco en claridad, rendimiento e impacto real.",
  },
} as const;

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const locale = i18n.language.startsWith("en")
    ? "en"
    : i18n.language.startsWith("es")
    ? "es"
    : "pt";
  const copy = localeCopy[locale];

  return (
    <section className="relative flex items-center overflow-hidden pb-30 sm:pb-42 lg:min-h-screen ">
      <div
        className={`hero-mesh pointer-events-none ${
          isDarkMode ? "opacity-60" : "hero-mesh-light opacity-70"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`hero-glow left-[8%] top-[12%] h-72 w-72 ${
            isDarkMode ? "bg-red-600/18" : "bg-red-500/10"
          }`}
        />
        <div
          className={`hero-glow right-[5%] top-[18%] h-80 w-80 ${
            isDarkMode ? "bg-white/6" : "bg-stone-300/30"
          }`}
        />
        <div
          className={`hero-glow bottom-[10%] left-[34%] h-64 w-64 ${
            isDarkMode ? "bg-red-500/10" : "bg-stone-300/25"
          }`}
        />
        {ambientParticles.map((particle, index) => (
          <motion.span
            key={index}
            className={`absolute rounded-full ${isDarkMode ? "bg-red-400/45" : "bg-stone-500/20"}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.25, 0.7, 0.25],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="section-shell z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
              isDarkMode
                ? "border-red-500/20 bg-red-500/10 text-red-200"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span>{copy.eyebrow}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className={`mb-6 text-4xl font-bold leading-none tracking-[-0.05em] sm:text-6xl lg:text-7xl ${
                isDarkMode ? "text-white" : "text-stone-950"
              }`}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: 90, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className={isDarkMode ? "block" : "block text-stone-950"}
                >
                  {t("hero.greeting")}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: 90, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.22 }}
                  className="gradient-text block"
                >
                  {t("hero.name")}
                </motion.span>
              </span>
            </h1>

            <div
              className={`mb-4 h-12 overflow-hidden text-xl sm:text-2xl ${
                isDarkMode ? "text-zinc-300" : "text-stone-600"
              }`}
            >
              <TypeAnimation
                key={i18n.language}
                sequence={[
                  t("hero.role_founder"),
                  3000,
                  t("hero.role_web_developer"),
                  2000,
                  t("hero.role_systems_analyst"),
                  2000,
                  t("hero.role_backend"),
                  2000,
                  t("hero.role_frontend"),
                  2000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className={`max-w-2xl text-pretty text-base leading-8 sm:text-lg ${
                isDarkMode ? "text-zinc-400" : "text-stone-600"
              }`}
            >
              {copy.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {copy.panels.map((panel) => (
                <span
                  key={panel}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    isDarkMode
                      ? "border-white/10 bg-white/4 text-zinc-200"
                      : "border-stone-200 bg-white text-stone-700"
                  }`}
                >
                  {panel}
                </span>
              ))}
            </motion.div>

            <div className="mb-8 mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://docs.google.com/document/d/1JL35R5Zy3-iTUBGkvkGPMKPhthSUZ0zDrgPACsMPMVw/export?format=pdf"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold sm:w-auto sm:text-base"
                >
                  <Download className="h-4 w-4" />
                  {t("hero.download_cv")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contato"
                  className={`button-secondary inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold sm:w-auto sm:text-base ${
                    !isDarkMode ? "border-stone-300 bg-white text-stone-900" : ""
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  {t("hero.contact_me")}
                </a>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="https://github.com/aericki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Aericki Ferreira"
                whileHover={{ y: -4 }}
                className={`rounded-full border p-3 ${
                  isDarkMode
                    ? "border-white/10 bg-white/4 text-white hover:bg-white/8"
                    : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                } transition-colors`}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/aericki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Aericki Ferreira"
                whileHover={{ y: -5 }}
                className={`rounded-full border p-3 ${
                  isDarkMode
                    ? "border-white/10 bg-white/4 text-white hover:bg-white/8"
                    : "border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
                } transition-colors`}
              >
                <Linkedin size={20} />
              </motion.a>

              <span className={isDarkMode ? "text-sm text-zinc-500" : "text-sm text-stone-600"}>
                {copy.availability}
              </span>
            </div>

            <div className={`mt-8 rounded-[1.75rem] border p-5 lg:hidden ${isDarkMode ? "border-white/10 bg-white/4" : "border-stone-200 bg-white shadow-sm"}`}>
              <p className={isDarkMode ? "text-xs uppercase tracking-[0.28em] text-zinc-500" : "text-xs uppercase tracking-[0.28em] text-stone-500"}>
                {copy.signal}
              </p>
              <p className={`mt-3 text-sm leading-7 ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}>
                {copy.mobileNote}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative hidden lg:block"
        >
          <div className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 ${isDarkMode ? "glass-panel" : "glass-panel-light"}`}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,113,113,0.18),transparent_30%)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className={isDarkMode ? "text-sm uppercase tracking-[0.32em] text-zinc-500" : "text-sm uppercase tracking-[0.32em] text-stone-500"}>
                  {copy.signal}
                </p>
                <p className={`mt-3 max-w-sm text-sm leading-7 ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}>
                  {copy.signalCopy}
                </p>
              </div>
              <div className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${isDarkMode ? "border-red-500/30 bg-red-500/10 text-red-300" : "border-red-200 bg-red-50 text-red-700"}`}>
                Live
              </div>
            </div>

            <div className="relative mt-8 flex justify-center">
              <motion.div
                className={`absolute inset-x-12 bottom-2 top-10 rounded-full blur-3xl ${
                  isDarkMode ? "bg-red-600/20" : "bg-red-400/20"
                }`}
                animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.98, 1.04, 0.98] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div
                  className={`absolute -inset-2 rounded-full ${
                    isDarkMode ? "bg-red-500/40" : "bg-red-300/50"
                  } blur-xl`}
                />
                <div className={`relative h-48 w-48 overflow-hidden rounded-full border-4 ${isDarkMode ? "border-white/10 bg-zinc-900" : "border-white bg-stone-100 shadow-xl shadow-stone-300/30"}`}>
                  <img
                    src="https://github.com/aericki.png"
                    alt="Foto de Aericki Ferreira — Desenvolvedor Full-Stack"
                    className="h-full w-full object-cover"
                    width={192}
                    height={192}
                    fetchPriority="high"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.panels.map((panel, index) => (
                <motion.div
                  key={panel}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className={`rounded-2xl border p-4 ${
                    isDarkMode
                      ? "border-white/8 bg-white/4 text-zinc-100"
                      : "border-stone-200 bg-white/80 text-stone-900"
                  }`}
                >
                  <p className="text-sm font-semibold">{panel}</p>
                </motion.div>
              ))}
            </div>

            <div className={`mt-6 rounded-2xl border px-4 py-4 ${isDarkMode ? "border-white/8 bg-black/20" : "border-stone-200 bg-stone-50"}`}>
              <p className={isDarkMode ? "text-xs uppercase tracking-[0.28em] text-zinc-500" : "text-xs uppercase tracking-[0.28em] text-stone-500"}>
                Note
              </p>
              <p className={`mt-2 text-sm leading-7 ${isDarkMode ? "text-zinc-300" : "text-stone-600"}`}>
                {copy.badge}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity }}
        className="absolute min-[300px]:bottom-0 sm:bottom-0  lg:bottom-16 left-1/2 -translate-x-1/2"
        whileHover={{ y: [0, -8, 0] }}
      >
        <a
          href="#sobre"
          className={`flex h-14 w-14 items-center justify-center rounded-full border ${
            isDarkMode
              ? "border-white/10 bg-white/4 text-red-400"
              : "border-stone-200 bg-white text-stone-700"
          }`}
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
