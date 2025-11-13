import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar() {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button className={`sidebar-toggle ${isOpen ? 'active' : ''}`} id="sidebarToggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <svg width="24" height="24" fill="none" stroke="#3533cd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <Link to="/search" className="left-menu-icon" title="Search">
          <svg width="24" height="24" fill="none" stroke="#3533cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="left-menu-label">Search</span>
        </Link>

        <Link to="/" className="left-menu-icon" title="Home">
          <svg width="24" height="24" fill="none" stroke="#3533cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 12L12 3l9 9" />
            <path d="M9 21V9h6v12" />
          </svg>
          <span className="left-menu-label">Home</span>
        </Link>

        <Link to="/profile" className="left-menu-icon" title="Profile">
          <svg width="24" height="24" fill="none" stroke="#3533cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" />
          </svg>
          <span className="left-menu-label">Profile</span>
        </Link>

        <Link to="/bookmarks" className="left-menu-icon" title="Bookmarks">
          <svg width="24" height="24" fill="none" stroke="#3533cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span className="left-menu-label">Bookmarks</span>
        </Link>
      </aside>
    </>
  )
}
