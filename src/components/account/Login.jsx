import React, { useState } from "react";
import Button from "../button/Button";
import bglogin from "../../assets/image/bglogin.jpg";
import "./login.scss";
import { Link } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };

  return (
    <div className="account" style={{ backgroundImage: `url(${bglogin})` }}>
      <div className="account__form">
        <h1 className="account__title"> ĐĂNG NHẬP</h1>
        <form action="post">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="mb-1"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span className="account__title-error">
              Thông tin đăng nhập không chính xác.
            </span>
          )}
          <div className="account__wrap">
            <p className="account__forgot">
              <Link to="#">Quên mật khẩu</Link>
            </p>
            <p className="account__direct">
              Bạn chưa là thành viên của Yody{" "}
              <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </form>
        <div>
          <Button onClick={handleSubmit} disabled={isFetching}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
