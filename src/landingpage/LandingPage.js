// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'

// -- components
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import ParticlesContainer from './components/ParticlesContainer'

// -- styles
import './LandingPage.css'

// ==============================
// LANDING PAGE COMPONENT
// ==============================
function LandingPage(props) {
  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div className="landing-grid-container">
      <div className="landing-sidebar">
        <Sidebar
          handleLogin={props.handleLogin}
          loginError={props.loginError}
        />
        { /* star particles */ }
        <div className="particles">
          <ParticlesContainer />
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default LandingPage
