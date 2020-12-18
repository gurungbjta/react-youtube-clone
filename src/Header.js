// shortcut was: rfce
import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import profile from './images/profile.png';
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch, setinputSearch] = useState("")
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
                </Link> 
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={e => setinputSearch(e.target.value)} placeholder="Search" type="text"/>
                {/* /search/${inputSearch takes you to search/{whatever you type in inputSearch field} */}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
                
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src={profile} alt="profile pic" />
            </div>
        </div>
    )
}

export default Header
