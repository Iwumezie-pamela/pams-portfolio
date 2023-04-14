import React from 'react';
import comfysloth from '../assets/portfolio/comfysloth.jpg';
import pamsportfolio from '../assets/portfolio/pamsportfolio.jpg';
import quiz from '../assets/portfolio/quiz.jpg';
import backroad from '../assets/portfolio/backroad.jpg';
import cocktail from '../assets/portfolio/cocktail.jpg';
import menu from '../assets/portfolio/menu.jpg';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
  const portfolio = [
    {
      id: 1,
      image: comfysloth,
      live: 'https://comfy-sloth-e-commerce-project.netlify.app/',
      code: 'https://github.com/Iwumezie-pamela/Comfy-Sloth-React-Project',
    },
    {
      id: 2,
      image: pamsportfolio,
      live: 'https://pams-portfolio.vercel.app/',
      code: 'https://github.com/Iwumezie-pamela/pams-portfolio',
    },
    {
      id: 3,
      image: quiz,
      live: 'https://react-quiz-app-chi.vercel.app/',
      code: 'https://github.com/Iwumezie-pamela/React-quiz-app',
    },
    {
      id: 4,
      image: backroad,
      live: 'https://backroad-app.vercel.app/',
      code: 'https://github.com/Iwumezie-pamela/Backroad-App-',
    },
    {
      id: 5,
      image: cocktail,
      live: 'https://react-cocktail-project-two.vercel.app/',
      code: 'https://github.com/Iwumezie-pamela/React-cocktail-project',
    },
    {
      id: 6,
      image: menu,
      live: 'https://react-menu-gold.vercel.app/',
      code: 'https://github.com/Iwumezie-pamela/react-menu',
    },
  ];
  return (
    <section
      id='projects'
      className='bg-gradient-to-b from-black to-gray-900 w-full md:h-screen text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <Slide direction='left'>
          {' '}
          <div className='pb-8'>
            <p className='text-4xl font-bold relative before:h-1 before:rounded-lg before:absolute before:bottom-0 pb-2 pt-16 before:w-28 md:pt-8  before:bg-emerald-400'>
              Portfolio
            </p>
            <p className='py-2 text-lg'>Check out some of my work right here</p>
          </div>
        </Slide>

        <Slide direction='right'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4  px-4 sm:px-0'>
            {portfolio.map(({ id, image, live, code }) => {
              return (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img
                    src={image}
                    alt=''
                    className='rounded-md duration-200 hover:scale-105'
                  />
                  <div className='flex items-center justify-center'>
                    <a
                      href={live}
                      target='_blank'
                      className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    >
                      Demo
                    </a>

                    <a
                      href={code}
                      target='_blank'
                      className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    >
                      Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Projects;
