import logo from '../images/formease-logo.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border shadow-gray-700 flex flex-col mt-5">
      <img className="h-60 w-52 mb-4 object-cover" src={logo} alt="logo" />
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
