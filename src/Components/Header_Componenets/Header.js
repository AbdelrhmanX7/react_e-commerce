import React from "react";
import Collections from "./Collections_type";
import Active from "./Header_active";
import HeaderMenu from "./Header_Menu";
import './Header_style.css'

export default function Header() {
    return (
        <div className="Main_Haeder">
            <div className="header_items">
                <HeaderMenu />
                <h1>
                    sneakers
                </h1>
                <Collections />
            </div>
            <Active />
        </div>
    )
}