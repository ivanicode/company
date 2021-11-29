import { NavLink } from "react-router-dom";
import './navBar.css'


function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                Logo
            </div>
            <div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/offer">Our offer</NavLink></li>
                    <li><NavLink to="/clients">Clients</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;