import React from "react"

import "./css/ColorButtons.css"
import getFormattedDate from "../utils/getFormattedDate"

function ColorButtons(props) {
  const { formatted, millis } = getFormattedDate()

  const addNote = color => {
    props.onClick({
      id: millis,
      text: "This is new Rionote.",
      created: formatted,
      color: color,
      editing: true,
      first: true
    })
  }

  return (
    <div className={`color-buttons ${props.show ? "" : "class-hidden"}`}>
      {props.colors.map((color, index) => (
        <button
          key={index}
          onClick={() => addNote(color)}
          className={"color-btn"}
          style={{ backgroundColor: color }}></button>
      ))}
    </div>
  )
}

export default ColorButtons
