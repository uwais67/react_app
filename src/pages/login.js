import React from 'react'
import Layout from '../components/layout'
import "./style.css"
const Login = () => {
  return (
    <Layout>
        <div className="login">
        <h2>Login</h2>
        <form>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}

export default Login