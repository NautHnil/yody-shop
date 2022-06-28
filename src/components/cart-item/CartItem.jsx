import "./cartitem.scss";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import numberWithCommas from "../../utils/numberWithCommas";
import {
  updateItem,
  removeItem,
} from "../../redux/shopping-cart/cartItemsSlide";

const CartItem = (props) => {
  const itemRef = useRef(null);

  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item);
  
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };

  const removeCartItem = () => {
    console.log("removeCartItem");
    dispatch(removeItem(item));
  };

  return (
    <div className="cart__item" ref={itemRef}>
      <div className="cart__item__image">
        <img src={item.product.image} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/bst-xuan-he/${item.slug}`}>
          {`${item.product.title} - ${item.color} - `}<span>{item.size}</span>
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(item.price)}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn btn__quantity__left "
              onClick={() => updateQuantity("-")}
            >
              <RemoveIcon sx={{ fontSize: 20 }} />
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn btn__quantity__right "
              onClick={() => updateQuantity("+")}
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
        <div className="cart__item__del">
          <DeleteIcon
            sx={{ fontSize: 25 }}
            onClick={() => removeCartItem()}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
