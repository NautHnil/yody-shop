import "./detail.scss";
import React from "react";
import Service from "../components/section-service/Service";
import productData from "../assets/fake-data/products";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import ProductView from "./ProductView";
import ProductCard from "../components/product-card/ProductCard";

const Detail = () => {
  const { slug } = useParams();

  let product = productData.getProductBySlug(slug);

  const relatedProducts = productData.getProductsNew(12);

  return (
    <>
      <ProductView product={product} />

      <Service />

      <div className="product body-bg">
        <div className="container">
          <h1>CÓ THỂ BẠN MUỐN MUA</h1>
          <Grid container spacing={2}>
            {relatedProducts.map((item, index) => (
              <Grid key={index} item xs={6} sm={3} md={2.4}>
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
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Detail;
