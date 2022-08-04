import React, { useContext } from "react";
import { Data } from "../../DataContext";
import Price from "./Cart_Price";

export default function CartMenu() {
  const Get_Count = useContext(Data);

  return (
    <div className="Cart_Menu">
      <div className="Menu_Header">
        <h3>Cart</h3>
      </div>
      <div className="Menu_Body">
        {Get_Count.Count > 0 ? <Price Num={Get_Count}/> : <h4>Your cart is empty.</h4>}
      </div>
    </div>
  );
}
