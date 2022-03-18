import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [showmenu, setshowmenu] = useState(false)
  return (
    <div>
        <div className="navbar__container padding--medium">
            <div className="navbar__heading-container">
                <div className="navbar__title">
                    <Link to="/">QuizzShow</Link>
                </div>
                <div onClick={()=> setshowmenu(prev => !prev)} className="navbar__menu">
                    { !showmenu ? <i className="fas fa-bars icon__menu"></i> : <i className="fas fa-times icon__times"></i>}
                    
                </div>
            </div>
            <ul className={`navbar__list-container ${showmenu ? 'navbar__display': null}`}>
                <li className="navbar__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/category">Explore</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar