import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { movieData } from '../data/movieData'

export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movieData[id]

  if (!movie) {
    // fallback to home if not found
    navigate('/')
    return null
  }

  return (
    <main className="movie-details-page">
      <div className="movie-details-container">
        <div className="movie-poster-wrapper">
          <img src={movie.poster} alt={movie.title} className="movie-details-poster" />
          <a 
            href="https://www.youtube.com/watch?v=zk0-f92gg9A&list=RDzk0-f92gg9A&start_radio=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="play-button"
            aria-label="Play trailer"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="rgba(53, 51, 205, 0.9)"/>
              <path d="M24 18L42 30L24 42V18Z" fill="white"/>
            </svg>
          </a>
        </div>
        <div className="movie-info">
          <h1 className="movie-details-title">🎥 {movie.title} <span className="movie-year">({movie.year})</span></h1>
          <p className="movie-description">📜 {movie.description}</p>
          <div className="movie-meta">
            <div className="meta-item">⭐ {movie.rating}/10</div>
            <div className="meta-item">⏱️ {movie.duration}</div>
            <div className="meta-item">🎭 {movie.genres}</div>
            <div className="meta-item">🌐 {movie.languages}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
