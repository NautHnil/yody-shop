import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      className="btn__main"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
