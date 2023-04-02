import React from "react";
import "./Avatar.css";

export default function Avatar({image, busy, online, notifications}) {
    return (
        <div className="avatar">
            <img src={image} alt="..." />
            {busy ? <div className="busy-dot dot"></div> : null}
            {online ? <div className="online-dot dot"></div> : null}
            {notifications ? <div className="notification-dot dot">{notifications}</div> : null}
        </div>
    )
}