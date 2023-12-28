import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '10px 0', // Optional: Add padding for better styling        
      }}
    >
      <div className="mb-3">
        <button>
          <Link href="https://www.linkedin.com/in/adrian5/">
            <FaLinkedin className="text-3xl" />
          </Link>
        </button>
        <button className='px-4'>
          <Link href="https://github.com/almond5">
            <FaGithub className="text-3xl" />
          </Link>
        </button>
        <button>
          <Link href="mailto:adrianhossen4@gmail.com">
            <FaEnvelope className="text-3xl" />
          </Link>
        </button>
        <button className='px-4'>
          <Link href='resume.pdf'>
            <FaNewspaper className="text-3xl" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
