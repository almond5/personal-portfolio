import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-center">
      <button>
        <Link href="https://www.linkedin.com/in/adrian5/">
          <FaLinkedin className="text-3xl" />
        </Link>
      </button>
      <button>
        <Link href="https://github.com/adrianhossen5">
          <FaGithub className="text-3xl" />
        </Link>
      </button>
      <button>
        <Link href="mailto:adrianhossen5@gmail.com">
          <FaEnvelope className="text-3xl" />
        </Link>
      </button>
    </div>
  );
};

export default Footer;
