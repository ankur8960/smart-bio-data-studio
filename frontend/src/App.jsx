import './App.css'

function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">Smart Bio Data Studio</div>

        <button className="nav-button">
          Create Biodata
        </button>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">SMART BIO DATA STUDIO</p>

          <h1>
            Create a beautiful
            <span> marriage biodata.</span>
          </h1>

          <p className="hero-description">
            Create a personalized, elegant biodata in minutes.
            Choose a beautiful template, add your details, and
            get a professional document ready to share.
          </p>

          <button className="primary-button">
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