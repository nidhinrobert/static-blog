import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
        <h1>MY BLOG</h1>
        <p>Welcome to the blog of <span id='user-tag'>Nidhin</span></p>
    </div>
  )
}

export default Header