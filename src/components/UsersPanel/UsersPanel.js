import React from "react";
import "./UsersPanel.css";
import Avatar from "../Avatar/Avatar";

export default function UsersPanel() {
    return (
        <div className="users-panel">
            <Avatar image="images/avatar1.png" online={true} />
            <Avatar image="images/avatar2.png" />
            <Avatar image="images/avatar3.png" />
            <Avatar image="images/avatar2.png" notifications={11} busy={true} />
            <Avatar image="images/avatar4.png" online={true} />
            <Avatar image="images/avatar5.png" />
            <Avatar image="images/avatar1.png" busy={true} />
            <Avatar image="images/avatar2.png" notifications={32} busy={true} />
            <Avatar image="images/avatar3.png" />
            <Avatar image="images/avatar4.png" />
        </div>
    )
}