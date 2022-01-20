import React from "react";

import { ImNewTab } from "react-icons/im";

import html from "./images/html.svg";
import figma from "./images/figma.svg";
import css from "./images/css.svg";
import js from "./images/js.svg";
import reactimg from "./images/react.svg";
import sanity from "./images/sanity.png";
import tailwind from "./images/tailwind.svg";
import wordpress from "./images/wordpress.svg";
import lonmrtimg from "./images/londonMart/lmimage.png";
import lonmrtlogo from "./images/londonMart/Logo.png";
import sharemeimg from "./images/shareme/image.png";
import sharemelogo from "./images/shareme/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={false}
        autoplay={{
          delay: 40000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper">
        <SwiperSlide>
          <Portfolio
            portImg={lonmrtimg}
            imgColor="#c5302e"
            portLogo={lonmrtlogo}
            progLang={[wordpress]}
            figmaLink="https://www.google.com"
            siteLink="https://www.google.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi
      voluptatum distinctio corporis, voluptatem quod. Exercitationem aperiam
      tempora ad ipsa libero accusantium debitis quaerat reiciendis voluptate!
      Maiores harum aliquam fugiat?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio
            portImg={sharemeimg}
            imgColor="#2c353d"
            portLogo={sharemelogo}
            progLang={[reactimg, sanity, tailwind]}
            figmaLink="https://www.google.com"
            siteLink="https://www.google.com"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi
      voluptatum distinctio corporis, voluptatem quod. Exercitationem aperiam
      tempora ad ipsa libero accusantium debitis quaerat reiciendis voluptate!
      Maiores harum aliquam fugiat?"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

const Portfolio = ({
  portImg,
  imgColor,
  portLogo,
  progLang,
  figmaLink,
  siteLink,
  description,
}) => (
  <div className="w-full grid place-items-center h-full md:mt-32 my-16">
    <div className="relative md:w-9/12 w-11/12">
      <img
        src={portImg}
        alt="londonMartImage"
        className="w-full object-cover rounded-md"
        style={{ background: `${imgColor}` }}
      />
      <img
        src={portLogo}
        alt="LondonMartLogo"
        className="w-3/12 absolute md:-left-[120px] md:-top-[100px] left-0 -top-10"
      />
      <div className="absolute bottom-0 left-0 w-fit h-fit flex justify-center items-center p-[1px] bg-gray-900 bg-opacity-50 rounded-md m-1">
        {progLang.map((item, idx) => (
          <img
            src={item}
            alt="icon"
            key={idx}
            className="md:w-[24px] w-[18px] m-2"
          />
        ))}
        {/* <img src={progLang[1]} alt="" className="md:w-[22px] w-[18px] m-2" />
        <img src={progLang[2]} alt="" className="md:w-[22px] w-[18px] m-2" /> */}
      </div>
      <div className="absolute bottom-0 right-0 w-fit h-fit flex justify-center items-center p-[1px] bg-gray-900 rounded-md m-1">
        <a href={figmaLink}>
          <img src={figma} alt="" className="md:w-[22px] w-[20px] m-2" />
        </a>
      </div>
      <a
        href={siteLink}
        className="text-white absolute md:bottom-16 md:-right-16 right-0 top-0 md:top-auto flex items-center text-xl tracking-widest"
        style={{ textShadow: "3px 3px 5px #000000" }}>
        <span className="hidden md:inline">View site</span>
        <ImNewTab
          fontSize={24}
          className="ml-2 shadow-2xl m-1 md:text-white text-black"
        />
      </a>
    </div>
    <p className="md:w-9/12 w-11/12 text-white text-base md:text-left text-center mt-4">
      {description}
    </p>
  </div>
);
