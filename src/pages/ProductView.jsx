import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import sizes from "../assets/fake-data/product-size";
import colors from "../assets/fake-data/product-color";
import Button from "../components/button/Button";
import numberWithCommas from "../utils/numberWithCommas";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

const ProductView = (props) => {
  // const location = useLocation();
  console.log("prop", props);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      slug: "",
      newPrice: "",
      categorySlug: "",
      imgDetail1: null,
      imgDetail2: null,
      imgDetail3: null,
      colors: [],
      size: [],
    };

  const [previewImg, setPreviewImg] = useState(product.imgDetail1);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.imgDetail1);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      swal({ text: "Vui lòng chọn màu sắc!", icon: "warning" });
      return false;
    }

    if (size === undefined) {
      swal({ text: "Vui lòng chọn kích cỡ!", icon: "warning" });
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.newPrice,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        swal({ title: "Thêm vào giỏ hàng thành công!", icon: "success" });
      } else {
        swal({ title: "Có lỗi sảy ra!!!", icon: "error" });
      }
    }
  };

  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.newPrice,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        dispatch(remove());
        navigate("/cart");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <>
      <div className="product__detail">
        <div className="product__detail__thumb">
          <div className="product__images__list">
            <div
              className="product__images__list__item"
              onClick={() => setPreviewImg(product.imgDetail1)}
            >
              <img src={product.imgDetail1} alt="" />
            </div>
            <div
              className="product__images__list__item"
              onClick={() => setPreviewImg(product.imgDetail2)}
            >
              <img src={product.imgDetail2} alt="" />
            </div>
            <div
              className="product__images__list__item"
              onClick={() => setPreviewImg(product.imgDetail3)}
            >
              <img src={product.imgDetail3} alt="" />
            </div>
          </div>
          <div className="product__images__main">
            <img src={previewImg} alt="" />
          </div>
        </div>

        <div className="product__info">
          <h1 className="product__info__title">{product.title}</h1>
          <div className="product__info__item">
            <span className="product__info__item__price">
              {numberWithCommas(product.newPrice)}
            </span>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">Màu sắc </div>
            <div className="product__info__item__list">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className={`product__info__item__list__item ${
                    color === item.color ? "active" : ""
                  }`}
                  onClick={() => setColor(item.color)}
                >
                  <div className={`circle bg-${item.color}`}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">Kích cỡ</div>
            <div className="product__info__item__list">
              {sizes.map((item, index) => (
                <div
                  key={index}
                  className={`product__info__item__list__item ${
                    size === item.size ? "active" : ""
                  }`}
                  onClick={() => setSize(item.size)}
                >
                  <span className="product__info__item__list__item__size">
                    {item.display}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">Số lượng</div>
            <div className="product__info__item__quantity">
              <div
                className="product__info__item__quantity__btn btn__quantity__left"
                onClick={() => updateQuantity("minus")}
              >
                <RemoveIcon sx={{ fontSize: 20 }} />
              </div>
              <div className="product__info__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product__info__item__quantity__btn btn__quantity__right"
                onClick={() => updateQuantity("plus")}
              >
                <AddIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
          <div className="product__info__btn">
            <div className="product__info__btn-left">
              <div onClick={() => addToCart()}>
                <Button>
                  <AddShoppingCartIcon style={{ marginRight: "10px" }} />
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
            <div className="product__info__btn-right">
              <div onClick={() => goToCart()}>
                <Button>Mua ngay</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
