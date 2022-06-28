import React, {  } from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import Service from "../components/section-service/Service";
import Helmet from "../components/Helmet";
import ProductNew from "../components/section-product-new/ProductNew";
import SectionBanner from "../components/section-banner/SectionBanner";
import ProductMain from "../components/section-product-main/ProductMain";
import SectionBlog from "../components/section-blog/SectionBlog";

const Home = () => {
  return (
    <>
      <Helmet title="LOOK GOOD, FELL GOOD">
        <HeroSlide />
        <Service />
        <ProductNew />
        <SectionBanner />
        <ProductMain />
        <SectionBlog />
      </Helmet>
    </>
  );
};

Home.propTypes = {};

export default Home;
