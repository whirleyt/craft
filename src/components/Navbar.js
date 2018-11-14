import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => (
    <div>
        <nav>
            <div id="topnav">
                <ul>
                    <li><Link to="/"><Icon name="user"/>Home</Link></li>
                    <li><Link to="/favorites"><Icon name="heart" />Favorites</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar