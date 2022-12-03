import userEvent from '@testing-library/user-event'
import React from 'react'
import "./closefriend.css"

const CloseFriend = ({ user }) => {
    return (
        <>
            <li className='sidebarfirend'>
                <img src={user.profilePicture}
                    alt="" className='sidbarImg' />
                <span className="sidebarFriensName">{user.username}</span>
            </li>
        </>
    )
}

export default CloseFriend
