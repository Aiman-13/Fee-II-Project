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
    <main className="container py-8">
      <div className="movie-backdrop rounded-lg p-6" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${movie.backdrop || movie.poster})`, backgroundSize: 'cover' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <img src={movie.poster} alt={movie.title} className="rounded-lg shadow-lg w-full md:w-auto" />
          <div className="md:col-span-2 text-white">
            <h1 className="text-3xl font-bold">🎥 {movie.title} <span className="text-base">({movie.year})</span></h1>
            <p className="mt-2">📜 {movie.description}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>⭐ {movie.rating}/10</div>
              <div>⏱️ {movie.duration}</div>
              <div>🎭 {movie.genres}</div>
              <div>🌐 {movie.languages}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
