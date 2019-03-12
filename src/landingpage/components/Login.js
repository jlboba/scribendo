// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState, useEffect } from 'react'

// ==============================
// LOGIN COMPONENT
// ==============================
function Login(props) {
  // ==============================
  // STATE
  // ==============================
  // -- form
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // -- error handling
  const [usernameError, setUsernameError] = useState({
    status: false,
    message: ''
  })
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: ''
  })

  // ==============================
  // HANDLERS
  // ==============================
  // -- handles form submit
  function handleSubmit(e) {
    // prevent default
    e.preventDefault()
    // clear errors if any
    setUsernameError({
      status: false,
      message: ''
    })
    setPasswordError({
      status: false,
      message: ''
    })
    // log in
    props.handleLogin({
      username: username,
      password: password
    })
  }

  // -- checks if there was an error or not
  function checkIfLoginError() {
    if(props.loginError) {
      switch(props.loginError) {
        case 'username':
          setUsernameError({
            status: true,
            message: 'username not registered'
          })
          break
        case 'password':
          setPasswordError({
            status: true,
            message: 'password incorrect'
          })
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    checkIfLoginError()
  })

  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-icon">
          <i className="fas fa-pencil-alt"></i>
        </div>
        <h1>log into scribendo</h1>
        <h2>start writing, start thinking</h2>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label required>
          <span>username <strong>*</strong></span>
          <input
            type="text"
            value={username}
            placeholder="USERNAME"
            required
            onChange={e => setUsername(e.target.value)}
          />
          { usernameError.status ?
              <div className="user-create-error">{usernameError.message}</div> :
              null
          }
        </label>
        <label required>
          <span>password <strong>*</strong></span>
          <input
            type="password"
            value={password}
            placeholder="PASSWORD"
            required
            onChange={e => setPassword(e.target.value)}
          />
          { passwordError.status ?
              <div className="user-create-error">{passwordError.message}</div> :
              null
          }
        </label>
        <input type="submit" value="login and start thinking!"/>
      </form>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Login
