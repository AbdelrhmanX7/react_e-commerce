import React, { useState } from "react";
import cart_icon from "../../images/icon-cart.svg";
import CartMenu from "./Cart_Menu";
import Notification from "./cart_notification";
import "./Header_style.css";
export default function Cart() {
  const [Cart_Menu, setCart_Menu] = useState(false);
  function Cart_Menu_Show() {
    setCart_Menu(!Cart_Menu);
  }
  return (
    <div className="Cart_container">
      <Notification />
      <img
        className="cart_icon"
        style={Cart_Menu ? { filter: "brightness(0%)" } : null}
        src={cart_icon}
        onClick={Cart_Menu_Show}
        alt="cart"
      />
      {Cart_Menu ? <CartMenu /> : null}
    </div>
  );
}
