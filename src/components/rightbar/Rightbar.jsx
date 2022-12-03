import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdaycontainer">
                    <img src="https://freepngimg.com/thumb/gift/176212-gift-gold-free-download-png-hd.png" alt=""
                        className='birthdayImg' />
                    <span className="birthdayText"><b>Pola Foster</b>
                        and <b>3 others friends</b> have a birthday today</span>
                </div>
                <img src="https://i.ytimg.com/vi/H2urhKm7Nxo/maxresdefault.jpg" alt=""
                    className='rightbarAd' />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (<>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Sialkot</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Pakistan</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">RelantionShip:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt=""
                        className='rightbarFollowingImg' />
                    <span className="rightbarFollowingName">Ali hissam</span>
                </div>
            </div>
        </>)
    }
    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
