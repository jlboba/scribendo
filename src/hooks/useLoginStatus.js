// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import { useState, useEffect } from 'react'

// ==============================
// HOOK METHOD
// ==============================
function useLoginStatus(status) {
  // -- initial state
  const [loginStatus, setLoginStatus] = useState(false)

  // setting state based on passed in data
  function updateLogin() {
    setLoginStatus(status)
  }

  useEffect(() => {
    updateLogin()
  })

  // -- return online status
  return loginStatus
}

// ==============================
// EXPORT
// ==============================
export default useLoginStatus
