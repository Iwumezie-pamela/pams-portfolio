import React from 'react';
import image from '../assets/pamela.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView();
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

      <div
        ref={ref}
        className='flex flex-col justify-center max-w-screen-lg mx-auto h-full w-full md:flex-row '
      >
        {inView && (
          <motion.div
            // animate={{ y: 0 }}
            // initial={{ y: 300 }}
            // transition={{
            //   duration: 1.5,
            //   ease: 'linear',
            // }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            transition={{
              duration: 1.5,
            }}
            className=' mb-6 '
          >
            <img
              src={image}
              alt='my profile'
              className=' md:max-w-5xl rounded-2xl mx-auto w-[50%] md:w-[50%] lg:w-[45%] '
            />
          </motion.div>
        )}
        {inView && (
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <p className='max-w-md p-2 text-center md:text-left leading-7 pt-8 md:pt-0 md:max-w-[1042px] mx-auto lg:text-lg'>
              I am a Technically astute front-end developer with an experience
              in managing and configuring ReactJs. A proven track record of
              hands on experience in Html,Css and JavaScript in
              analysing,designing and implementing solutions to drive positive
              changes to optimize business processes. Seeking a challenging role
              where i can deploy my IT skill set to make transformative
              differences whilst nurturing a thriving developer career pathway
            </p>
            {/* <a
          href='#projects'
          className='md:mx-0 md:my-4 group w-fit flex items-center rounded-md border-2 border-emerald-400 py-3 px-10 my-8 capitalize hover:bg-gray-100 text-lg hover:border-white transition-all ease-in-out duration-300  hover:text-[#000300] tracking-widest cursor-pointer mx-auto'
        >
          portfolio
          <span className='group-hover:rotate-90 duration-300'>
            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
          </span>
        </a> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
