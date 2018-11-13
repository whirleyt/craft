import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <div>
        <nav>
            <div id="topnav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar
