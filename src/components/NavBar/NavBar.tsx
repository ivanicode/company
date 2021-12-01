import { NavLink } from "react-router-dom";
import './navBar.css';
import logo from './logo.png';


function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} width="100%" />
            </div>
            <div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/offer" className="nav-link">Our offer</NavLink></li>
                    <li><NavLink to="/clients" className="nav-link">Clients</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;