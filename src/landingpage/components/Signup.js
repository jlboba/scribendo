// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'
import axios from 'axios'

// ==============================
// SIGNUP COMPONENT
// ==============================
function Signup(props) {
  // ==============================
  // STATE
  // ==============================
  // -- form
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [display_name, setDisplay_name] = useState('')
  // -- error handling
  const [emailError, setEmailError] = useState({
    status: false,
    message: ''
  })
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
    // create the user
    handleCreateValidity({
      email: email,
      username: username,
      password: password,
      display_name: display_name
    })
  }

  // -- handles checking whether or not the user input is valid
  function handleInputValidity(e) {
    switch(e.target.name) {
      case 'username':
        if(checkUsername(e.key)) {
          e.preventDefault()
        }
        break
      case 'password':
        if(checkPassword(e.key)) {
          e.preventDefault()
        }
        break
      default:
        break
    }
  }

  // -- handles checking whether what's been submitted is valid
  function handleCreateValidity(newUser) {
    // checks username, if invalid set error state
    if(checkUsername(newUser.username)) {
      setUsernameError({
        status: true,
        message: 'invalid characters, try again'
      })
    }
    // checks password, if invalid set error state
    if(checkPassword(newUser.password)) {
      setPasswordError({
        status: true,
        message: 'invalid password, no spaces allowed'
      })
    }
    // checks if both are false, if so then create
    if(!checkPassword(newUser.password) && !checkUsername(newUser.username)) {
      handleCreateUser(newUser)
    }
  }

  // -- handles creating a new user
  function handleCreateUser(newUser) {
    // create the user
    axios.post('http://localhost:3000/users', newUser)
      .then((createdUser) => {
        // clear form
        setEmail('')
        setUsername('')
        setPassword('')
        setDisplay_name('')
        // automatically log in user
        props.handleLogin({
          username: newUser.username,
          password: newUser.password
        })
      })
      .catch((err) => {
        if(err.response) {
          switch(err.response.data) {
            case 'email':
              setEmailError({
                status: true,
                message: 'email already registered! try logging in or use another email'
              })
              break
            case 'username':
              setUsernameError({
                status: true,
                message: 'sorry, username taken! please choose another'
              })
              break
            default:
              // PUT 404 HERE LATER
              break
          }
        } else {
          console.log(err)
        }
      })
  }

  // ==============================
  // ETC. HELPER METHODS
  // ==============================
  function checkUsername(username) {
    if(username.match(/[^\w.]/)) {
      return true
    }
    return false
  }

  function checkPassword(password) {
    if(password.match(" ")) {
      return true
    }
    return false
  }

  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-icon">
          <i className="fas fa-pencil-alt"></i>
        </div>
        <h1>create a new account</h1>
        <h2>start writing, start thinking</h2>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <label required className="new-email">
          <span>email <strong>*</strong></span>
          <input
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          { emailError.status ?
              <div className="user-create-error">{emailError.message}</div> : null
          }
        </label>
        <label required className="new-username">
          <span>username <strong>*</strong></span>
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleInputValidity}
            maxLength="15"
            required
          />
          { usernameError.status ?
              <div className="user-create-error">{usernameError.message}</div> : null
          }
        </label>
        <label required className="new-password">
          <span>password <strong>*</strong></span>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleInputValidity}
            required
          />
          { passwordError.status ?
              <div className="user-create-error">{passwordError.message}</div> : null
          }
        </label>
        <label className="new-displayname">
          <span>display name</span>
          <input
            type="text"
            name="displayname"
            placeholder="DISPLAY NAME"
            value={display_name}
            onChange={e => setDisplay_name(e.target.value)}
            maxLength="40"
          />
        </label>
        <input type="submit" value="create and get thinking!"/>
      </form>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Signup
