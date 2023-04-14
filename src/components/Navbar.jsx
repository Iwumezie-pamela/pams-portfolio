import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: 'home',
      href: '#home',
    },
    {
      id: 2,
      text: 'about',
      href: '#about',
    },
    {
      id: 3,
      text: 'experience',
      href: '#experience',
    },
    {
      id: 4,
      text: 'projects',
      href: '#projects',
    },
    {
      id: 5,
      text: 'contacts',
      href: '#contacts',
    },
  ];

  const [nav, setNav] = useState(false);

  const closeSideBar = () => {
    setNav(false);
  };

  return (
    <header>
      <nav className='flex justify-between items-center w-full h-20 px-4 text-white bg-[#000300] fixed md:px-20 z-10'>
        <Slide direction='left' duration={1000}>
          <a href='#home'>
            <h1 className='text-5xl ml-2 font-signature text-emerald-400'>
              pamela
            </h1>
          </a>
        </Slide>

        <Slide direction='right' duration={1000}>
          <ul className='hidden md:flex'>
            {links.map(({ id, text, href }) => {
              return (
                <li
                  key={id}
                  className='px-4 text-gray-400 cursor-pointer capitalize font-medium hover:text-white ease-in-out duration-300 relative before:w-0 before:h-0.5 before:absolute before:bottom-0 before:transition-all before:duration-300 mb-0 hover:before:w-8 hover:before:bg-[#00df9a] hover:scale-105 '
                >
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </Slide>

        <Slide direction='right' duration={1000}>
          <div
            className='block md:hidden cursor-pointer pr-4 z-10 text-gray-400 hover:text-white ease-in-out duration-300'
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </Slide>

        {/* mobile menu */}
        {nav && (
          <ul className=' md:hidden flex flex-col absolute top-0 left-0 justify-center items-center w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 '>
            {links.map(({ id, text, href }) => {
              return (
                <li
                  key={id}
                  className='px-4 text-4xl py-6 text-gray-400 cursor-pointer capitalize font-medium hover:text-white ease-in-out duration-300 hover:scale-105'
                >
                  <a onClick={closeSideBar} href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
