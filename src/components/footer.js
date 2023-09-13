import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2023 Inc corporation</p>
      <ul className="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">privacy policy</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default footer