import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div>
      <ul>
        <li><NavLink>Free Fast Delivery on prime itom</NavLink></li>
        <li><NavLink>Latest Movies & TV Shows</NavLink></li>
        <li><NavLink>Ad-free Music Listening</NavLink></li>
      </ul>
    </div>
  )
}

export default Dropdown
