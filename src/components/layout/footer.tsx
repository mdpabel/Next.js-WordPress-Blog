import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='flex justify-between items-center mx-auto px-6 max-w-6xl'>
        {/* Left: Copyright Text */}
        <p className='text-gray-600 text-sm dark:text-gray-400'>
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className='flex space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-teal-600 dark:text-gray-400 transition'
            aria-label='Facebook'>
            <FaFacebook size={20} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-teal-600 dark:text-gray-400 transition'
            aria-label='Twitter'>
            <FaTwitter size={20} />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-teal-600 dark:text-gray-400 transition'
            aria-label='LinkedIn'>
            <FaLinkedin size={20} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-teal-600 dark:text-gray-400 transition'
            aria-label='Instagram'>
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
