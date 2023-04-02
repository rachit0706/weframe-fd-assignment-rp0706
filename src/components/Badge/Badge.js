import React from "react";
import "./Badge.css";

export default function Badge({label, colorScheme}) {
    return (
        <div className="badge" style={colorScheme}>
            {label}
        </div>
    )
}