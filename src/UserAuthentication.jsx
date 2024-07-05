import React, { useState } from 'react'

const UserAuthentication = () => {
    let [isLoggedIn,setisLoggedIn]=useState(false)
  return (
    <div>
        <p>{isLoggedIn?"welcome!!!":"Please login..."}</p>
        <button onClick={()=>setisLoggedIn(!isLoggedIn)}>
            {isLoggedIn?"logout":"login"}
        </button>
    </div>
  )
}

export default UserAuthentication