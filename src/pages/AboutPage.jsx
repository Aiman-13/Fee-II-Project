import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      <div className="about-container">
        <button 
          onClick={() => navigate('/')} 
          className="about-back-btn"
          aria-label="Back to home"
        >
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <header className="about-header">
          <h1>Nexus Films 🎬</h1>
          <p>Your ultimate online movie experience</p>
        </header>

        <main className="about-main">
          <section className="about-us-section">
            <h2>About Us</h2>
            <p>We are a passionate team dedicated to delivering a simple, fast, and elegant movie streaming experience on the web.</p>
            
            <div className="team-container">
              <div className="team-member">
                <h3>🎨 Aimanpreet Kaur</h3>
                <p>Web Designer with an eye for minimalistic designs and perfect color schemes to enhance user experience.</p>
              </div>

              <div className="team-member">
                <h3>💻 Anshu Garg</h3>
                <p>Web Developer focusing on integrating interactive functionalities and optimizing website performance.</p>
              </div>

              <div className="team-member">
                <h3>👨‍💻 Devanshu Garg</h3>
                <p>Frontend Developer specializing in clean, responsive web designs using HTML, CSS, and JavaScript.</p>
              </div>

              <div className="team-member">
                <h3>🖌️ Doly</h3>
                <p>UI Designer passionate about creating intuitive interfaces and attractive layouts that users love.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
