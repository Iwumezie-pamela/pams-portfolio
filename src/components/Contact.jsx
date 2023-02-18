import React from 'react'

const Contact = () => {
  return (
    <section
      id='contacts'
      className='bg-gradient-to-b from-black to-gray-900 w-full md:h-screen text-white p-4'
    >
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold relative before:h-1 before:rounded-lg before:absolute before:bottom-0 before:w-28 md:pt-6 before:bg-emerald-400 pb-2 pt-16 '>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/8091fbf0-2f47-4b2f-9620-c6c65ea41fc1'
            className='flex flex-col w-full md:w-1/2'
            method='POST'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='messsage'
              rows='10'
              placeholder='Enter your message'
              className='pl-[10px] pt-[12px] bg-transparent border-2  rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='text-white bg-emerald-400 px-8 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 hover:bg-white hover:text-black duration-300 '>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
