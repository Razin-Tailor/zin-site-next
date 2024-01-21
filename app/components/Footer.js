import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaMediumM, FaLinkedinIn, FaTelegramPlane, FaHackerrank, FaYoutube, FaGithub } from 'react-icons/fa';
import { getCurentYear } from '../utils';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-5 px-4">
      <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/razin.raj" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/RazinTailor" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCbkDVNsvzABoYQQOoBzZ42A/videos" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/razintailor/" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="https://in.pinterest.com/r42intailor/_created" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaPinterestP />
        </a>
        <a href="https://medium.com/@r42intailor" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaMediumM />
        </a>
        <a href="https://www.linkedin.com/in/razin-tailor-48787085/" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Razin-Tailor" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/r42intailor" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaHackerrank />
        </a>
      </div>
      <div className="text-center text-xs mt-4">
        © Copyright | Razin Tailor {getCurentYear()} All Right Reserved
      </div>
    </footer>
  )
}

export default Footer
