'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 p-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        

        {/* Site name in the center */}
        <div className=" md:block text-black font-semibold  text-3xl flex items-center justify-center text-center">
          GradNexus
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          ☰
        </button>

        {/* Navigation links on the right */}
        <div className={`md:flex md:items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ScrollLink
            to="explore"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-black rounded group cursor-pointer"
          >
            Explore
            <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-black rounded group cursor-pointer"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
          <ScrollLink
            to="footer"
            smooth
            duration={500}
            className="relative inline-block px-4 py-2 text-black rounded group cursor-pointer"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-[2px]" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
