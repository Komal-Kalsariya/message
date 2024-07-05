import React, { useState } from 'react'

const ToggleMessage = () => {
    let [isToggled,setisToggled]=useState(false)
  return (
    <div>
        <p>{isToggled?"Message is visible":"Message is hidden"}</p>
        <button onClick={()=>setisToggled(!isToggled)}>
            {isToggled ?"hide message":"show message"}
        </button>
    </div>
  )
}

export default ToggleMessage