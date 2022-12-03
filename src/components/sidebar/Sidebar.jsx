import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        < WorkOutlineIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext">Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendist">
                    {Users.map(u => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
