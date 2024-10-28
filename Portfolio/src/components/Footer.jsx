import React from 'react';
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiCalling } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className='p-3' />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='items-center'>
          <ul className='flex gap-3 justify-center'>
            <li className='text-2xl rounded-full border-[4px] hover:scale-110 cursor-pointer md:text-3xl'>
              <a href="mailto:rupabharti54@gmail.com">
                <MdEmail />
              </a>
            </li>
            <li className='text-2xl rounded-full border-[4px] hover:scale-110 cursor-pointer md:text-3xl'>
              <a href="tel:+919117361986">
                <MdOutlineWifiCalling />
              </a>
            </li>
            <li className='text-2xl rounded-full border-[4px] hover:scale-110 cursor-pointer md:text-3xl'>
              <a href="https://www.linkedin.com/in/rupa-bharti-1a2b5a252" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p className='text-sm justify-center text-center mt-8'>portfolio <span className='text-blue-500'>{new Date().getFullYear()} _Rupa Bharti</span></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
