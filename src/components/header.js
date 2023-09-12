import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">About</a></li>
      <li className="nav-item"><a href="#">Services</a></li>
      <li className="nav-item"><a href="#">Contact</a></li>
    </ul>
  </div>
  )
}

export default header