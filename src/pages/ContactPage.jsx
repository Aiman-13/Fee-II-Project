import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <button 
          onClick={() => navigate('/')} 
          className="contact-back-btn"
          aria-label="Back to home"
        >
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <main className="contact-main">
          <section className="contact-us">
            <h2>Contact Us</h2>

            <div className="contact-container">
              <div className="contact-info">
                <h3>📍 Address</h3>
                <p>Chitkara University<br/>Rajpura, Dist Patiala</p>

                <h3>📞 Contact No.</h3>
                <p>*********</p>
              </div>

              <div className="contact-form">
                <h3>✉️ Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
