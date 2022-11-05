import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <a>
          <Image
            src='/../styles/logo.png'
            alt=''
            height='125'
            width='125'
          />
        </a>
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 font-bold text-lg hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 font-bold text-lg hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 font-bold text-lg hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 font-bold text-lg hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 font-bold text-lg hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
