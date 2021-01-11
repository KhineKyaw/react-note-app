import React from "react"
import { MdDelete } from "react-icons/md"

import "./css/EditNoteBtn.css"

function DeleteNoteBtn(props) {
  return (
    <button className='enb' onClick={props.onClick}>
      <MdDelete className='edit-icon' />
    </button>
  )
}

export default DeleteNoteBtn
