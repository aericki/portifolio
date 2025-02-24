interface FooterProps {
    isDarkMode: boolean;
  }
  
  const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
      <footer className={`py-4 text-center ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
        <p>© 2025 Aericki Trindade Araujo de Jesus Ferreira. Todos os direitos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;