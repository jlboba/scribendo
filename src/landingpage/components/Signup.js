// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React, { useState } from 'react'

// ==============================
// LANDING PAGE COMPONENT
// ==============================
function Signup(props) {
  // ==============================
  // FORM
  // ==============================
  // -- state
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [display_name, setDisplay_name] = useState('')

  // -- handlers
  function handleSubmit(e) {
    // prevent default
     e.preventDefault()
    // pass data up
    props.handleCreateUser({
      email: email,
      username: username,
      password: password,
      display_name: display_name
    })
    // clear form
    setEmail('')
    setUsername('')
    setPassword('')
    setDisplay_name('')
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
          />
        </label>
        <label required className="new-username">
          <span>username <strong>*</strong></span>
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label required className="new-password">
          <span>password <strong>*</strong></span>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label className="new-displayname">
          <span>display name</span>
          <input
            type="text"
            name="displayname"
            placeholder="DISPLAY NAME"
            value={display_name}
            onChange={e => setDisplay_name(e.target.value)}
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
