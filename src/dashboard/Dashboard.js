// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'

let ls = window.localStorage
// ==============================
// DASHBOARD COMPONENT
// ==============================
function Dashboard() {
  function handleLogout() {
    ls.removeItem('token')
    ls.removeItem('user_id')
  }
  return (
    <div className="sidebar">
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Dashboard
