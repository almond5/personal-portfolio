import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-30 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src='/../public/logo.jpg'
          alt='/'
          width='100'
          height='100'
        />
      </div>
    </div>
  )
}

export default Navbar