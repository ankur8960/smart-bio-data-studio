import { useState } from 'react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    religion: '',
    city: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleStart = () => {
    setShowForm(true)
  }

  if (showForm) {
    return (
      <main className="builder-page">
        <header className="builder-header">
          <div className="builder-brand">
            Smart Bio Data Studio
          </div>

          <div className="save-status">
            <span className="status-dot"></span>
            Autosave ready
          </div>
        </header>

        <section className="builder-container">

          <div className="builder-intro">
            <p className="step-label">STEP 1 OF 4</p>

            <h1>Let's start with the basics.</h1>

            <p>
              Tell us a little about yourself. You can change
              anything later before creating your final biodata.
            </p>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="builder-layout">

            <div className="form-card">

              <div className="section-heading">
                <div>
                  <p className="section-number">01</p>
                  <h2>Personal Details</h2>
                </div>

                <span>Required</span>
              </div>

              <div className="photo-section">

                <div className="photo-placeholder">
                  <span>+</span>
                </div>

                <div>
                  <h3>Add your profile photo</h3>

                  <p>
                    A clear and recent photo helps create
                    a beautiful biodata.
                  </p>

                  <button className="secondary-button">
                    Upload Photo
                  </button>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-field full-width">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="e.g. Ankur Maurya"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="gender">
                    Gender
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="dateOfBirth">
                    Date of Birth
                  </label>

                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="height">
                    Height
                  </label>

                  <input
                    id="height"
                    name="height"
                    type="text"
                    placeholder="e.g. 5' 8&quot;"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="religion">
                    Religion
                  </label>

                  <select
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                  >
                    <option value="">Select religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label htmlFor="city">
                    Current City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="e.g. Lucknow, Uttar Pradesh"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="form-actions">

                <button
                  className="back-button"
                  onClick={() => setShowForm(false)}
                >
                  ← Back
                </button>

                <button className="next-button">
                  Continue
                  <span>→</span>
                </button>

              </div>

            </div>

            <aside className="preview-card">

              <div className="preview-header">
                <span>LIVE PREVIEW</span>

                <span className="preview-status">
                  Draft
                </span>
              </div>

              <div className="mini-biodata">

                <div className="mini-photo">
                  {formData.fullName
                    ? formData.fullName.charAt(0).toUpperCase()
                    : '?'}
                </div>

                <p className="mini-label">
                  MATRIMONIAL PROFILE
                </p>

                <h2>
                  {formData.fullName || 'Your Name'}
                </h2>

                <div className="preview-divider"></div>

                <div className="preview-info">

                  <div>
                    <span>Gender</span>
                    <strong>
                      {formData.gender || '—'}
                    </strong>
                  </div>

                  <div>
                    <span>Date of Birth</span>
                    <strong>
                      {formData.dateOfBirth || '—'}
                    </strong>
                  </div>

                  <div>
                    <span>Height</span>
                    <strong>
                      {formData.height || '—'}
                    </strong>
                  </div>

                  <div>
                    <span>Religion</span>
                    <strong>
                      {formData.religion || '—'}
                    </strong>
                  </div>

                  <div>
                    <span>City</span>
                    <strong>
                      {formData.city || '—'}
                    </strong>
                  </div>

                </div>

              </div>

              <p className="preview-note">
                Your biodata will update here as you type.
              </p>

            </aside>

          </div>

        </section>
      </main>
    )
  }

  return (
    <main className="app">

      <nav className="navbar">
        <div className="brand">
          Smart Bio Data Studio
        </div>

        <button
          className="nav-button"
          onClick={handleStart}
        >
          Create Biodata
        </button>
      </nav>

      <section className="hero-section">

        <div className="hero-content">

          <p className="eyebrow">
            SMART BIO DATA STUDIO
          </p>

          <h1>
            Create a beautiful
            <span> marriage biodata.</span>
          </h1>

          <p className="hero-description">
            Create a personalized, elegant biodata in minutes.
            Choose a beautiful template, add your details, and
            get a professional document ready to share.
          </p>

          <button
            className="primary-button"
            onClick={handleStart}
          >
            Create Your Biodata
          </button>

          <div className="features">
            <span>Beautiful Templates</span>
            <span>Live Preview</span>
            <span>PDF Download</span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default App