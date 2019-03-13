// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
// eslint-disable-next-line
import axios from 'axios'

// -- components
import LandingPage from './landingpage/LandingPage'
import Dashboard from './dashboard/Dashboard'

// -- etc.
const ls = window.localStorage

// ==============================
// COMPONENT
// ==============================
function App(props) {
  // ==============================
  // STATE
  // ==============================
  // -- user login status
  const [loginStatus, setLoginStatus] = useState(false)
  // -- login errors
  const [loginError, setLoginError] = useState(false)

  // ==============================
  // USER LOGIN STATUS
  // ==============================
  // -- logs in a user
  function handleLogin(user) {
    clearLoginError()
    axios.post(`${process.env.REACT_APP_DB_URL}/users/login`, user)
      .then((loggedInUser) => {
        ls.setItem('token', loggedInUser.data.token)
        ls.setItem('user_id', loggedInUser.data.user_id)
        setLoginStatus(true)
      })
      .catch((err) => {
        setLoginError(err.response.data)
      })
  }

  // -- checks if a user is logged in with a valid token
  function checkIfLoggedIn() {
    if(ls.token && ls.user_id) {
      axios.get(`${process.env.REACT_APP_DB_URL}/users/${ls.user_id}`, {
        headers: {
            authorization: `Bearer ${ls.token}`
          }
      })
        .then((foundUser) => {
          setLoginStatus(true)
        })
        .catch((err) => {
          setLoginStatus(false)
        })
    }
  }

  // -- logs out a user
  function handleLogout(user) {
    setLoginStatus(false)
    ls.removeItem('token')
    ls.removeItem('user_id')
  }
  // ==============================
  // HELPERS
  // ==============================
  // -- clears login error status
  function clearLoginError() {
    setLoginError(false)
  }

  // ==============================
  // EFFECT
  // ==============================
  useEffect(() => {
    checkIfLoggedIn()
  }, [])

  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div>
      <Switch>
        <Route exact path="/"
        render={() => (
          loginStatus ? (
            <Redirect to="/dashboard"/>
          ) : (
            <LandingPage
              handleLogin={handleLogin}
              loginError={loginError}
            />
          )
        )}/>
        <Route exact path="/dashboard"
          render={() => (
            loginStatus ? (
              <Dashboard
                handleLogout={handleLogout}
              />
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
