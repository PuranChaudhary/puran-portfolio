import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  const nextErrors = validate()
  setErrors(nextErrors)

  if (Object.keys(nextErrors).length > 0) return

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '96b5d409-3da8-4b01-9f65-db18bc294c95',
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        from_name: 'Puran Chaudhary Portfolio',
      }),
    })

    const result = await response.json()

    if (result.success) {
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setErrors({})

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } else {
      alert('Message could not be sent. Please try again.')
    }
  } catch (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
  }
}

  return (
    <section id="contact" className="section section--panel">
      <div className="section__inner">
        <p className="section__eyebrow">// 06 — Contact</p>
        <h2 className="section__title">Let&apos;s Work Together</h2>
        <p className="section__lead">
          Have a project idea or want to work together? Feel free to get in touch.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <a href="mailto:chaudharypuran599@gmail.com" className="contact__info-item">
              <span className="contact__info-icon">
                <Mail size={18} />
              </span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">chaudharypuran599@gmail.com</p>
              </div>
            </a>
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <MapPin size={18} />
              </span>
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">Dang, Nepal</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="contact-form__success" role="status">
                <CheckCircle2 size={18} />
                Your message has been sent successfully!
              </div>
            )}

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="contact-form__error">{errors.name}</span>}
              </div>
              <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="contact-form__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <span className="contact-form__error">{errors.subject}</span>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="contact-form__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary">
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
