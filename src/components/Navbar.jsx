import React from "react"
import '../styles/navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">            
            <img src="./image.png" className="navbar-logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}