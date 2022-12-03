import React from 'react'
import "./online.css"

const Online = ({ user }) => {
    return (
        <>
            <li className="rightBarFriend">
                <div className="rightbarprofileImgContainer">
                    <img src={user.profilePicture} alt=""
                        className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUser">{user.username}</span>
            </li>
        </>
    )
}

export default Online
