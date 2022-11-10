import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id='projects' className='flex-col text-center py-60'>
      <div className='mx-auto max-w-lg'>
        <p className='mb-8 text-3xl text-center font-bold'>Projects</p>
      </div>
      <ul className='grid px-52 gap-6 md:grid-cols-2 lg:grid-cols-2'>
        <li
          className='outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
        >
          <Link href='https://github.com/adrianhossen5/ty'>
            <a target='_blank'>
              <div className='mb-1 text-lg font-bold'>Ty Bot</div>
              <p className='mb-4 text-md text-left'>
                Contributed to the UCF Knights Discord Server’s bot by
                developing a birthday feature. Connected the bot to a
                planetscale database for user profile storage (birthdays).
              </p>
              <ul className='flex flex-wrap gap-x-5 gap-y-1.5 text-md text-left'>
                <li className='list-inside'>JavaScript</li>
                <li className='list-inside'>PlanetScale DB</li>
                <li className='list-inside'>TypeScript</li>
                <li className='list-inside'>Node.js</li>
                <li className='list-inside'>Prisma</li>
              </ul>
            </a>
          </Link>
        </li>
        <li
          className='outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
        >
          <Link href='https://github.com/adrianhossen5/PlsBot'>
            <a target='_blank'>
              <div className='mb-1 text-lg font-bold'>Pls Bot</div>
              <p className='mb-4 text-md text-left'>
                Leveraged Tenor API in conjunction with the fetch() function to
                create a Discord bot that delivers specific gifs based on users’
                requests within a server.
              </p>
              <ul className='flex flex-wrap gap-x-5 gap-y-1.5 text-md text-left'>
                <li className='list-inside'>Node.js</li>
                <li className='list-inside'>JavaScript</li>
                <li className='list-inside'>Discord.js</li>
              </ul>
            </a>
          </Link>
        </li>
        <div className='py-2'>
          <li
            className='outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
          >
            <Link href='https://github.com/adrianhossen5/Video-Image-Classification'>
              <a target='_blank'>
                <div className='mb-1 text-lg font-bold'>
                  Video Image Classification
                </div>
                <p className='mb-4 text-md text-left'>
                  Developed a program that classifies an object through a webcam
                  utilizing a model that was trained using the ImageNet
                  database. Program returns the confidence level of the image
                  classification.
                </p>
                <ul className='flex flex-wrap gap-x-5 gap-y-1.5 text-md text-left'>
                  <li className='list-inside'>HTML</li>
                  <li className='list-inside'>JavaScript</li>
                  <li className='list-inside'>ImageNet</li>
                </ul>
              </a>
            </Link>
          </li>
        </div>
        <div className='py-2'>
          <li
            className='outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
          >
            <Link href='https://github.com/adrianhossen5/personal_website'>
              <a target='_blank'>
                <div className='mb-1 text-lg font-bold'>Personal Portfolio</div>
                <p className='mb-4 text-md text-left'>
                  Developed a personal portfolio utilizng the Next.js framework.
                  Excersied the use of Tailwind CSS to style nearly all the
                  visible components. The site is currently being hosted
                  Netlify.
                </p>
                <ul className='flex flex-wrap gap-x-5 gap-y-1.5 text-md text-left'>
                  <li className='list-inside'>Next.js</li>
                  <li className='list-inside'>TypeScript</li>
                  <li className='list-inside'>Tailwind CSS</li>
                </ul>
              </a>
            </Link>
          </li>
        </div>
      </ul>
    </div>
    
  );
};

export default Projects;
