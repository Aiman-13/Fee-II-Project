import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check login status on mount
    const checkLoginStatus = () => {
      const signedIn = localStorage.getItem('nexusfilm_signedin') === 'true'
      setIsLoggedIn(signedIn)
    }

    checkLoginStatus()

    // Listen for storage changes (from other tabs/windows)
    window.addEventListener('storage', checkLoginStatus)

    // Listen for custom event (from same window)
    window.addEventListener('authStateChanged', checkLoginStatus)

    return () => {
      window.removeEventListener('storage', checkLoginStatus)
      window.removeEventListener('authStateChanged', checkLoginStatus)
    }
  }, [])

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>🎬 Nexus Film</h2>
          <p>Your ultimate destination for discovering and exploring the world of cinema.</p>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/genres">Genres</Link>
              <Link to="/bookmarks">Bookmarks</Link>
              <Link to="/search">Search</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Account</h3>
            <div className="footer-links">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              ) : null}
              <Link to="/profile">Profile</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>About</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Nexus Film. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
