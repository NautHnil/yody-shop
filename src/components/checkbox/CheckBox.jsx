import React from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const inputRef = React.useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <input
      id={props.id}
      type={props.type}
      ref={inputRef}
      onChange={onChange}
      checked={props.checked}
    />
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
};

export default CheckBox;
