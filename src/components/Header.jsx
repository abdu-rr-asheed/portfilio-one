import React from "react";
import { FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center p-4 text-white md:text-2xl text-base">
      <div className="text-white uppercase font-semibold flex flex-wrap justify-center">
        <span className="text-yellow-500">Abdur</span>&nbsp;
        <span className="text-pink-600">Rasheed</span>
      </div>
      <div className="flex items-center">
        <FaSun className="mx-6" color="#FF8906" />
        <a
          href="https://www.google.com"
          target="_blank"
          className="px-6 py-1 rounded-3xl mx-2 bg-gradient-to-r from-yellow-500 to-rose-400 hover:bg-gradient-to-r hover:from-rose-400 hover:to-yellow-500 transition-all duration-300 ease-linear uppercase font-semibold">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
