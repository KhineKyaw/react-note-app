import React, { useState } from "react"

import PlusButton from "../components/PlusButton"
import ColorButtons from "../components/ColorButtons"

function ToolsBar(props) {
  const [showColorButtons, setShowColorButtons] = useState(false)

  const toggleColorButtonsHandler = () => {
    setShowColorButtons(!showColorButtons)
  }

  const styles = {
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      minWidth: "90px",
      Width: "90px",
      borderRight: "1px solid #E5E9F4"
    },
    div: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 0",
      alignItems: "center"
    },
    title: {
      display: "flex",
      fontWeight: "bold",
      color: "#151515"
    },
    btnContainer: {
      marginTop: "50px"
    }
  }

  const btnColors = ["#FDC76E", "#FC9871", "#B491FB", "#00D3FD", "#E2EC8D"]

  return (
    <div style={styles.container}>
      <div style={styles.div}>
        <span style={styles.title}>Rionote</span>
        <div style={styles.btnContainer}>
          <PlusButton onClick={toggleColorButtonsHandler} />
          <ColorButtons
            onClick={props.add}
            colors={btnColors}
            show={showColorButtons}
          />
        </div>
      </div>
    </div>
  )
}

export default ToolsBar
