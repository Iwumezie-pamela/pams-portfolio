import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} /> LinkedIn
        </>
      ),
      href: 'https://www.linkedin.com/in/iwumezie-pamela-b090ba225/',
      style: 'rounded-br-md',
    },

    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} /> Github
        </>
      ),
      href: 'https://github.com/Iwumezie-pamela',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={25} /> Mail
        </>
      ),
      href: 'mailto:iwumeziep@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={25} /> Resume
        </>
      ),
      href: '/pams_resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden md:flex flex-col top-[55%] right-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={
                'flex justify-between items-center w-40  h-14 px-4  mr-[-100px]  hover:rounded-md duration-300 hover:bg-emerald-400' +
                ' ' +
                style
              }
            >
              <a
                href={href}
                className='flex justify-between w-full items-center text-white'
                target='_blank'
                rel='noreferrer'
                download={download}
              >
                {child}
              </a>
            </li>
          );
        })}
        <div className='relative flex-col items-center justify-center'>
          <div className='after:block after:bg-emerald-400 after:w-[1px] after:h-28 after:mx-auto after:my-2'></div>
        </div>
      </ul>
    </div>
  );
};

export default Socials;
