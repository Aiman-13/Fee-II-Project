import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // In this demo, sign up behaves like sign in
    localStorage.setItem('nexusfilm_signedin', 'true')
    localStorage.setItem('nexusfilm_username', username || 'User')
    localStorage.setItem('nexusfilm_email', email)
    window.dispatchEvent(new Event('authStateChanged'))
    navigate('/')
  }

  return (
    <div className="signup-layout">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            value={username} 
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input 
            type="email"
            placeholder="Email"
            value={email} 
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password} 
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
