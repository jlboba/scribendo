// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

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
        <Route path="/dashboard"
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
