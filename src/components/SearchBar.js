import React, { useRef } from "react"
import { FiSearch, FiX } from "react-icons/fi"

import "./css/SearchBar.css"

function SearchBar(props) {
  const searchRef = useRef()

  const clearAndFocus = () => {
    props.clear()
    searchRef.current.focus()
  }

  const clearBtn = props.value ? (
    <span onClick={clearAndFocus} className='clear-icon-container'>
      <FiX className='clear-icon' />
    </span>
  ) : null

  return (
    <div className='search-container'>
      <span className='search-icon-container'>
        <FiSearch className='search-icon' />
      </span>
      <input
        ref={searchRef}
        onChange={props.changed}
        type='text'
        placeholder='Search'
        value={props.value}></input>
      {clearBtn}
    </div>
  )
}

export default SearchBar
