import React from "react";
import "./hero-slide.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";

import slider1 from "../../assets/image/slider_1.webp";
import slider2 from "../../assets/image/slider_2.webp";
import slider3 from "../../assets/image/slider_3.webp";
import slider4 from "../../assets/image/slider_4.webp";
import slider5 from "../../assets/image/slider_5.webp";

const HeroSlide = (props) => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link to="/bst-xuan-he">
            <img src={slider1} alt="slider1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/bst-xuan-he">
            <img src={slider2} alt="slider2" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/bst-xuan-he">
            <img src={slider3} alt="slider3" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/bst-xuan-he">
            <img src={slider4} alt="slider4" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/bst-xuan-he">
            <img src={slider5} alt="slider5" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

HeroSlide.propTypes = {};

export default HeroSlide;
