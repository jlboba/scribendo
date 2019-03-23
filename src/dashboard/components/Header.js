// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// ==============================
// HEADER COMPONENT
// ==============================
function Header({ handleLogout }) {
  const [profileNav, useProfileNav] = useState(false)

  function handleProfileNavigation () {
    // get nav
    let profileNavContainer = document.getElementsByClassName('dashboard-nav-container')[0].style
    let profileNavElement = document.getElementsByClassName('dashboard-nav')[0].style

    // toggles the profile navigation
    if(profileNav) {
      profileNavElement.width = "0%"
      profileNavContainer.opacity = "0"
      profileNavContainer.width = "0%"
      useProfileNav(false)
    } else {
      profileNavElement.width = "60%"
      profileNavContainer.opacity = "1"
      profileNavContainer.width = "100%"
      useProfileNav(true)
    }
  }

  return (
    <span>
      <div className="dashboard-header">
        <Link to='/'>
          <div className="dashboard-logo">
            <h2 className="d-first-outline">scribendo</h2>
            <h2 className="d-second-outline">scribendo</h2>
            <h1>scribendo</h1>
          </div>
        </Link>
        <div className="dashboard-profile-nav" onClick={handleProfileNavigation}>
          <img src="http://placehold.it/50x50.png" alt="user icon"/>
        </div>
      </div>
      <div className="dashboard-nav-container">
        <div className="dashboard-nav">
          <div className="dashboard-nav-user">
            {/* user names */}
            <h1>display name</h1>
            <h2>@username</h2>
            {/* stats */}
            <ul>
              <li><strong>0</strong> Worlds</li>
              <li><strong>0</strong> Stories</li>
            </ul>
          </div>
          <div className="dashboard-nav-links">
            <ul>
              <li><a href="/"><span className="fas fa-user-circle"></span>View Profile</a></li>
              <li><a href="/"><span className="fas fa-cog"></span>Profile Settings</a></li>
              <li><a onClick={handleLogout}><span className="fas fa-sign-out-alt"></span>Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </span>
  )
}

// ==============================
// EXPORT
// ==============================
export default Header
