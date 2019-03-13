// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'

// ==============================
// DASHBOARD COMPONENT
// ==============================
function Dashboard(props) {
  return (
    <div className="sidebar">
      <button onClick={props.handleLogout}>logout</button>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Dashboard
