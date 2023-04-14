import React from 'react';
import image from '../assets/pamela.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <section
      id='about'
      className='bg-gradient-to-b from-black to-gray-900 w-full md:h-screen text-white p-4'
    >
      <h1
        className='block text-center capitalize font-bold text-4xl md:text-5xl  relative before:h-1 before:rounded-lg before:absolute before:bottom-0  pb-2 pt-16 before:w-28 md:pt-20 before:bg-emerald-400 mb-12 
      '
      >
        about me
      </h1>

      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full w-full md:flex-row '>
        <Slide direction='left'>
          <div className=' mb-6 '>
            <img
              src={image}
              alt='my profile'
              className=' md:max-w-5xl rounded-2xl mx-auto w-[50%] md:w-[50%] lg:w-[45%] '
            />
          </div>
        </Slide>
        <Slide direction='right'>
          <div>
            <p className='max-w-md p-2 text-center md:text-left leading-7 pt-8 md:pt-0 md:max-w-[1042px] mx-auto lg:text-lg'>
              I am a Technically astute front-end developer with an experience
              in managing and configuring ReactJs. A proven track record of
              hands on experience in Html,Css and JavaScript in
              analysing,designing and implementing solutions to drive positive
              changes to optimize business processes. Seeking a challenging role
              where i can deploy my IT skill set to make transformative
              differences whilst nurturing a thriving developer career pathway
            </p>
            <a
              href='#projects'
              className='md:mx-0 md:my-4 group w-fit flex items-center rounded-md border-2 border-emerald-400 py-3 px-10 my-8 capitalize hover:bg-gray-100 text-lg hover:border-white transition-all ease-in-out duration-300  hover:text-[#000300] tracking-widest cursor-pointer mx-auto'
            >
              portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </a>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;
