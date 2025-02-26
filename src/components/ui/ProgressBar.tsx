import { useScroll, useSpring, motion } from "framer-motion";

interface ProgressBarProps {
  isDarkMode: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isDarkMode }) => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics para animação suave
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Barra de progresso principal */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          background: isDarkMode 
            ? "linear-gradient(90deg, #dc2626 0%, #ef4444 100%)" 
            : "linear-gradient(90deg, #4b5563 0%, #6b7280 100%)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 9999
        }}
      />
      
      {/* Camada de sombra sutil */}
      <motion.div 
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: "3px",
          left: 0,
          right: 0,
          height: "1px",
          background: isDarkMode 
            ? "rgba(239, 68, 68, 0.2)" 
            : "rgba(75, 85, 99, 0.2)",
          zIndex: 9999,
          filter: "blur(1px)"
        }}
      />
    </>
  );
};

export default ProgressBar;