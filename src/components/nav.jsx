import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle={
        color:'white'
    }
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link to='/'><span className="navbar-brand" >Router-Demo</span></Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link style={navStyle} to='/shop'><span className="nav-link">Shop</span></Link> 
                </li>
                <li className="nav-item">
                <Link style={navStyle} to='/about'><span className="nav-link">About</span></Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Nav