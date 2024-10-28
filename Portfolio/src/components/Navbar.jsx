import React, { useState } from 'react';
import photo from '../assets/img/Rupabharti_photo.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navitem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Project" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
      <div className="flex justify-between items-center py-4 h-16">
        {/* Left Section: Photo and Name */}
        <div className="flex items-center space-x-4">
          <img src={photo} alt="Rupa's photo" className="rounded-full w-12 h-12 object-cover" />
          <div>
            <h1 className="font-bold text-xl">Rupa</h1>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="ml-auto">
          <ul className="hidden md:flex space-x-8">
            {navitem.map(({ id, text }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Toggle Button for Mobile Menu */}
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu (for small screens) */}
      {menu && (
        <div className="md:hidden">
          <ul className="space-y-4">
            {navitem.map(({ id, text }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenu(false)}  // Close menu after clicking
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
