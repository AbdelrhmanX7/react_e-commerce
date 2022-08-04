import React from "react";
import avatar from '../../images/image-avatar.png'
import Cart from "./Header_cart";
import './Header_style.css'
export default function Active() {
    return (
        <div className="Header_Active">
            <Cart />
            <div className="avatar_container">
                <img className="avatar" src={avatar} alt='Profile_Picture'/>
            </div>
        </div>
    )
}

