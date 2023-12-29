import React from 'react'
import Post from './Post'
import './Posts.css'
const Posts = () => {
  return (
    <div className='posts'>
      <div className='postText'>
        <h4>Popular Posts</h4></div>
      <Post />
    </div>
  )
}

export default Posts