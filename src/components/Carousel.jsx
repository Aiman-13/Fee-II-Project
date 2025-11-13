import React, { useCallback, useEffect, useRef, useState } from 'react'
import { movieList } from '../data/movieData'
import { Link, useNavigate } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarkContext'

export default function Carousel() {
  const total = movieList.length
  const visible = 5
  const [startIndex, setStartIndex] = useState(0)
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const navigate = useNavigate()
  const { isBookmarked, toggleBookmark } = useBookmarks()

  const render = useCallback(() => {
    const radiusX = 350
    const radiusY = 140
    const stepAngle = Math.PI / (visible - 1)

    for (let i = 0; i < total; i++) {
      const card = cardsRef.current[i]
      if (!card) continue
      const relativeIndex = (i - startIndex + total) % total
      if (relativeIndex < visible) {
        const angle = stepAngle * relativeIndex
        const x = radiusX * Math.cos(angle)
        const y = radiusY * Math.sin(angle)
        const scale = 0.8 + 0.2 * Math.sin(angle)
        card.style.opacity = '1'
        card.style.transform = `translate(calc(50% + ${x - 150}px), ${180 - y}px) scale(${scale})`
        card.style.zIndex = String(Math.round(100 + y))
        card.style.pointerEvents = 'auto'
      } else {
        card.style.opacity = '0'
        card.style.pointerEvents = 'none'
        card.style.zIndex = '0'
      }
    }
  }, [startIndex, total])

  useEffect(() => {
    render()
    const onResize = () => render()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [render])

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setStartIndex(s => (s + 1) % total), 3500)
    return () => clearInterval(id)
  }, [total])

  function move(dir) {
    setStartIndex(s => (s + dir + total) % total)
  }

  function onCardClick(id) {
    navigate(`/movie/${id}`)
  }

  return (
    <div className="w-full relative py-8">
      <div className="relative h-[480px]">
        <div ref={containerRef} id="carousel" className="relative w-full h-full">
          {movieList.map((m, idx) => (
            <div
              key={m.id}
              ref={el => (cardsRef.current[idx] = el)}
              data-movie-id={m.id}
              className="movie-poster card"
              onClick={e => {
                if ((e.target).closest && (e.target).closest('.bookmark-btn')) return
                onCardClick(m.id)
              }}
              style={{
                position: 'absolute',
                width: '200px',
                height: '300px',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <button
                className="bookmark-btn"
                aria-label={isBookmarked(m.id) ? 'Remove bookmark' : 'Add bookmark'}
                style={{ position: 'absolute', top: 10, right: 10, zIndex: 20, background: 'rgba(0,0,0,0.5)', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={e => { e.stopPropagation(); toggleBookmark(m.id) }}
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
              <img src={m.poster} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="movie-title" style={{ position: 'absolute', bottom: 8, left: 0, right: 0, color: '#fff', textAlign: 'center', background: 'rgba(0,0,0,0.6)', padding: '6px' }}>{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
