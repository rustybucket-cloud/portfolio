import React, { useState } from 'react'
import './contactForm.scss'

export default function ContactForm() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError('Please enter a name, email, and message.')
      return
    }
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message, email })
    })
    setError(null)
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Send Me a Message</h3>
      {error && <p className="error">{error}</p>}
      <label>Your Name
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-corners" />
      </label>
      <label>Your Email
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-corners"  />
      </label>
      <label>Your Message
        <textarea name="message" id="contact-message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-corners"  />
      </label>
      <button className="rounded-corners">Send Message</button>
    </form>
  )
}
