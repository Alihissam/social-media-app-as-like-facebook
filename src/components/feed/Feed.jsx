import React from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'
import "./feed.css"
import { Posts } from "../../dummyData";

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedwrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed
