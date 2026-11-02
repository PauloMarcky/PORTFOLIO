import { useState } from 'react'
import '../styles/contact.css'

const details = [
  { icon: 'email.png', text: 'paulobalaba5@gmail.com' },
  { icon: 'phone.png', text: '+63 948 9928 125' },
  { icon: 'location.png', text: 'Purok 7, Bugallong Norte, Ramon Isabela' },
]

export default function Contact() {
  // STATE: values React remembers. When you call the setter, React re-renders.
  // Each input is "controlled": its value always comes from state.
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // One handler for all fields: the input's `name` attribute picks the key.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // stop the browser's default full-page form submit
    console.log('Form data:', form) // TODO: send to a real service (see README)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="page-section">
      <div className="contact-card-wrapper">
        <div className="info-display-panel">
          <h3>CONTACT INFORMATION</h3>
          <p className="subtitle">Please don't make unnecessary contacts!</p>
          <div className="contact-details-list">
            {details.map((d) => (
              <div className="contact-row" key={d.text}>
                <div className="img-con"><img src={`/images/${d.icon}`} alt="" /></div>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form-panel" onSubmit={handleSubmit}>
          <div className="form-header-box">
            <h3>GET IN TOUCH</h3>
            <p>{sent ? 'Thanks! Your message was captured.' : 'Please follow the format below!'}</p>
          </div>
          <input className="form-input" name="name" type="text" placeholder="Enter Name"
                 value={form.name} onChange={handleChange} required />
          <input className="form-input" name="email" type="email" placeholder="Enter Email"
                 value={form.email} onChange={handleChange} required />
          <textarea className="form-textarea" name="message" placeholder="Type message here...."
                    value={form.message} onChange={handleChange} required />
          <button className="submit-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
