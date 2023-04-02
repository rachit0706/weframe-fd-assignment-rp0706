import React from "react";
import "./TaskTag.css";

export default function TaskTag({label}) {
    return (
        <div className="task-tag">
            {label}
        </div>
    )
}