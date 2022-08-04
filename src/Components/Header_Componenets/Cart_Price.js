import React from "react";
import img_product from '../../images/image-product-1-thumbnail.jpg'
import icon_delete from '../../images/icon-delete.svg'
import './Header_style.css'
export default function Price(props) {
    function Delete() {
        props.Num.Delete()
    }
    return (
        <div className="Price_Container">
            <div className="Item_Container">
                <img className="Img_Product" src={img_product} alt="Sneaker Shoes" />
                <div className="Item_Texts">
                    <p className="Item_Name">Fall Limited Edition Sneakers</p>
                    <div className="Product_Price">
                        <p>$125.00 x {props.Num.Count}</p>
                        <h5>${125 * props.Num.Count}.00</h5>
                    </div>
                </div>
                <button onClick={Delete}>
                    <img src={icon_delete} alt='icon_delete' />
                </button>
            </div>
            <div>
                <button className="Checkout_Btn">Checkout</button>
            </div>
        </div>
    )
}