import React from "react";
import Service from "../../components/section-service/Service";
import productData from "../../assets/fake-data/productman";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView";
import ProductCardMan from "../../components/product-card-man/ProductCardMan";

const DetailMan = () => {
  const { slug } = useParams();

  let product = productData.getProductBySlug(slug);

  const relatedProducts = productData.getProductsMan(12);

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
                <ProductCardMan
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

export default DetailMan;
