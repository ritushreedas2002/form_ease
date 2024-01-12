import logo from '../images/formease-logo.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-yellow-50 h-40 flex flex-col items-center justify-center">
      {/* Logo */}
      <img className="h-60 w-24 mb-4 object-cover" src={logo} alt="logo" />

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Instagram */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
