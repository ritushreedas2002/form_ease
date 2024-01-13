import logo from '../images/formease-logo.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" bg-white shadow-black flex-col mt-5  ">
      <div className='flex-col'>
          <img className="h-60 w-64 mt-10 ml-28 object-cover" src={logo} alt="logo" />
          <div className="flex space-x-4 -mt-32 ml-44">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </a>
        </div>
      </div>
      <div className='flex space-x-10'>
          <div className='-mt-32 ml-[25%] p-7'>
            <ul className='pb-4'>
              <li className='p-2'>AboutUS</li>
              <li className='p-2'>SiteMap</li>
              <li className='p-2' >Credits</li>
              <li className='p-2'>HelpCentre </li>
              <li className='p-2'>Community Guidelines</li>
            </ul>
          </div>
          <div className='-mt-32 ml-[40%] p-7'>
            <ul className='pb-4'>
              <li className='p-2'>Accessibility</li>
              <li className='p-2'>Mobile</li>
              <li className='p-2' >Marketing</li>
              <li className='p-2'>Advertisement </li>
              <li className='p-2'>Report Issue</li>
            </ul>
          </div>
          <div className='-mt-32 ml-[40%] p-7'>
            <ul className='pb-4'>
              <li className='p-2'>Privacy Policy</li>
              <li className='p-2'>Terms & Condition</li>
              <li className='p-2' >Trust & Safety</li>
            </ul>
          </div>
      </div>
      <div className='flex-col-reverse'>
        <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
            <img className="w-32 h-20 ml-[80%] -mt-[14%] mb-6" src="https://w7.pngwing.com/pngs/696/500/png-transparent-google-play-mobile-phones-google-search-google-text-logo-sign.png" alt="playstore" />
        </a>
        <a href="https://www.apple.com/in/" target="_blank" rel="noopener noreferrer">
        <img  className="w-32 h-20 ml-[80%] -mt-[%]"src="https://logosmarken.com/wp-content/uploads/2021/02/App-Store-Emblem.png" alt="apple"/></a>
      </div>
      <hr></hr>
      <div>
        <h1 className='p-4 text-gray-400 ml-[10%]'>CopyRight &copy;2024 Created by Ritushree Das</h1>
      </div>
    </div>
    
  );
};

export default Footer;
