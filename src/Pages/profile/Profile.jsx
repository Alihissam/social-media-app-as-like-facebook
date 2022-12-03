import React from 'react'
import "./profile.css"
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="https://i.pinimg.com/550x/89/82/05/8982051a8704aa47b59f29bba7f2c9b2.jpg" alt=""
                                className='profileCoverImg' />
                            <img src="https://i.pinimg.com/736x/d0/d2/cf/d0d2cffebad5746b1d86d3976cd8b9c8.jpg" alt=""
                                className='profileUserImg' />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Hissam Ali</h4>
                            <span className="profileInfoDesc"> Hello my boss!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
