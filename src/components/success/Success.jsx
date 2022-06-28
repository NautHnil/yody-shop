import React from "react";
import "./success.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import confetti from "canvas-confetti";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Success = () => {
  let navigate = useNavigate();

  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  //confetti transition
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
        </p>
        <h2>Đặt hàng thành công !</h2>
        <p className="description">
          Cảm ơn quý khách đã tin tưởng và ủng hộ <span>Yody</span>
        </p>
        <p className="description">
          Nếu có bất kì thắc mắc nào xin liên hệ tổng đài: 0247 301 6661
        </p>
        <div onClick={() => navigate("/bst-xuan-he")}>
          <Button>Tiếp tục mua sắm</Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
