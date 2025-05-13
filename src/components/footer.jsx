import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return(
    
 <div className="flex flex-col items-center gap-y-10 py-6 text-gray-700  w-full">
            
<div className="flex gap-6 text-2xl">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="hover:-translate-y-2 transform transition duration-300" />

    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram  className="hover:-translate-y-2 transform transition duration-300"/>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin  className="hover:-translate-y-2 transform transition duration-300"/>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter  className="hover:-translate-y-2 transform transition duration-300"/>
    </a>
</div>

  
  <p className="text-sm text-gray-600">
    © 2024 Navbar. All Rights Reserved.
  </p>

</div>

    )
}