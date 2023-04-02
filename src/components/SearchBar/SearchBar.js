import React from "react";
import "./SearchBar.css";

export default function SearchBar({desktop}) {
    return (
        <div className="search-bar">
            <div className="left">
                <img src="images/search_icon.png" alt="..." />
                <p>Search Tasks</p>
            </div>
            {desktop ? <img src="images/confirm_search.png" alt="..." /> : null}
        </div>
    )
}