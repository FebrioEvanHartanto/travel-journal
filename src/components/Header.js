import React from "react"
import Logo from "../images/logo.png"

function Header () {
    return (
        <div className="header">
            <img src={Logo} alt="Logo"></img>
            <h3>My Travel Journal</h3>
        </div>
    )
}

export default Header