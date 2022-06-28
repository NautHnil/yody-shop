import React, { useState, useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import bannertop2 from "../../assets/image/bannertop2.webp";
import usericon from "../../assets/image/user-icon.svg";
import carticon from "../../assets/image/cart-icon.svg";
import searchicon from "../../assets/image/search-icon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Header = () => {
  const quantity = useSelector((state) => state.cartItems.value.length);

  console.log(quantity);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const headerNav = [
    {
      display: "XUÂN HÈ 2022",
      path: "/bst-xuan-he",
    },
    {
      display: "NỮ",
      path: "/nu",
    },
    {
      display: "NAM",
      path: "/nam",
    },
    {
      display: "TRẺ EM",
      path: "/tre-em",
    },
    {
      display: "POLO YODY",
      path: "/polo-yody",
    },
    {
      display: "BỘ SƯU TẬP",
      path: "/bst",
    },
    {
      display: "YODY LOVE",
      path: "/yody-love",
    },
    {
      display: "ĐỒNG PHỤC",
      path: "/dong-phuc",
    },
  ];

  const headerRef = useRef();

  const menuRight = useRef();

  const menuToggle = () => menuRight.current.classList.toggle("active");

  const { pathname } = useLocation();

  const activeNav = headerNav.findIndex((e) => e.path === pathname);

  return (
    <div className="header" ref={headerRef}>
      <div className="banner">
        <Link
          to="/bst-xuan-he"
          className="banner-top"
          style={{ backgroundImage: `url(${bannertop2})` }}
        ></Link>
      </div>
      <div className="container">
        <div className="header__menu">
          <div className="header__logo">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="header__menu__left" ref={menuRight}>
            <div
              className="header__menu__left__item back-icon"
              onClick={menuToggle}
              ref={menuRight}
            >
              <ArrowBackIosIcon sx={{ fontSize: 20 }} />
            </div>
            {headerNav.map((item, index) => (
              <li
                key={index}
                className={`header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
          <div className="header__menu__right">
            <div className="header__menu__right__search">
              <input type="text" placeholder="Tìm sản phẩm" />
              <button className="btn-search">
                <img src={searchicon} alt="search-icon" />
              </button>
            </div>
            <div className="header__menu__right__icon">
              <Link to="#" style={{ display: "block" }}>
                <img
                  src={usericon}
                  alt="user-icon"
                  id="basic-button"
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link to="/register">
                    <MenuItem className="main-color" onClick={handleClose}>
                      <p className="account__head">Đăng ký</p>
                    </MenuItem>
                  </Link>
                  <Link to="/login">
                    <MenuItem className="main-color" onClick={handleClose}>
                      <p className="account__head">Đăng nhập</p>
                    </MenuItem>
                  </Link>
                </Menu>
              </Link>
              <Link className="cart__icon" to="/cart">
                <img src={carticon} alt="cart-icon" />
                {quantity > 0 && (
                  <span className="cart__icon__quantity">{quantity}</span>
                )}
              </Link>
              <MenuIcon
                className="header__menu__right__icon__close"
                onClick={menuToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
