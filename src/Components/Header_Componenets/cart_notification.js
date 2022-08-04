import React, { useContext } from "react";
import { Data } from "../../DataContext";

export default function Notification() {
  const Count = useContext(Data);

  return (
    <div
      className="Cart_Notification"
      style={Count.Count > 0 ? { visibility: "visible" } : { visibility: 'hidden'}}
    >
      <p>{Count.Count}</p>
    </div>
  );
}
