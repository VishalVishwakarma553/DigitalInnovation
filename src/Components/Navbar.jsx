import { useState } from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 pt-[57.8px] pl-2 md:pl-[98px] pr-[19px] w-full flex justify-between z-50">
      {/* Logo */}
      <div className="bg-[#4B2C38] flex justify-center items-center h-[50px] sm:h-[60px] md:h-[64px] md:w-[241px] rounded-[5px] ">
      <img
        src="./Logo transparent.png"
        alt="logo"
        className="w-[182px]"
      />
      </div>
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
      <ul className="hidden md:flex gap-4 text-[14.3px] font-[400] items-center text-white pr-2 font-poppins">
        <Link to="/"><li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          Home
        </li></Link>
        
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          About Us <span>Testimonial</span>
        </li>
        <Link to="/contact"><li className="cursor-pointer hover:text-[#FF9D00] transition-colors">
          Contact US
        </li></Link>
        <li className="flex gap-2">
          <img
            src="./Vector (2).png"
            alt="Instagram"
            className="h-[22px] cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src="./Vector (3).png"
            alt="Facebook"
            className="h-[22px] cursor-pointer hover:scale-110 transition-transform"
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
          <Link to="/"><li
            className="cursor-pointer text-black transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Home
          </li></Link>
          <li
            className="cursor-pointer text-black transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            About Us
          </li>
          <li
            className="cursor-pointer text-black transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Testimonial
          </li>
          <Link to={"/contact"}><li
            className="cursor-pointer text-black transition-colors w-full py-2"
            onClick={toggleMenu}
          >
            Contact US
          </li></Link>
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
