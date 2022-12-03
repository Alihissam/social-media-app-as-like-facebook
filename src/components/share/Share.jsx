import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className='share'>
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="https://i.pinimg.com/736x/e7/59/a7/e759a7a2148df44cbeda65ce4bd8e5ce.jpg" alt=""
                        className='shareProfileImg' />

                    <input placeholder='What is in your mind ' className='shareInput' />
                </div>
                <hr className="shareHr" />
                <div className="sharebottom">
                    <div className="shareOptions">
                        <div className="shareoption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className="shareoptionText">Photo or Video</span>
                        </div>
                        <div className="shareoption">
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className="shareoptionText">Tag</span>
                        </div>
                        <div className="shareoption">
                            <LocationOnIcon htmlColor='green' className='shareIcon' />
                            <span className="shareoptionText">Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareoptionText">Feelings</span>
                        </div>
                    </div>
                    <button className='sharebutton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
