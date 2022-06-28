import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import DetailMan from "../pages/male/DetailMan";
import DetailWomen from "../pages/female/DetailWomen";
import DetailChildren from "../pages/children/DetailChildren";
import Catalog from "../pages/catalog/Catalog";
import Female from "../pages/female/Female";
import Male from "../pages/male/Male";
import Children from "../pages/children/Children";
import ComingSoon from "../pages/commingsoon/ComingSoon";
import Cart from "../pages/Cart";
import Login from "../components/account/Login";
import Register from "../components/account/Register";
import Success from "../components/success/Success";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/bst-xuan-he/:slug" element={<Detail />} />
      <Route path="/nu/:slug" element={<DetailWomen />} />
      <Route path="/nam/:slug" element={<DetailMan />} />
      <Route path="/tre-em/:slug" element={<DetailChildren />} />
      <Route path="/bst-xuan-he" element={<Catalog />} />
      <Route path="/nu" element={<Female />} />
      <Route path="/nam" element={<Male />} />
      <Route path="/tre-em" element={<Children />} />
      <Route path="/polo-yody" element={<ComingSoon />} />
      <Route path="/bst" element={<ComingSoon />} />
      <Route path="/dong-phuc" element={<ComingSoon />} />
      <Route path="/yody-love" element={<ComingSoon />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace /> : <Register />}
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default Router;
