import React, { useState } from 'react'
import { movieList } from '../data/movieData'
import { Link } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarkContext'

export default function SearchPage() {
  const [q, setQ] = useState('')
  const { isBookmarked, toggleBookmark } = useBookmarks()
  
  const results = q.trim() 
    ? movieList.filter(m => m.title.toLowerCase().includes(q.toLowerCase()))
    : []

  return (
    <div className="search-main">
      <h1>Search Movies</h1>
      
      <input 
        id="search-input"
        type="text"
        value={q} 
        onChange={e => setQ(e.target.value)} 
        placeholder="Search for movies..." 
      />
      
      <div className="search-results" id="search-results">
        {results.length === 0 && q.trim() !== '' && (
          <p style={{ color: '#b3d1ff', textAlign: 'center', width: '100%' }}>No results found.</p>
        )}
        
        {results.map(movie => (
          <div key={movie.id} className="result-card" data-movie-id={movie.id}>
            <button
              className={`bookmark-btn ${isBookmarked(movie.id) ? 'bookmarked' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                toggleBookmark(movie.id)
              }}
              aria-label={isBookmarked(movie.id) ? 'Remove bookmark' : 'Add bookmark'}
            >
              {isBookmarked(movie.id) ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffd700" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2C4.89543 2 4 2.89543 4 4V22L12 18L20 22V4C20 2.89543 19.1046 2 18 2H6Z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21L12 17L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" />
                </svg>
              )}
            </button>
            
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
            </Link>
            
            <div className="result-title">{movie.title}</div>
            <div className="result-type">Movie</div>
          </div>
        ))}
      </div>
    </div>
  )
}
