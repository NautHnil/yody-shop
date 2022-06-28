import React from "react";
import PropTypes from "prop-types";
import numberWithCommas from "../../utils/numberWithCommas";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../../redux/product-modal/productModalSlice";

const ProductCardMan = (props) => {
  const dispatch = useDispatch();

  const handleGotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Link to={`/nam/${props.slug}`} onClick={handleGotoTop}>
          <div
            className="product__thumbnail"
            onClick={() => dispatch(set(props.slug))}
          >
            {props.sale && (
              <span
                style={{ backgroundImage: `url(${props.saleTag})` }}
                className="sale"
              >
                <div className="sale__number">{props.sale}</div>
              </span>
            )}
            {props.newTag && (
              <span
                style={{ backgroundImage: `url(${props.newTag})` }}
                className="newTag"
              ></span>
            )}
            {props.hotIcon && (
              <span
                style={{ backgroundImage: `url(${props.hotIcon})` }}
                className="hotIcon"
              ></span>
            )}
            {props.heartIcon && (
              <div className="wrapp">
                <span
                  style={{ backgroundImage: `url(${props.heartIcon})` }}
                  className="wrapp__heartIcon"
                ></span>
              </div>
            )}
            <img className="product__img" src={props.image} alt={props.title} />
          </div>
          <>
            <div className="product__title">{props.title}</div>
          </>
          <div className="product__price">
            <span className="price new">
              {numberWithCommas(props.newPrice)}
            </span>
            <span className="price old">
              {props.oldPrice && numberWithCommas(props.oldPrice)}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

ProductCardMan.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  image: PropTypes.string.isRequired,
  imgDetail1: PropTypes.string,
  imgDetail2: PropTypes.string,
  sale: PropTypes.string,
  saleTag: PropTypes.string,
  newTag: PropTypes.string,
  hotIcon: PropTypes.string,
  heartIcon: PropTypes.string,
};

export default ProductCardMan;
