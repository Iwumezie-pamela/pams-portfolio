import React from 'react'
// import Typed from 'react-typed'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
  return (
    <section
      id='home'
      className='bg-gradient-to-b from-black to-gray-900 md:px-20 text-white h-screen w-full'
    >
      <div className='max-w-screen-md flex flex-col h-full w-full items-center justify-center  md:items-start'>
        <h1 className='text-xl uppercase text-center md:text-left tracking-wide font-bold pb-4'>
          👋 Hello there, i'm
          <span className='text-emerald-400 font-extrabold'> Pamela</span>
        </h1>
        <h2 className=' font-extrabold text-center uppercase text-2xl pb-4 md:text-5xl lg:text-6xl '>
          A frontend developer
        </h2>
        <p className='text-md md:text-lg text-center md:text-left max-w-sm  md:max-w-2xl text-gray-200 pb-4 md:mx-0 p-2 mx-auto '>
          I'm a creative developer devoted to crafting user friendly and
          interactive frontend websites focused on simplicity and purpose.
        </p>
        <div className='flex justify-center md:justify-start'>
          <p className='text-lg text-gray-200 pb-6 tracking-[.05rem] text-center md:text-left'>
            I'm proficient in
            <span className='font-bold text-emerald-400 md-text-5xl sm-text-4xl text-xl pl-2 z-100'>
              Reactjs
            </span>
          </p>
          {/* <Typed
            className='font-bold text-emerald-400 md-text-5xl sm-text-4xl text-xl pl-2 z-100'
            strings={['HTML', 'CSS', 'JAVASCRIPT', ' REACTJS', 'GIT']}
            typeSpeed={120}
            backSpeed={140}
            cursorChar='/>'
            loop
          /> */}
        </div>

        <div className=''>
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
      </div>
    </section>
  )
}

export default Home
