import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('nexusfilm_signedin', 'true')
    localStorage.setItem('nexusfilm_username', username || 'User')
    navigate('/')
  }

  return (
    <div className="signup-layout">
      <div className="signup-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            value={username} 
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password} 
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
