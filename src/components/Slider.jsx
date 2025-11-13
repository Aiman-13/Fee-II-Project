import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarkContext'

export default function Slider({ id, title, movies = [] }) {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { isBookmarked, toggleBookmark } = useBookmarks()

  function scrollSlider(dir = 1) {
    const el = containerRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.8) * dir
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id={id} className="movie-section my-8">
      <h2 className="section-heading text-2xl font-semibold mb-4">{title}</h2>
      <div className="slider-wrapper relative">
        <button className="slider-arrow left absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full" onClick={() => scrollSlider(-1)} aria-label="Scroll left">
          <svg width="22" height="22" fill="none" stroke="#b3d1ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div ref={containerRef} className="movie-slider flex gap-4 overflow-x-auto px-2 py-2 scroll-smooth">
          {movies.map(m => (
            <div key={m.id} className="movie-poster relative w-40 md:w-48 flex-shrink-0" data-movie-id={m.id}>
              <button
                className="bookmark-btn absolute top-2 right-2"
                aria-label={isBookmarked(m.id) ? 'Remove bookmark' : 'Add bookmark'}
                onClick={e => { e.stopPropagation(); toggleBookmark(m.id) }}
                style={{ background: 'rgba(0,0,0,0.5)', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isBookmarked(m.id) ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f6c84c" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M6 2C4.89543 2 4 2.89543 4 4V22L12 18L20 22V4C20 2.89543 19.1046 2 18 2H6Z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M19 21L12 17L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" />
                  </svg>
                )}
              </button>

              <Link to={`/movie/${m.id}`} className="block">
                <img src={m.poster} alt={m.title} className="rounded-lg shadow-lg w-full h-56 object-cover" />
                <div className="movie-title absolute bottom-2 left-2 right-2 text-center text-white bg-black/60 px-2 py-1 rounded">{m.title}</div>
              </Link>
            </div>
          ))}
        </div>

        <button className="slider-arrow right absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full" onClick={() => scrollSlider(1)} aria-label="Scroll right">
          <svg width="22" height="22" fill="none" stroke="#b3d1ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  )
}
