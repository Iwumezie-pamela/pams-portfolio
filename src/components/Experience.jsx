import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import styled from '../assets/styled.png'
import git from '../assets/git.png'
import github from '../assets/github.png'

const Experience = () => {
  const techStacks = [
    {
      id: 1,
      image: html,
      name: 'html',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      image: css,
      name: 'css',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      image: javascript,
      name: 'javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      image: react,
      name: 'reactjs',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      image: tailwind,
      name: 'tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      image: styled,
      name: 'styled',
      style: 'shadow-white',
    },
    {
      id: 7,
      image: git,
      name: 'git',
      style: 'shadow-orange-500',
    },
    {
      id: 8,
      image: github,
      name: 'github',
      style: 'shadow-white',
    },
  ]

  return (
    <section
      id='experience'
      className='bg-gradient-to-b from-black to-gray-900 w-full md:h-screen text-white p-4 '
    >
      <div className='max-w-screen-lg  p-4 mx-auto  flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold relative before:h-1 before:rounded-lg before:absolute before:bottom-0 before:w-28 md:pt-8  before:bg-emerald-400 pb-2 pt-16  '>
            Tech Stacks
          </p>
          <p className='py-6 text-lg'>These are the technologies i work with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techStacks.map(({ id, image, name, style }) => {
            return (
              <div
                key={id}
                className={
                  'group shadow-md hover:scale-105 duration-500 py-2 rounded-lg' +
                  ' ' +
                  style
                }
              >
                <img
                  src={image}
                  alt='html'
                  className='group-hover:rotate-180 ease-in-out transition-all duration-500 w-20 mx-auto'
                />
                <p className='mt-4 text-[.6rem] md:text-[1rem]  uppercase'>
                  {name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
