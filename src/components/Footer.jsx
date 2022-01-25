import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-wrap bg-gray-900">
      <div className="h-12 w-12 flex items-center justify-center z-20 mr-2 bg-gray-800 text-yellow-500 hover:bg-white hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear">
        <svg
          width="38"
          height="17"
          viewBox="0 0 46 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.3389 4.37256L5.57129 25H0.119629L9.36523 0.117188H12.8345L12.3389 4.37256ZM17.9614 25L11.1768 4.37256L10.6299 0.117188H14.1333L23.4302 25H17.9614ZM17.6538 15.7373V19.7534H4.51172V15.7373H17.6538Z"
            fill="#FF8906"
          />
          <path
            d="M25.7373 0.117188H35.0171C36.9198 0.117188 38.5547 0.402018 39.9219 0.97168C41.3005 1.54134 42.36 2.38444 43.1006 3.50098C43.8411 4.61751 44.2114 5.9904 44.2114 7.61963C44.2114 8.95264 43.9836 10.0977 43.5278 11.0547C43.0835 12.0003 42.4512 12.7922 41.6309 13.4302C40.8219 14.0568 39.8706 14.5581 38.7769 14.9341L37.1533 15.7886H29.0869L29.0527 11.7896H35.0513C35.9513 11.7896 36.6976 11.63 37.29 11.311C37.8825 10.992 38.3268 10.5477 38.623 9.97803C38.9307 9.40837 39.0845 8.74756 39.0845 7.99561C39.0845 7.19808 38.9364 6.50879 38.6401 5.92773C38.3439 5.34668 37.8939 4.90234 37.29 4.59473C36.6862 4.28711 35.9285 4.1333 35.0171 4.1333H30.8643V25H25.7373V0.117188ZM39.6484 25L33.9746 13.9087L39.3921 13.8745L45.1343 24.7607V25H39.6484Z"
            fill="#F25F4C"
          />
        </svg>
      </div>
      <h2 className="text-pink-600 text-2xl font-bold">Thank You</h2>
      <div className="flex justify-center items-center my-4">
        <a
          href=""
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <FaFacebookF fontSize={20} />
        </a>
        <a
          href=""
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out duration-100 hover:-translate-y-1 hover:scale-110">
          <AiFillGithub fontSize={20} />
        </a>
        <a
          href=""
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <BsStackOverflow fontSize={20} />
        </a>
        <a
          href=""
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <FaLinkedinIn fontSize={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;