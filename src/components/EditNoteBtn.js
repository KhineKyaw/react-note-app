import React from "react"
import { GoPencil } from "react-icons/go"

import "./css/EditNoteBtn.css"

function EditNoteBtn(props) {
  return (
    <button className='enb' onClick={props.onClick}>
      <GoPencil className='edit-icon' />
    </button>
  )
}

export default EditNoteBtn
