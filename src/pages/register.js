import React from 'react'
import Layout from '../components/layout'
import "./style.css"
const Register = () => {
  return (
    <Layout>
        <div className="register">
      <h2>Register</h2>
      <form >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </Layout>
  )
}

export default Register