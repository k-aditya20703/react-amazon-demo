import React from 'react'
import './Menu.css'
const Menu = () => {
  return (
    <>
      <div className='menucard'>
        <div className='header'>
            <h2><i className="bi bi-person-circle"></i> Hello, Sign in</h2>
        </div>
        <div className='content'>
            <h3>Trending</h3>
            <p>Best Sellers</p>
            <p>New Releases</p>
            <p>Mover & Shakers</p> <hr></hr>
            <h3>Digital Content and Devices</h3>
            <p>Echo & Alexa</p>
            <p>Fire TV</p>
            <p>Kindle E-Readers & eBook</p>
            <p>Audible Audiobook</p>
            <p>Amazon Prime Video</p>
            <p>Amazon Prime Music</p>
        </div>
      </div>
    </>
  )
}

export default Menu
