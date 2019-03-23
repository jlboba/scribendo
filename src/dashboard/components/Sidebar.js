// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'
import { Link } from 'react-router-dom'

// ==============================
// SIDEBAR COMPONENT
// ==============================
function Sidebar(props) {
  return (
    <div className="dashboard-sidebar">
      <ul>
        <li><Link to='/'><i className="fas fa-home"></i></Link></li>
        <li><Link to='/worlds'><i className="fas fa-globe"></i></Link></li>
        <li><Link to='/stories'><i className="fas fa-book"></i></Link></li>
        <li><Link to='/notifications'><i className="fas fa-bell"></i></Link></li>
      </ul>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Sidebar
