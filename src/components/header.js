import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <div className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/product">products</Link></li>
      <li className="nav-item"><Link to="/register">register</Link></li>
      <li className="nav-item"><Link to="/login">login</Link></li>
    </ul>
  </div>
  )
}

export default header