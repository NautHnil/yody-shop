import React from "react";
import "./productnew.scss";
import { Link, useNavigate } from "react-router-dom";
import bannermid from "../../assets/image/banner_hangngay_1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import productData from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import Button from "../button/Button";

const ProductNew = () => {
  const totalProduct = productData.getAllProductsNew().length;
  const navigate = useNavigate();
  return (
    <div className="product">
      <div className="container">
        <h1>EVERY WEAR</h1>
        <div>
          <Link to="/bst-xuan-he">
            <img className="mb-1" src={bannermid} alt="bannermid" />
          </Link>
        </div>
        <Swiper
          slidesPerView={6}
          grabCursor
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {productData.getProductsNew(12).map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                title={item.title}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                image={item.image}
                slug={item.slug}
                sale={item.sale}
                saleTag={item.saleTag}
                newTag={item.newTag}
                hotIcon={item.hotIcon}
                heartIcon={item.heartIcon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div onClick={() => navigate("bst-xuan-he")}>
          <Button>Xem tất cả {totalProduct} sản phẩm</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
