import React, { useRef, useEffect } from "react"

import "./css/NoteComponent.css"
import EditNoteBtn from "../components/EditNoteBtn"
import DeleteNoteBtn from "../components/DeleteNoteBtn"

function NoteComponent(props) {
  const inputRef = useRef()
  const gradientColor = `linear-gradient(to bottom, ${props.color + "50"} 0%, ${
    props.color
  } 20%)`

  const selectInputText = () => {
    inputRef.current.select()
  }

  const onBlurHandler = () => {
    props.edit(false)
    props.disableSelect()
  }

  useEffect(() => {
    if (inputRef.current && props.first) selectInputText()
  }, [props.editing, props.first])

  const noteBody = !props.editing ? (
    <>
      <div className='note-text'>{props.children}</div>
      <div
        className='note-bottom-overlay'
        style={{
          backgroundImage: gradientColor
        }}></div>
      <div className='note-created'>{props.created}</div>
      <div onClick={() => props.edit(true)} className='delete-btn-container'>
        <DeleteNoteBtn onClick={props.delete} />
      </div>
      <div className='note-btn-container'>
        <EditNoteBtn onClick={() => props.edit(true)} />
      </div>
    </>
  ) : (
    <>
      <textarea
        ref={inputRef}
        autoFocus
        // Place cursor on end of text
        onFocus={e => {
          e.target.value = props.children
        }}
        onChange={props.changed}
        type='text'
        className='note-text note-textarea'></textarea>
    </>
  )

  return (
    <div
      onBlur={onBlurHandler}
      className='note-div'
      style={{ backgroundColor: props.color }}>
      {noteBody}
    </div>
  )
}

const notePropsAreEqual = (prevNote, nextNote) => {
  return (
    prevNote.editing === nextNote.editing && prevNote.text === nextNote.text
  )
}

export default React.memo(NoteComponent, notePropsAreEqual)
