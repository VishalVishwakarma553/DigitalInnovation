import { useState } from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-1 px-2 md:px-6 w-full flex justify-between items-center z-50 ">
      {/* Logo */}
      <img
        src="./Logo transparent.png"
        alt="logo"
        className="h-[50px] sm:h-[60px] md:h-[72px]"
      />

      {/* Hamburger Menu Button - Visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-10 items-center text-white font-bold lg:text-lg">
        <Link to="/"><li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          Home
        </li></Link>
        
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          About Us
        </li>
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          Testimonial
        </li>
        <Link to="/contact"><li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          Contact US
        </li></Link>
        <li className="flex gap-2">
          <img
            src="./instagram.png"
            alt="Instagram"
            className="h-[36px] lg:h-[44px] cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src="./facebook.png"
            alt="Facebook"
            className="h-[36px] lg:h-[44px] cursor-pointer hover:scale-110 transition-transform"
          />
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 right-0 h-full w-64  backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 items-start text-white font-bold text-lg pt-20 px-8">
          <li
            className="cursor-pointer hover:text-[#FF9D00] transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-[#FF9D00] transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-[#FF9D00] transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Testimonial
          </li>
          <li
            className="cursor-pointer hover:text-[#FF9D00] transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Contact US
          </li>
          <li className="flex gap-4 pt-4">
            <img
              src="./instagram.png"
              alt="Instagram"
              className="h-[44px] cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="./facebook.png"
              alt="Facebook"
              className="h-[44px] cursor-pointer hover:scale-110 transition-transform"
            />
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  md:hidden z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
