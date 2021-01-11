import React from "react"
import { FiPlus } from "react-icons/fi"

import "./css/PlusButton.css"

function PlusButton(props) {
  return (
    <button onClick={props.onClick}>
      <FiPlus className='icon' />
    </button>
  )
}

export default PlusButton
