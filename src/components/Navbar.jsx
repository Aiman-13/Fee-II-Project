import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Check login status on mount
    const checkLoginStatus = () => {
      const signedIn = localStorage.getItem('nexusfilm_signedin') === 'true'
      const user = localStorage.getItem('nexusfilm_username') || ''
      setIsLoggedIn(signedIn)
      setUsername(user)
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

  function handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('nexusfilm_signedin')
    localStorage.removeItem('nexusfilm_username')
    localStorage.removeItem('nexusfilm_email')
    setIsLoggedIn(false)
    setUsername('')
    window.dispatchEvent(new Event('authStateChanged'))
    window.location.href = '/'
  }

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  function scrollToSection(sectionId) {
    // Check if we're on the homepage
    if (window.location.pathname !== '/') {
      // Navigate to homepage with hash
      window.location.href = '/#' + sectionId
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">🎬 Nexus Film</Link>
        </div>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <Link to="/search" className="nav-link mobile-only" onClick={() => setMenuOpen(false)}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Search
          </Link>
          <Link to="/" className="nav-link mobile-only" onClick={() => setMenuOpen(false)}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M3 12L12 3l9 9"/>
              <path d="M9 21V9h6v12"/>
            </svg>
            Home
          </Link>
          <Link to="/profile" className="nav-link mobile-only" onClick={() => setMenuOpen(false)}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"/>
            </svg>
            Profile
          </Link>
          <Link to="/bookmarks" className="nav-link mobile-only" onClick={() => setMenuOpen(false)}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            Bookmarks
          </Link>
          <a href="#now-showing" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('now-showing') }}>Now Showing</a>
          <a href="#coming-soon" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('coming-soon') }}>Coming Soon</a>
          <a href="#top-rated" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('top-rated') }}>Top Rated</a>
          <Link to="/genres" className="nav-link" onClick={() => setMenuOpen(false)}>Genres</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="nav-link btn login-btn" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link to="/signup" className="nav-link btn signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          ) : (
            <>
              <span className="user-greeting nav-link">👋 {username || 'User'}</span>
              <button onClick={handleLogout} className="nav-link btn logout-btn">Logout</button>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}
