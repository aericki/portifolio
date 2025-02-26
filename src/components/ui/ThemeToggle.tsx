import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-1 rounded-full ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } transition-colors duration-300 ease-in-out`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-10 h-5">
        <motion.div
          initial={false}
          animate={{ x: isDarkMode ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute top-0 left-0 w-5 h-5 rounded-full 
          }`}
        />
        <Sun
          className={`absolute left-0 top-0 h-5 w-5 transition-opacity ${
            isDarkMode ? "opacity-0" : "opacity-100 text-gray-600"
          }`}
        />
        <Moon
          className={`absolute right-0 top-0 h-5 w-5 transition-opacity ${
            isDarkMode ? "opacity-100 text-white" : "opacity-0"
          }`}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;