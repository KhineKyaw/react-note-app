import React from "react"
import { IoIosBookmarks } from "react-icons/io"
import { FiMeh } from "react-icons/fi"

import "./css/EmptyView.css"

function EmptyView(props) {
  return (
    <div className='empty-div'>
      {props.search ? (
        <FiMeh className='empty-icon' />
      ) : (
        <IoIosBookmarks className='empty-icon' />
      )}
      <span className='empty-text-bold'>
        {props.search ? "No Results Found" : "You Haven't Add Any Notes Yet"}
      </span>
      {!props.search ? (
        <span className='empty-text-small'>Start add now.</span>
      ) : null}
    </div>
  )
}

export default EmptyView
