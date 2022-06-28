import React from "react";
import "./sectionblog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import blog from "../../assets/fake-data/Blog";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const SectionBlog = () => {
  return (
    <div className="section__blog">
      <div className="container">
        <h1>#YODY LOVE</h1>

        <Swiper
          className="section__blog"
          slidesPerView={5}
          grabCursor
          modules={[Navigation]}
          navigation={true}
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {blog.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item__blog">
                <Link to="#">
                  <img src={item.image} alt={item.header} />
                </Link>
                <Link to="#">
                  <h3 className="item__blog__title">{item.header}</h3>
                </Link>
                <p className="item__blog__description">{item.description}</p>
                <div className="item__blog__timestamp">
                  <span
                    className="item__blog__icon"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  ></span>
                  <span className="item__blog__time">{item.time}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button >Xem thêm</Button>
    </div>
  );
};

export default SectionBlog;
