import React from "react";
import "./AvatarGroup.css";
import Avatar from "../Avatar/Avatar";
import { colorSchemes } from "../data";

export default function AvatarGroup({ count }) {
    return (
        <div className="avatar-group">
            <div className="avatar-group-left">
                <Avatar image="images/avatar1.png" />
                {count > 1 ? <>
                    <Avatar image="images/avatar2.png" />
                </> : null}
                {count > 2 ?
                    <>
                        <Avatar image="images/avatar3.png" />
                        <Avatar image="images/avatar4.png" />
                        {/* <Avatar image="images/avatar5.png" /> */}
                    </> : null
                }
                {count > 1 ? <div className="plus-5" style={colorSchemes.grey}>+5</div> : null}
            </div>
            <Avatar image="images/add_button.png" />
        </div>
    )
}