import React from "react";
import mynotesLogo from "../images/mynotes-logo.png";

function Header(){
    return (
        <header>
            <img src={mynotesLogo}></img>
            <h1>My Notes</h1>
        </header>
    )
}

export default Header;