import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image
            src='/../public/logo.png'
            alt='/'
            width='200'
            height='160'
          />
        </div>
      </div>
      <div className='ml-2'>
        <ul className = 'items-center hover:border-b'>
          <Link href='/'>
            <li className=''>Home</li>
          </Link>
        </ul>
        <div className = 'md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  )
}

export default Navbar


