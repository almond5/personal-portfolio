import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
  show: boolean;
  close: Function;
}

const MobileSidebar: React.FC<Props> = ({ show, close }) => {
  const isMd = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    if (isMd) close();
  }, [isMd, close]);

  return (
    <Transition show={show} as={React.Fragment}>
      <Dialog as='div' className='relative z-20' onClose={() => close()}>
        <Transition.Child
          enter='transition-opacity ease-in-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-in-out duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          as={React.Fragment}
        >
          <div className='fixed inset-0 bg-stone-400 bg-opacity-25 backdrop-blur' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <Transition.Child
            enter='transform transition ease-in-out duration-300'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-300'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
            as={React.Fragment}
          >
            <Dialog.Panel className='fixed right-0 flex h-screen w-full max-w-sm items-center justify-center bg-stone-100'>
              <button
                className='fixed top-8 right-8'
                onClick={() => close()}
              ></button>
              <ul className='flex max-h-full flex-col gap-16 text-3xl font-semibold'>
                <li>
                  <Link href='#about'>
                    <a onClick={() => close()}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href='#projects'>
                    <a onClick={() => close()}>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href='mailto:adrianhossen5@gmail.com'>
                    <a onClick={() => close()}>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href='https://github.com/adrianhossen5/'>
                    <a target='_blank' onClick={() => close()}>
                      GitHub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/in/adrian5/'>
                    <a target='_blank' onClick={() => close()}>
                      Linkedin
                    </a>
                  </Link>
                </li>
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileSidebar;
