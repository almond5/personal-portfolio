import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-center gap-3'>
      <Link href='https://www.linkedin.com/in/adrian5/'>
        <FaLinkedin className='text-3xl' />
      </Link>
      <Link href='https://github.com/adrianhossen5'>
        <FaGithub className='text-3xl' />
      </Link>
    </div>
  );
};

export default Footer;
