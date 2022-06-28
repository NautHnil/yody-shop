import React, { useState } from "react";
import "./productmain.scss";
import Grid from "@mui/material/Grid";
import productData from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import Button from "../button/Button";

const ProductMain = () => {
  const [type, setType] = useState("CAFE");

  const [loadMore, setLoadMore] = useState(46);

  const showmore = () => {
    if (loadMore < productData.getAllProductsNew().length) {
      setLoadMore((prev) => prev + 3);
    } else {
      setLoadMore(productData.getAllProductsNew().length);
    }
  };

  const tabs = [
    "CAFE",
    "MẮT CHIM",
    "COOLMAX",
    "AIRY COOL",
    "VỎ HÀU",
    "COOL COMPACT",
    "AIRMAX",
    "ASKIN",
  ];

  return (
    <div className="product body-bg">
      <div className="container">
        <h1>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h1>
        <div className="wrap__product__btn">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`product__btn ${tab === type ? "active__tab" : ""}`}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Grid container spacing={2}>
          {productData.getProductsNew(loadMore).map((item, index) => (
            <Grid key={index} item xs={6} sm={3} md={2.4}>
              <ProductCard
                title={item.title}
                slug={item.slug}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                image={item.image}
                sale={item.sale}
                saleTag={item.saleTag}
                newTag={item.newTag}
                hotIcon={item.hotIcon}
                heartIcon={item.heartIcon}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div onClick={showmore}>
        <Button>Xem thêm</Button>
      </div>
    </div>
  );
};

export default ProductMain;
