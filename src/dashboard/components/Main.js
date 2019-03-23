// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'
import { Route } from 'react-router-dom'

// -- components
import Home from './Home'
import Worlds from './Worlds'
import Stories from './Stories'
import Notifications from './Notifications'

// ==============================
// MAIN COMPONENT
// ==============================
function Main(props) {
  return (
    <div className="dashboard-main">
      <Route exact path='/' render={Home}/>
      <Route exact path='/worlds' render={Worlds}/>
      <Route exact path='/stories' render={Stories}/>
      <Route exact path='/notifications' render={Notifications}/>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Main
