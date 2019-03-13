// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'

// ==============================
// HEADER COMPONENT
// ==============================
function Header(props) {
  const [profileNav, useProfileNav] = useState(false)

  function handleProfileNavigation () {
    // get nav
    let profileNavElement = document.getElementsByClassName('dashboard-nav')[0].style

    // add or remove class
    if(profileNav) {
      profileNavElement.width = "0px"
      useProfileNav(false)
    } else {
      profileNavElement.width = "60%"
      useProfileNav(true)
    }
  }

  return (
    <span>
      <div className="dashboard-header">
        <a href="/">
          <div className="dashboard-logo">
            <h2 className="d-first-outline">scribendo</h2>
            <h2 className="d-second-outline">scribendo</h2>
            <h1>scribendo</h1>
          </div>
        </a>
        <div className="dashboard-profile-nav" onClick={handleProfileNavigation}>
          <img src="http://placehold.it/50x50.png" alt="user icon"/>
        </div>
      </div>
      <div className="dashboard-nav">
        <ul>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
        </ul>
      </div>
    </span>
  )
}

// ==============================
// EXPORT
// ==============================
export default Header
