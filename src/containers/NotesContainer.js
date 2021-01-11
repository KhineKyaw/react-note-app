import React from "react"

import "../App.css"
import SearchBar from "../components/SearchBar"
import NoteComponent from "../components/NoteComponent"

function NotesContainer(props) {
  const styles = {
    title: {
      display: "flex",
      fontWeight: "bold",
      fontSize: "270%",
      marginTop: "30px",
      marginBottom: "20px",
      // border: "1px solid #00000030",
      zIndex: 5
    }
  }

  const title = props.searchValue ? "Results" : "Notes"
  // Simple search
  const notes = props.searchValue
    ? props.notes.filter(note =>
        note.text
          .toLocaleLowerCase()
          .includes(props.searchValue.toLocaleLowerCase())
      )
    : [...props.notes]

  return (
    <div className='main-note-container'>
      <SearchBar
        clear={props.clearSearch}
        value={props.searchValue}
        changed={props.search}
      />
      <span style={styles.title}>{title}</span>
      <div className='note-container-div'>
        {notes.map(note => (
          <NoteComponent
            {...note}
            key={note.id}
            changed={props.changed(note.id)}
            edit={props.edit(note.id)}
            delete={props.delete(note.id)}
            disableSelect={props.disableSelect(note.id)}>
            {note.text}
          </NoteComponent>
        ))}
      </div>
    </div>
  )
}

export default NotesContainer
