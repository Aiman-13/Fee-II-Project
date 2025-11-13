import React, { useEffect } from 'react'
import { movieList } from '../data/movieData'
import MovieCard from '../components/MovieCard'
import Carousel from '../components/Carousel'
import Slider from '../components/Slider'

export default function HomePage() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="container py-8">
      <div className="carousel-container">
        <Carousel />
      </div>
      <Slider id="now-showing" title="Now Showing" movies={movieList} />
      <Slider id="coming-soon" title="Coming Soon" movies={movieList.slice(0, 8)} />
      <Slider id="top-rated" title="Top Rated" movies={movieList.slice(0, 8)} />
    </main>
  )
}
