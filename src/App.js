// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
// eslint-disable-next-line
import axios from 'axios'

// -- components
import LandingPage from './landingpage/LandingPage'
import Dashboard from './dashboard/Dashboard'

// ==============================
// COMPONENT
// ==============================
function App() {
  // ==============================
  // USER STATUS (LOGGED IN?)
  // ==============================
  // -- state
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false)

  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div>
      <Switch>
        <Route exact path="/"
        render={() => (
          loggedIn ? (
            <Redirect to="/dashboard"/>
          ) : (
            <LandingPage />
          )
        )}/>
        <Route exact path="/dashboard"
          render={() => (
            loggedIn ? (
              <Dashboard />
            ) : (
              <Redirect to="/"/>
            )
          )}/>
      </Switch>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default App
