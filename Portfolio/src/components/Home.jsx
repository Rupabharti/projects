import React from 'react'
import { FaGithub } from "react-icons/fa";
//import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

import pic from '../assets/img/Rupabharti_photo.jpg';

function Home() {
  return (
    <>
      <div name="Home"className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  '>
        <div className='flex flex-col-reverse md:flex-row'>
          {/* Text Section */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
            <span className="text-xl">Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className='text-blue-600 font-bold'
                strings={[" Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Explore my projects and learn more about my journey as a web developer. I'm actively seeking opportunities to contribute my skills and grow professionally. If you're looking for a dedicated developer to join your team, feel free to connect with me. Let's create something impactful together!
            </p>
            <br />
            <div className='flex justify-between'>
              {/* Social Icons */}
              <div className='space-y-3'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex space-x-5'>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                     <a href="https://github.com/Rupabharti/">< FaGithub /></a>
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                    <FaYoutube />
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                     <a href="www.linkedin.com/in/rupa-bharti-1a2b5a252"><FaLinkedin /></a>
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>
                    <BsTelegram />
                  </li>
                </ul>
              </div>
              {/* Currently Working On Icons */}
              <div className='space-y-3'>
                <h1>Currently working on</h1>
                <ul className='flex space-x-5'>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]'>
                    <SiMongodb />
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]'>
                    <FaNodeJs />
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]'>
                    <SiExpress />
                  </li>
                  <li className='text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]'>
                    <FaReact />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className='md:w-1/2 flex justify-center mb-12 md:mb-0'>
            <img src={pic} className="h-72 w-72 rounded-full" alt="Profile" />
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Home;
