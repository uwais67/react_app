import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">products</a></li>
      <li className="nav-item"><a href="#">register</a></li>
      <li className="nav-item"><a href="#">login</a></li>
    </ul>
  </div>
  )
}

export default header