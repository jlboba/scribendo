// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
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
  // AXIOS REQUESTS
  // ==============================
  // create a new user
  function handleCreateUser(newUser) {
    axios.post('http://localhost:3000/users', newUser)
      .then((createdUser) => {
        console.log(createdUser)
      })
      .catch(err => console.log(err))
  }

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
            <LandingPage handleCreateUser={handleCreateUser}/>
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
