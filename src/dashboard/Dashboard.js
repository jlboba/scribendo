// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'

// -- components
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

// -- styles
import './Dashboard.css'

// ==============================
// DASHBOARD COMPONENT
// ==============================
function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <Header handleLogout={props.handleLogout}/>
      <Main />
      <Sidebar />
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Dashboard
