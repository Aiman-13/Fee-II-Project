import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const navigate = useNavigate()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [username, setUsername] = useState('Guest')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const signedIn = localStorage.getItem('nexusfilm_signedin') === 'true'
    setIsSignedIn(signedIn)
    if (signedIn) {
      setUsername(localStorage.getItem('nexusfilm_username') || 'User')
      setEmail(localStorage.getItem('nexusfilm_email') || '')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('nexusfilm_signedin')
    localStorage.removeItem('nexusfilm_username')
    localStorage.removeItem('nexusfilm_email')
    setIsSignedIn(false)
    setUsername('Guest')
    setEmail('')
  }

  const handleEditProfile = () => {
    alert('Edit profile feature coming soon!')
  }

  return (
    <div className="profile-container-wrapper">
      <div className={`profile-container ${isSignedIn ? 'profile-signed-in' : 'profile-guest'}`}>
        <button 
          onClick={() => navigate('/')} 
          className="profile-back-btn"
          aria-label="Back to home"
        >
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        
        <div className="profile-content">
          <div className="profile-left">
            <img 
              src={isSignedIn ? 'https://randomuser.me/api/portraits/men/32.jpg' : 'https://randomuser.me/api/portraits/lego/1.jpg'} 
              alt="User Avatar" 
              className="profile-avatar"
            />
            
            <div className="profile-name">{username}</div>
            
            {isSignedIn && email && (
              <div className="profile-email">{email}</div>
            )}
          </div>

          {isSignedIn && (
            <div className="profile-right">
              <div className="profile-info">
                <label>Username:</label>
                <p>{username.toLowerCase().replace(/\s+/g, '')}</p>
                <label>Member Since:</label>
                <p>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <label>Favorite Genre:</label>
                <p>Action</p>
              </div>
              
              <div className="profile-logged-in-actions">
                <button className="edit-btn logout-btn-profile" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          )}

          {!isSignedIn && (
            <div className="profile-actions">
              <button className="edit-btn" onClick={() => navigate('/login')}>
                Sign In
              </button>
              <button className="edit-btn" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
