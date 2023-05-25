import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div id='home' className='py-72 flex-col justify-center text-center'>
      <div className='mb-3 text-2xl leading-2;'>Hello, my name is</div>
      <div className='mb-5 text-5xl font-semibold xs:text-5xl sm:text-5xl md:text-5xl 
        lg:text-6xl xl:text-6xl'>
        Adrian Hossen.
      </div>
      <div className='mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm md:max-w-sm 
        lg:max-w-md xl:max-w-md'>
        I am a software developer with a growth mindset who is always eager to
        learn more. I love programming and sharing my knowledge with others!
        Please contact me with any questions or if you just wish to chat.
      </div>
      <div className='py-10 mx-auto max-w-2xl'>
        <Link href='mailto:adrianhossen4@gmail.com'>
          <a
            className='mx-auto rounded-full w-max border-2 px-6 py-3 
            font-bold transition hover:bg-gray-100 hover:text-gray-800'
          >
            Contact Me
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
