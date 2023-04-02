import React from "react";
import "./Counter.css";

export default function Counter({label, colorScheme}) {
    return (
        <div className="counter" style={colorScheme}>
            {label}
        </div>
    );
}