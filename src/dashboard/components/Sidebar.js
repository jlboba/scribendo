// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'
import { NavLink } from 'react-router-dom'

// ==============================
// SIDEBAR COMPONENT
// ==============================
function Sidebar(props) {
  return (
    <div className="dashboard-sidebar">
      <ul>
        <li><NavLink exact to='/' activeClassName="selected"><i className="fas fa-home"></i></NavLink></li>
        <li><NavLink to='/worlds' activeClassName="selected"><i className="fas fa-globe"></i></NavLink></li>
        <li><NavLink to='/stories' activeClassName="selected"><i className="fas fa-book"></i></NavLink></li>
        <li><NavLink to='/notifications' activeClassName="selected"><i className="fas fa-bell"></i></NavLink></li>
      </ul>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Sidebar
