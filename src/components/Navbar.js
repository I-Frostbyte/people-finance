import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="flex justify-between mx-14 py-5 items-center">
        <Link to="/" className="">
          <div className="font-bold text-3xl text-gray-300 hover:text-[#d4af37]">
            PeFi
          </div>
        </Link>
        <div className="flex justify-around text-md font-semibold text-gray-300">
          <Link to="/" className="px-3 hover:text-[#d4af37]">
            Home
          </Link>
          <Link to="/about-us" className="px-3 hover:text-[#d4af37]">
            About Us
          </Link>
          <Link to="/services" className="px-3 hover:text-[#d4af37]">
            Services of PeFi
          </Link>
          <Link to="/network" className="px-3 hover:text-[#d4af37]">
            Network
          </Link>
          <Link to="/recruitment" className="px-3 hover:text-[#d4af37]">
            Recruitment
          </Link>
          <Link to="/contact" className="px-3 hover:text-[#d4af37]">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
