import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  compact?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  toggleTheme,
  compact = false,
}) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative inline-flex h-10 shrink-0 items-center rounded-full border px-1 ${
        compact ? "w-[4rem] xl:w-[4.5rem]" : "w-[4.5rem]"
      } sm:h-11 ${compact ? "sm:w-[4.5rem] xl:sm:w-20" : "sm:w-20"} ${
        isDarkMode
          ? "border-white/10 bg-white/5 text-white"
          : "border-stone-300 bg-white text-stone-700 shadow-sm"
      } transition-colors duration-300 ease-in-out`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      aria-label="Toggle theme"
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
        <motion.div
          initial={false}
          animate={{ x: isDarkMode ? (compact ? 28 : 28) : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute   top-1/2 h-8 w-8 -translate-y-1/2 rounded-full sm:h-9 sm:w-9 ${
            isDarkMode
              ? "bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-950/50 left-1.5"
              : "bg-stone-900 shadow-lg shadow-stone-400/40"
          }`}
        />
        <Sun
          className={`absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transition-opacity sm:h-5 sm:w-5 ${
            isDarkMode
              ? "opacity-40 text-zinc-500"
              : "opacity-100 text-amber-500"
          }`}
        />
        <Moon
          className={`absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transition-opacity sm:h-5 sm:w-5 ${
            isDarkMode ? "opacity-100 text-white" : "opacity-40 text-stone-400"
          }`}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
