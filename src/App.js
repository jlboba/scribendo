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

  // ==============================
  // USER LOGIN
  // ==============================
  // -- logs in a user
  function handleLogin(user) {
    axios.post('http://localhost:3000/users/login', user)
      .then((loggedInUser) => {
        ls.setItem('token', loggedInUser.data.token)
        ls.setItem('user_id', loggedInUser.data.user_id)
        setLoginStatus(true)
      })
      .catch(err => console.log(err))
  }

  // -- checks if a user is logged in with a valid token
  function checkIfLoggedIn() {
    if(ls.token && ls.user_id) {
      axios.get(`http://localhost:3000/users/${ls.user_id}`, {
        headers: {
            Authorization: `Bearer ${ls.token}`
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

  // ==============================
  // EFFECT
  // ==============================
  useEffect(() => {
    checkIfLoggedIn()
  })

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
            <LandingPage handleLogin={handleLogin}/>
          )
        )}/>
        <Route exact path="/dashboard"
          render={() => (
            loginStatus ? (
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
