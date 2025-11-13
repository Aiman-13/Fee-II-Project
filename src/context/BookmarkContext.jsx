import React, { createContext, useContext, useEffect, useState } from 'react'
import { movieData } from '../data/movieData'

const BookmarkContext = createContext()

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem('bookmarkedMovies')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try { localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarks)) } catch {}
  }, [bookmarks])

  function toggleBookmark(id) {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function isBookmarked(id) {
    return bookmarks.includes(id)
  }

  function getBookmarkedMovies() {
    return bookmarks.map(id => ({ id, ...(movieData[id] || {}) })).filter(m => m.id)
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked, getBookmarkedMovies }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  return useContext(BookmarkContext)
}
