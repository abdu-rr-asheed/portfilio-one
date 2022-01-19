import React from "react";
import me from "./images/me.png";
import html from "./images/html.svg";
import figma from "./images/figma.svg";
import css from "./images/css.svg";
import js from "./images/js.svg";
import reactimg from "./images/react.svg";
import sanity from "./images/sanity.png";
import tailwind from "./images/tailwind.svg";
import wordpress from "./images/wordpress.svg";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Aboutme = () => {
  return (
    <div className="m-4 flex justify-center items-center flex-wrap">
      <div className="md:w-1/2 flex justify-center items-center flex-col">
        <img src={me} alt="me" />
        <div className="flex justify-center items-center my-4">
          <a
            href=""
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2">
            <FaFacebookF fontSize={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2">
            <AiFillGithub fontSize={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2">
            <BsStackOverflow fontSize={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2">
            <FaLinkedinIn fontSize={20} />
          </a>
        </div>
      </div>
      <div className="text-white md:w-1/2">
        <div className="text-white w-full ">
          <div className="opacity-40">&lt;section&gt;</div>
          <div className="opacity-40">&emsp;&lt;h2&gt;</div>
          <div className="text-5xl text-pink-600 code-font my-2 md:ml-12 font-bold">
            Me, Myself
          </div>
          <div className="opacity-40">&emsp;&lt;&#47;h2&gt;</div>
          <div className="opacity-40">&emsp;&lt;p&gt;</div>
          <div className="text-sm text-white my-2 md:ml-12 md:w-3/4 text-justify">
            My name is Abdur Rasheed, I'm a Web Developer with a great passion
            for Developing. I describe myself as a passionate developer who
            loves coding and the web platform.
            <br />
            <br /> Improved my skills as a Front-End developer I develop
            websites and applications using HTML5, CSS3, Bootstrap5
            ,Tailwindcss, Javascript and React JS. I am familiar with developing
            layouts that provide me.
            <br />
            <br /> I'm always improving myself with each project they put in my
            hands. I am a dedicated person who pursues his dreams, hardworking
            and results oriented, I always seek to achieve my best version
          </div>
          <div className="opacity-40">&emsp;&lt;&#47;p&gt;</div>
          <div className="opacity-40">&emsp;&lt;skills&gt;</div>
          <div className="my-2 md:ml-12 flex items-center flex-wrap">
            <img src={html} alt="html" width="30" className="m-2" />
            <img src={css} alt="css" width="30" className="m-2" />
            <img src={tailwind} alt="tailwind" width="32" className="m-2" />
            <img src={js} alt="js" width="30" className="m-2" />
            <img src={wordpress} alt="wordpress" width="30" className="m-2" />
            <img src={reactimg} alt="react" width="30" className="m-2" />
            <img src={sanity} alt="sanity" width="30" className="m-2" />
            <img src={figma} alt="figma" width="30" className="m-2" />
          </div>
          <div className="opacity-40">&emsp;&lt;&#47;skills&gt;</div>
          <div className="opacity-40">&lt;&#47;section&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
