import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ras1 from "./images/rasheed.jpg";
import ras2 from "./images/rasheed2.jpg";
import ras3 from "./images/rasheed3.jpg";
import ras4 from "./images/rasheed4.jpg";
import ras5 from "./images/rasheed5.jpg";
import ras6 from "./images/rasheed6.jpg";
import ras7 from "./images/rasheed7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

const Slider = () => {
  return (
    <div className="card-Slaider">
      <Swiper effect={"cards"} grabCursor={true} className="mySwiper">
        <SwiperSlide className="rounded-md">
          <img src={ras1} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras2} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras3} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras4} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras5} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras6} alt="1" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img src={ras7} alt="1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
