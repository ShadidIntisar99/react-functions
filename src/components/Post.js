import React from 'react'

const Post = ({ post }) => {
    return (
        <div style={{ border: '1px solid red', marginTop: '1rem' }}>
            <h1>{post.id}</h1>
            <p>{post.title}</p>
        </div>
    )
}

export default Post
