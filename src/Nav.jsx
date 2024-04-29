import React, { useEffect, useState } from 'react';
import './Nav.css';
import NetflixLogo from './assets/images/netflix_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


  return (
    <div className="header__container">
    <div className={`nav ${show && "nav__black"}`}>
    <div className="left__container">
        <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="100"/></li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
        </ul>
    </div>
    <div className="right__container">
        <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Nav;
