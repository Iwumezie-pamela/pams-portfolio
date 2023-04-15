import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      id='home'
      className='bg-gradient-to-b from-black to-gray-900 md:px-20 text-white h-screen w-full'
    >
      {inView && (
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
          className='max-w-screen-md flex flex-col h-full w-full items-center justify-center  md:items-start'
        >
          <h1 className='text-xl uppercase text-center md:text-left tracking-wide font-bold pb-4'>
            👋 Hello there, i'm
            <span className='text-emerald-400 font-extrabold'> Pamela</span>
          </h1>
          <h2 className=' font-extrabold text-center uppercase text-2xl pb-4 md:text-5xl lg:text-6xl '>
            A frontend developer
          </h2>
          <p className='text-base md:text-lg text-center md:text-left max-w-sm  md:max-w-2xl text-gray-200 pb-2 md:mx-0 px-2 mx-auto '>
            I'm a creative developer devoted to crafting user friendly and
            interactive frontend websites focused on simplicity and purpose.
          </p>
          <div className='flex items-center px-2 pb-3'>
            <p className='text-base lg:text-lg mr-1'>I'm proficient in </p>
            <TypeAnimation
              sequence={[
                '< Html />',
                2000,
                '< Css />',
                2000,
                '< Js />',
                2000,
                '< Tailwind Css />',
                2000,
                '< React js />',
                2000,
                '< Git & Github />',
                2000,
                '< Firebase />',
                2000,
                '< Styled Component />',
                2000,
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              className='text-emerald-400 inline-block text-lg lg:text-xl font-bold'
            />
          </div>

          <div className='px-2'>
            <a
              href='#contacts'
              className='group w-fit flex items-center rounded-md border-2 border-emerald-400 py-3 px-4  my-2 capitalize hover:bg-gray-100 text-lg hover:border-white transition-all ease-in-out duration-300  hover:text-[#000300] tracking-widest cursor-pointer'
            >
              Lets connect
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
