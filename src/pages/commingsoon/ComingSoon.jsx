import React from "react";
import comingsoon from "../../assets/image/comingsoon.png";
import "./comingsoon.scss";
const ComingSoon = () => {
  return (
    <div
      className="comingsoon"
      style={{ backgroundImage: `url(${comingsoon})` }}
    ></div>
  );
};

export default ComingSoon;
