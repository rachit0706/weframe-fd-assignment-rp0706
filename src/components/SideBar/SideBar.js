import React from "react";
import "./SideBar.css";
import { menuItemData } from "../data";
import MenuItem from "../MenuItem/MenuItem";

export default function SideBar(props) {
    return (
        <div className="side-bar">
            <div className="side-bar-head">
                <p>Dashboard</p>
                <img src="images/menu_open.png" alt="Menu Open Button" className="menu-open-button" />
            </div>
            <div className="user-info">
                <div className="user-info-left">
                    <img src="images/nancy_martino.png" alt="..." />
                    <div className="user-details">
                        <p>Nancy Martino</p>
                        <p>Designer</p>
                    </div>
                </div>
                <img src="images/unfold_more.png" alt="..." style={{height: "1.1rem"}} />
            </div>
            <div className="menu-items-head">
                <p>DASHBOARDS</p>
                <img src="images/expand_less.png" alt="..." />
            </div>
            <ul>
                {menuItemData.dashboards.map(item => <li key={item.id}>
                    <MenuItem image={item.image} label={item.label} count={item.count ? item.count : null} />
                </li>)}
            </ul>
            <div className="menu-items-head">
                <p>PROJECTS</p>
                <img src="images/expand_less.png" alt="..." />
            </div>
            <ul>
                {menuItemData.projects.map(item => <li key={item.id}>
                    <MenuItem image={item.image} label={item.label} count={item.count ? item.count : null} />
                </li>)}
            </ul>
        </div>
    )
}