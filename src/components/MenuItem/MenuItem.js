import React from "react";
import Counter from "../Counter/Counter";
import { colorSchemes } from "../data";
import "./MenuItem.css";

export default function MenuItem({image, label, count}) {
    return (
        <div className="menu-item">
            <div className="menu-item-left">
                <img src={image} alt="..." className="menu-item-icon" />
                <p>{label}</p>
            </div>
            {count ? <Counter label={count} colorScheme={colorSchemes.blue} /> : null}
        </div>
    )
}