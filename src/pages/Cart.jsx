import React, { useState, useEffect } from "react";
import "./cart.scss";
import CartItem from "../components/cart-item/CartItem";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import checkout_logo from "../assets/image/logo.webp";
import spinner from "../assets/image/spinner.svg";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import Helmet from "../components/Helmet";
import { userRequest } from "../requestMethods";

const KEY =
  "pk_test_51Ky4hNCuDKdE7h3ed6klLHawAHCKDM0IjQCGF1wKcADzSf4K63WczLAlhU18e1Tw90Dho8zhK8AdFp9bmkNPKz8c00TNnhlh4r";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalPrice,
        });
        navigate("/success", {
          data: res.data,
          product: cartItems,
        });
      } catch {
        console.log("error");
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cartItems, totalPrice, navigate]);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {stripeToken ? (
              <img src={spinner} alt="spinner" className="spinner" />
            ) : (
              <StripeCheckout
                stripeKey={KEY}
                token={onToken}
                name="Yody Shop"
                image={checkout_logo}
                shippingAddress
                billingAddress
                currency="VND"
                description={`Tổng thanh toán của bạn là: ${numberWithCommas(
                  Number(totalPrice)
                )} `}
                amount={totalPrice}
              >
                <Button size="block">Đặt hàng</Button>
              </StripeCheckout>
            )}

            <Link to="/bst-xuan-he">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
