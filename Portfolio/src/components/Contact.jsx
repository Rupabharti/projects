import React from 'react';

function Contact() {
  return (
    <>
      <div  name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-700 pb-3'>Contact</h1>
        <div className='flex items-center flex-col mt-20'>
          <form className='bg-slate-200 w-full sm:w-96 py-14 px-8 sm:px-12 shadow-sm transition scale-110 rounded-lg hover:shadow-2xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Full Name</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='name'
                placeholder='Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email'
                id='email'
                placeholder='Email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Message</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                placeholder='Message'
                rows='4'
              ></textarea>
            </div>
            <button className='hover:scale-105 bg-blue-500 rounded py-2 px-4 text-white w-full transition-transform duration-300'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
