import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="LinkHomePage">HomePage</NavLink></li>
                    <li><NavLink to="/about">About me page</NavLink></li>
                    <li><NavLink to="/discover">Discover movies page</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
