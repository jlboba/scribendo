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
  }

  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="DISPLAY NAME"
          value={display_name}
          onChange={e => setDisplay_name(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Signup
