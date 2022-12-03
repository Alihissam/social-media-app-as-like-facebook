import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like)
    const [isliked, setIsliked] = useState(false);

    const likehandler = () => {
        setLike(isliked ? like - 1 : like + 1)
        setIsliked(!isliked)
    }

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=""
                            className='postProfileImg' />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt=""
                        className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="https://cdn.vectorstock.com/i/preview-1x/77/11/thumb-up-symbol-finger-up-icon-vector-23867711.jpg" alt=""
                            className='likeIcon' onClick={likehandler} />
                        <img src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-live-love-png-1.png" alt=""
                            className='likeIcon' onClick={likehandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
