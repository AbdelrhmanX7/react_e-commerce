import React, { useContext, useState } from "react";
import './Body_Componetens.css'
import increase_btn from '../../images/icon-plus.svg'
import decrease_btn from '../../images/icon-minus.svg'
import cart_Icon from '../../images/icon-cart.svg'
import { Data } from "../../DataContext";

export default function ProductInfo() {
    const Add_Items = useContext(Data)
    const [Count, SetCount] = useState(0)

    function Increase() {
        SetCount(Count + 1)
    }

    function Decrease() {
        if(Count > 0) { SetCount(Count - 1)}
    }

    function Add() {
        Add_Items.add_Item(Count)
    }
    return(
        <div className="Body_Container">
                <p className="Company_Name">Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className="Product_Desc">These low-profile sneakers are your perfect vasual wear companion. Featuring a durable rubber outer solem they'll withstand everything the weather can offer</p>
                <div className="All_Price">
                    <div className="Discount_box">
                        <h3>$125.00</h3>
                        <p>50%</p>
                    </div>
                    <h3 className="Real_Price">$250.00</h3>
                </div>
                <div className="buy_product">
                    <div className="buy_count">
                        <div onClick={Decrease} className="test" >
                            <img className="decrease" src={decrease_btn} alt='decrease' />
                        </div>
                        <h4>{Count}</h4>
                        <div onClick={Increase} className="test">
                            <img className="increase" src={increase_btn} alt='increase' />
                        </div>
                    </div>
                    <button onClick={Add} className="body_btn"><img className="cart_btn" src={cart_Icon} alt='cart_icon' /> Add to cart</button>
                </div>
            </div>
    )
}