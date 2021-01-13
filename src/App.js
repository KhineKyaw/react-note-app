import "./App.css"
import React, { Component } from "react"

import ToolsBar from "./containers/ToolsBar"
import NotesContainer from "./containers/NotesContainer"

const storeKey = "myNotes"

class App extends Component {
  state = {
    notes: JSON.parse(localStorage.getItem(storeKey)) || [],
    searchValue: ""
  }

  componentDidUpdate() {
    localStorage.setItem(storeKey, JSON.stringify(this.state.notes))
  }

  addNoteHandler = note => {
    this.setState(state => ({
      notes: [note, ...state.notes]
    }))
  }

  valueInputHandler = id => event => {
    this.setState(state => ({
      notes: state.notes.map(note => {
        if (id === note.id) return { ...note, text: event.target.value }
        else return note
      })
    }))
  }

  editSwitchHandler = id => edit => {
    this.setState(state => ({
      notes: state.notes.map(note => {
        if (id === note.id) return { ...note, editing: edit }
        else return note
      })
    }))
  }

  textSelectDisableHandler = id => () => {
    this.setState(state => ({
      notes: state.notes.map(note => {
        if (note.id === id) return { ...note, first: false }
        else return note
      })
    }))
  }

  onDeleteHandler = id => () => {
    this.setState(state => ({
      notes: state.notes.filter(note => id !== note.id)
    }))
  }

  onSearchHandler = event => {
    this.setState({
      searchValue: event.target.value.trimStart()
    })
  }

  clearSearchValueHandler = () => {
    this.setState({
      searchValue: ""
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <ToolsBar add={this.addNoteHandler} />
          <NotesContainer
            notes={this.state.notes}
            changed={this.valueInputHandler}
            edit={this.editSwitchHandler}
            delete={this.onDeleteHandler}
            search={this.onSearchHandler}
            searchValue={this.state.searchValue}
            clearSearch={this.clearSearchValueHandler}
            disableSelect={this.textSelectDisableHandler}
          />
        </div>
      </div>
    )
  }
}

export default App
