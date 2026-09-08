import { useState } from 'react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    religion: '',
    city: '',

    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyValues: '',
    nativePlace: '',
    highestQualification: '',
    degreeCourse: '',
    collegeUniversity: '',
    occupation: '',
    jobTitle: '',
    companyOrganization: '',
    workLocation: '',
    annualIncome: '',
    aboutMe: '',
    hobbiesInterests: '',
    partnerPreferences: '',
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
    setCurrentStep(1)
  }

  const goToFamilyDetails = () => {
    setCurrentStep(2)
  }

  const goToPersonalDetails = () => {
    setCurrentStep(1)
  }
  const goToFamilyFromEducation = () => {
    setCurrentStep(2)
  }
  const goToAboutYou = () => {
    setCurrentStep(4)
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

            <p className="step-label">
              STEP {currentStep} OF 4
            </p>

            {currentStep === 1 ? (
              <>
                <h1>Let's start with the basics.</h1>

                <p>
                  Tell us a little about yourself. You can change
                  anything later before creating your final biodata.
                </p>
              </>
            ) : currentStep === 2 ? (
              <>
                <h1>Tell us about your family.</h1>

                <p>
                  Add a few family details to make your biodata
                  more complete and personal.
                </p>
              </>
            ) : currentStep === 3 ? (
              <>
                <h1>Let's talk about your education & career.</h1>

                <p>
                  Add your education and professional details to make
                  your biodata more complete and informative.
                </p>
              </>
            ) : (
              <>
                <h1>Tell us a little more about you.</h1>

                <p>
                  Share your personality, interests, and what you're
                  looking for in a partner.
                </p>
              </>
            )}
          </div>


          <div className="progress-bar">
            <div
              className={`progress-fill ${currentStep === 2
                  ? 'progress-step-two'
                  : currentStep === 3
                    ? 'progress-step-three'
                    : currentStep === 4
                      ? 'progress-step-four'
                      : ''
                }`}
            ></div>
          </div>

          <div className="step-navigation">

            <button
              className={`step-pill ${currentStep === 1 ? 'active' : ''
                }`}
              onClick={goToPersonalDetails}
            >
              <span>01</span>
              Personal
            </button>

            <div className="step-line"></div>

            <button
              className={`step-pill ${currentStep === 2 ? 'active' : ''
                }`}
              onClick={() => setCurrentStep(2)}
            >
              <span>02</span>
              Family
            </button>

            <div className="step-line"></div>

            <button
              className={`step-pill ${currentStep === 3 ? 'active' : ''
                }`}
              onClick={() => setCurrentStep(3)}
            >
              <span>03</span>
              Education
            </button>

            <div className="step-line"></div>

            <div className="step-pill disabled">
              <span>04</span>
              About You
            </div>

          </div>

          <div className="builder-layout">

            <div className="form-card">

              {currentStep === 1 ? (
                <>
                  <div className="section-heading">

                    <div>
                      <p className="section-number">01</p>

                      <h2>
                        Personal Details
                      </h2>
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
                        <option value="">
                          Select gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>
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
                        placeholder={'e.g. 5\' 8"'}
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
                        <option value="">
                          Select religion
                        </option>

                        <option value="Hindu">
                          Hindu
                        </option>

                        <option value="Muslim">
                          Muslim
                        </option>

                        <option value="Christian">
                          Christian
                        </option>

                        <option value="Sikh">
                          Sikh
                        </option>

                        <option value="Jain">
                          Jain
                        </option>

                        <option value="Buddhist">
                          Buddhist
                        </option>

                        <option value="Other">
                          Other
                        </option>
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

                    <button
                      className="next-button"
                      onClick={goToFamilyDetails}
                    >
                      Continue
                      <span>→</span>
                    </button>

                  </div>
                </>
              ) : currentStep === 2 ? (
                <>
                  <div className="section-heading">

                    <div>
                      <p className="section-number">02</p>

                      <h2>
                        Family & Background
                      </h2>
                    </div>

                    <span>Optional</span>

                  </div>

                  <div className="family-intro">
                    <div className="family-icon">
                      ♡
                    </div>

                    <div>
                      <h3>
                        A little about your family
                      </h3>

                      <p>
                        These details help families understand
                        your background better.
                      </p>
                    </div>
                  </div>

                  <div className="form-grid">

                    <div className="form-field">
                      <label htmlFor="fatherName">
                        Father's Name
                      </label>

                      <input
                        id="fatherName"
                        name="fatherName"
                        type="text"
                        placeholder="e.g. Rajesh Maurya"
                        value={formData.fatherName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="fatherOccupation">
                        Father's Occupation
                      </label>

                      <input
                        id="fatherOccupation"
                        name="fatherOccupation"
                        type="text"
                        placeholder="e.g. Business"
                        value={formData.fatherOccupation}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="motherName">
                        Mother's Name
                      </label>

                      <input
                        id="motherName"
                        name="motherName"
                        type="text"
                        placeholder="e.g. Sunita Maurya"
                        value={formData.motherName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="motherOccupation">
                        Mother's Occupation
                      </label>

                      <input
                        id="motherOccupation"
                        name="motherOccupation"
                        type="text"
                        placeholder="e.g. Homemaker"
                        value={formData.motherOccupation}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="siblings">
                        Siblings
                      </label>

                      <input
                        id="siblings"
                        name="siblings"
                        type="text"
                        placeholder="e.g. 1 brother, 1 sister"
                        value={formData.siblings}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="familyType">
                        Family Type
                      </label>

                      <select
                        id="familyType"
                        name="familyType"
                        value={formData.familyType}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select family type
                        </option>

                        <option value="Nuclear">
                          Nuclear
                        </option>

                        <option value="Joint">
                          Joint
                        </option>

                        <option value="Extended">
                          Extended
                        </option>
                      </select>
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="familyValues">
                        Family Values
                      </label>

                      <textarea
                        id="familyValues"
                        name="familyValues"
                        rows="4"
                        placeholder="Tell us a little about your family values..."
                        value={formData.familyValues}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="nativePlace">
                        Native Place
                      </label>

                      <input
                        id="nativePlace"
                        name="nativePlace"
                        type="text"
                        placeholder="e.g. Ayodhya, Uttar Pradesh"
                        value={formData.nativePlace}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  <div className="form-actions">

                    <button
                      className="back-button"
                      onClick={goToPersonalDetails}
                    >
                      ← Personal Details
                    </button>

                    <button
                      className="next-button"
                      onClick={() => setCurrentStep(3)}
                    >
                      Continue
                      <span>→</span>
                    </button>

                  </div>
                </>
              ) : currentStep === 3 ? (
                <>
                  <div className="section-heading">
                    <div>
                      <p className="section-number">03</p>
                      <h2>Education & Career</h2>
                    </div>

                    <span>Optional</span>
                  </div>

                  <div className="subsection-title">
                    Education
                  </div>


                  <div className="form-group">
                    <label htmlFor="highestQualification">
                      Highest Qualification
                    </label>

                    <input
                      type="text"
                      id="highestQualification"
                      name="highestQualification"
                      value={formData.highestQualification}
                      onChange={handleChange}
                      placeholder="e.g. B.Tech, MBA, M.Com"
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="degreeCourse">
                      Degree / Course
                    </label>

                    <input
                      type="text"
                      id="degreeCourse"
                      name="degreeCourse"
                      value={formData.degreeCourse}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science, B.Com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="collegeUniversity">
                      College / University
                    </label>

                    <input
                      type="text"
                      id="collegeUniversity"
                      name="collegeUniversity"
                      value={formData.collegeUniversity}
                      onChange={handleChange}
                      placeholder="e.g. Delhi University"
                    />
                  </div>

                  <div className="subsection-title">
                    Career
                  </div>

                  <div className="form-group">
                    <label htmlFor="occupation">
                      Occupation
                    </label>

                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="jobTitle">
                      Job Title / Designation
                    </label>

                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g. Senior Software Engineer"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyOrganization">
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      id="companyOrganization"
                      name="companyOrganization"
                      value={formData.companyOrganization}
                      onChange={handleChange}
                      placeholder="e.g. TCS, Infosys, Self Employed"
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="workLocation">
                      Work Location
                    </label>

                    <input
                      type="text"
                      id="workLocation"
                      name="workLocation"
                      value={formData.workLocation}
                      onChange={handleChange}
                      placeholder="e.g. Noida, Uttar Pradesh"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="annualIncome">
                      Annual Income
                    </label>

                    <input
                      type="text"
                      id="annualIncome"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      placeholder="e.g. ₹8 Lakh per annum"
                    />
                  </div>
                  <div className="form-actions">
                    <button
                      className="back-button"
                      onClick={goToFamilyFromEducation}
                    >
                      ← Family & Background
                    </button>

                    <button
                      className="next-button"
                      onClick={goToAboutYou}
                    >
                      Continue
                      <span>→</span>
                    </button>
                  </div>

                </>

              ) : (
                <>
                  <div className="section-heading">
                    <div>
                      <p className="section-number">04</p>
                      <h2>About You</h2>
                    </div>

                    <span>Optional</span>
                  </div>

                  <div className="subsection-title">
                    About Me
                  </div>

                  <div className="form-group">
                    <label htmlFor="aboutMe">
                      Tell us a little about yourself
                    </label>

                    <textarea
                      id="aboutMe"
                      name="aboutMe"
                      rows="6"
                      value={formData.aboutMe}
                      onChange={handleChange}
                      placeholder="Tell us about your personality, interests, values, lifestyle, and what makes you unique..."
                    ></textarea>
                  </div>
                  <div className="subsection-title">
                    Hobbies & Interests
                  </div>

                  <div className="form-group">
                    <label htmlFor="hobbiesInterests">
                      What do you enjoy doing?
                    </label>

                    <input
                      type="text"
                      id="hobbiesInterests"
                      name="hobbiesInterests"
                      value={formData.hobbiesInterests}
                      onChange={handleChange}
                      placeholder="e.g. Traveling, music, reading, fitness"
                    />
                  </div>

                  <div className="subsection-title">
                    Partner Preferences
                  </div>

                  <div className="form-group">
                    <label htmlFor="partnerPreferences">
                      What are you looking for in a partner?
                    </label>

                    <textarea
                      id="partnerPreferences"
                      name="partnerPreferences"
                      rows="5"
                      value={formData.partnerPreferences}
                      onChange={handleChange}
                      placeholder="Share the qualities, values, or lifestyle you hope to find in a partner..."
                    ></textarea>
                  </div>

                  <div className="form-actions">

                    <button
                      className="back-button"
                      onClick={() => setCurrentStep(3)}
                    >
                      ← Education & Career
                    </button>

                    <button
                      className="next-button"
                    >
                      Continue
                      <span>→</span>
                    </button>

                  </div>
                </>
              )}

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

                {currentStep === 2 && (
                  <div className="family-preview">

                    <div className="preview-divider"></div>

                    <p className="mini-label">
                      FAMILY
                    </p>

                    <div className="preview-info">

                      <div>
                        <span>Father</span>

                        <strong>
                          {formData.fatherName || '—'}
                        </strong>
                      </div>

                      <div>
                        <span>Mother</span>

                        <strong>
                          {formData.motherName || '—'}
                        </strong>
                      </div>

                      <div>
                        <span>Siblings</span>

                        <strong>
                          {formData.siblings || '—'}
                        </strong>
                      </div>

                      <div>
                        <span>Family Type</span>

                        <strong>
                          {formData.familyType || '—'}
                        </strong>
                      </div>

                    </div>

                  </div>
                )}

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