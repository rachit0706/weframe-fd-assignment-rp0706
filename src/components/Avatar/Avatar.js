import React from "react";
import "./Avatar.css";

export default function Avatar({image, busy, online, notifications}) {
    return (
        <div className="avatar">
            <img src={image} alt="..." />
            
        </div>
    )
}