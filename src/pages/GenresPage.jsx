import React, { useState } from 'react'
import { movieList } from '../data/movieData'
import { Link } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarkContext'

function uniqueGenres(list) {
  const set = new Set()
  list.forEach(m => (m.genres || '').split(',').map(g => g.trim()).forEach(g => g && set.add(g)))
  return ['All', ...Array.from(set).sort()]
}

export default function GenresPage() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const genres = uniqueGenres(movieList)

  const filteredMovies = selectedGenre === 'All'
    ? movieList
    : movieList.filter(m => m.genres && m.genres.includes(selectedGenre))

  return (
    <div className="genre-filter-container">
      <h1>Browse by Genre</h1>
      
      <div className="genre-buttons" id="genreButtons">
        {genres.map(genre => (
          <button
            key={genre}
            className={selectedGenre === genre ? 'active' : ''}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="movies-grid" id="moviesGrid">
        {filteredMovies.length === 0 ? (
          <p className="no-results">No movies found for this genre.</p>
        ) : (
          filteredMovies.map(movie => (
            <div key={movie.id} className="movie-poster" data-movie-id={movie.id}>
              <button
                className={`bookmark-btn ${isBookmarked(movie.id) ? 'bookmarked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleBookmark(movie.id)
                }}
                aria-label={isBookmarked(movie.id) ? 'Remove bookmark' : 'Add bookmark'}
                style={{ position: 'absolute', top: 10, right: 10, zIndex: 20, background: 'rgba(0,0,0,0.5)', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isBookmarked(movie.id) ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f6c84c" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2C4.89543 2 4 2.89543 4 4V22L12 18L20 22V4C20 2.89543 19.1046 2 18 2H6Z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 17L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" />
                  </svg>
                )}
              </button>
              <Link to={`/movie/${movie.id}`} className="block">
                <img src={movie.poster} alt={movie.title} className="rounded-lg shadow-lg w-full h-56 object-cover" loading="lazy" />
                <div className="movie-title" style={{ position: 'absolute', bottom: 8, left: 8, right: 8, textAlign: 'center', color: '#fff', background: 'rgba(0,0,0,0.7)', padding: '6px 8px', borderRadius: '4px' }}>
                  {movie.title}
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
