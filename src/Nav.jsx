import React, { useEffect, useState } from 'react';
import './Nav.css';
import NetflixLogo from './assets/images/netflix_logo.png';
import NetflixAvatar from './assets/images/Netflix-avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, []);


  return (
    // <div className="header__container">
    <div className={`header__container nav ${show && "nav__black"}`}>
    {/* <div className="nav"> */}
    <img 
            className="nav__logo"
            src={NetflixLogo} alt="Netflix Logo"
            width="100"            
            />
    <div className="left__container">
        <ul>
            {/* <li><img 
            className="nav__logo"
            src={NetflixLogo} alt="Netflix Logo"
            width="100"            
            /></li> */}
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
    </div>
    <div className="right__container">
        <ul>
            <li><SearchIcon/></li>
            <li>Kids</li>
            <li><NotificationsNoneIcon/></li>
            <li><img
            className="nav__avatar" 
            src={NetflixAvatar} alt="Netflix Avatar"
            width="25" 
            /></li>
            <li><ArrowDropDownIcon /></li>
        </ul>
    </div>
    </div>
    // </div>
  )
}
export default Nav;
