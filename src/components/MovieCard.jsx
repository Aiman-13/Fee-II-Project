import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card relative w-40 md:w-48">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="rounded-lg shadow-lg w-full h-56 object-cover" />
      </Link>
      <div className="mt-2 text-sm font-medium">{movie.title}</div>
    </div>
  )
}
