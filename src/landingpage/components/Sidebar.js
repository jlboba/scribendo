// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'

// -- components
import Signup from './Signup'
import Login from './Login'

// ==============================
// COMPONENT
// ==============================
function Sidebar({ handleLogin, loginError }) {
  // ==============================
  // VIEWS
  // ==============================
  // -- state
  const [currentView, setCurrentView] = useState('signup')

  // -- handlers
  function handleCurrentView(view) {
    setCurrentView(view)
  }

  return(
    <div className="sidebar-content">
      { /* navigation */ }
      <ul className="landing-nav">
        <li
          className={currentView === 'about' ? 'landing-nav-active' : null}
          onClick={() => {handleCurrentView('about')}}
        >
          about
        </li>
        <li
          className={currentView === 'signup' ? 'landing-nav-active' : null}
          onClick={() => {handleCurrentView('signup')}}
        >
          sign up
        </li>
        <li
          className={currentView === 'login' ? 'landing-nav-active' : null}
          onClick={() => {handleCurrentView('login')}}
        >
          log in
        </li>
      </ul>
      { /* main content */ }
      <div className="side-main-content">
        {(() => {
          switch(currentView) {
            case 'about':
              return <div>about will go here</div>
            case 'signup':
              return <Signup handleLogin={handleLogin} />
            case 'login':
              return <Login handleLogin={handleLogin} loginError={loginError} />
            default:
              return null
          }
        })()}
      </div>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Sidebar
