import React from "react";

// import js from "./images/js.svg";
import {
  html,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  octobercms,
  figma,
  tailwind,
  xd,
  spline,
  blender,
} from "./";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

const Skills = () => {
  return (
    <>
      <div className="flex justify-around items-center flex-wrap overflow-x-hidden">
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper effect={"cards"} grabCursor={true}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={html}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={css}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={tailwind}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={js}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={reactimg}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper effect={"cards"} grabCursor={true}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={wordpress}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={sanity}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={octobercms}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper effect={"cards"} grabCursor={true}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={figma}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={xd}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={spline}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={blender}
                title="javaScript"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem aspernatur eos asperiores, iusto suscipit facere nesciunt doloremque sequi autem illum itaque ad consequuntur dolores nisi tempora voluptatibus, vero sed."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Skills;

const Card = ({ logo, title, description }) => (
  <>
    <div className="sm:w-[280px] w-[310px] h-[400px] bg-gray-800 p-8 rounded-xl overflow-hidden relative z-[1] border-r border-yellow-500 before:absolute before:-top-56 before:-left-56 before:w-[190px] before:h-[190px] before:rounded-none before:-z-[1] before:bg-gray-800 before:transition-all after:absolute after:-top-[72px] after:-left-[55px] after:w-[190px] after:h-[190px] after:rounded-full after:-z-[2] after:bg-yellow-600 after:bg-gradient-to-t after:from-yellow-500 after:to-pink-600 after:transition-all hover:before:-top-[72px] hover:before:-left-[55px] hover:before:rounded-full hover:after:w-[120%] hover:after:h-[120%] hover:after:-left-[10%] hover:after:-top-[10%] hover:after:rounded-none hover:after:transition-all">
      <img src={logo} alt="logo" className="w-10" />
      <div className="text-white pt-14">
        <h5 className="mb-7 text-2xl capitalize">{title}</h5>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  </>
);
