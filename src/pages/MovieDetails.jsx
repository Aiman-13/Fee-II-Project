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
