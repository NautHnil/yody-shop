import React from "react";
import { Link } from "react-router-dom";
import "./sectionbanner.scss";
import b1 from "../../assets/image/b1.webp";
import b2 from "../../assets/image/b2.webp";
import b3 from "../../assets/image/b3.webp";
const SectionBanner = () => {
  return (
    <div className="section__banner">
      <div className="container">
        <h1>#YODY</h1>
        <Link to="/bst-xuan-he">
          <img src={b1} alt="b1" />
        </Link>
        <Link to="/bst-xuan-he">
          <img src={b2} alt="b2" />
        </Link>
        <Link to="/bst-xuan-he">
          <img src={b3} alt="b3" />
        </Link>
      </div>
    </div>
  );
};

export default SectionBanner;
