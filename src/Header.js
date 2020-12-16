// shortcut was: rfce

import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import profile from './images/profile.png';

function Header() {
    return (
        <div className="header">
            <h1>I am a header</h1>
            <MenuIcon />
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
            <input type="text"/>
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar src={profile} alt="profile pic" />
        </div>
    )
}

export default Header
