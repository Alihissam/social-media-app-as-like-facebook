import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from "../../images/profile.jpg"

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbar-left">
                <span className="topbar-left-logo">
                    Social App
                </span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <SearchIcon className='searchicon' />
                    <input type="text"
                        placeholder='search fro friends post or video'
                        className='searchinput' />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-links">Homepage</span>
                    <span className="topbar-links">TimeLine</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <PersonIcon />
                        <span className='topbariconsBadge'>1</span>
                    </div>
                    <div className="topbar-icons-item">
                        <ChatIcon />
                        <span className='topbariconsBadge'>1</span>
                    </div>
                    <div className="topbar-icons-item">
                        <NotificationsIcon />
                        <span className='topbariconsBadge'>1</span>
                    </div>
                </div>
                <img src={profile} alt="profile" className='profile-image' />
            </div>
        </div>
    )
}

export default Topbar
