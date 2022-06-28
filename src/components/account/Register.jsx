import React, { useState } from "react";
import Button from "../button/Button";
import bglogin from "../../assets/image/bglogin.jpg";
import "./register.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(dispatch, {
      firstname,
      lastname,
      phonenumber,
      email,
      password,
      username,
    });
  };
  return (
    <div className="account" style={{ backgroundImage: `url(${bglogin})` }}>
      <div className="account__form">
        <h1 className="account__title"> ĐĂNG KÝ THÀNH VIÊN MỚI</h1>
        <form action="post">
          <div className="account__wrap__name">
            <input
              type="text"
              placeholder="Họ"
              className="account__wrap__name__fist"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tên"
              className="account__wrap__name__last"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Số điện thoại"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Địa chỉ email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="account__direct">
            Bạn đã là thành viên của Yody <Link to="/login">Đăng nhập</Link>{" "}
            ngay
          </p>
        </form>
        <Button onClick={handleSubmit} disabled={isFetching}>
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default Register;
