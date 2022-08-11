import { React, useState, useRef } from "react"
import * as Styled from "./styled"

export const OrderedList = () => {
  const [writtenTextInArray, addWrittenText] = useState([])
  const inputRef = useRef()

  const deleteArrayElement = (e, index) => {
    writtenTextInArray[index] = e.target.value
    if (e.target.value.length === 0) {
      writtenTextInArray.splice(index, 1)
    }

    addWrittenText([...writtenTextInArray])
  }

  const inputDeactivation = (e) => {
    if (e.key === "Enter") {
      e.target.blur()
    }
  }

  const addingNewElementToList = (e) => {
    if (e.target.value.length > 0) {
      addWrittenText([...writtenTextInArray, e.target.value])
      e.target.value = ""
    }
  }

  const setOutLineForInput = () => {
    inputRef.current.style.outlineColor = "#85BEF9"
  }
  return (
    <Styled.OrderedList>
      {writtenTextInArray.map((text, index) => {
        return (
          <Styled.ListItem key={index}>
            <Styled.Input
              key={index}
              type="text"
              ref={inputRef}
              value={text}
              onChange={(e) => deleteArrayElement(e, index)}
              onFocus={setOutLineForInput}
              onKeyDown={inputDeactivation}
              autoFocus
            />
          </Styled.ListItem>
        )
      })}
      <Styled.ListItem>
        <Styled.Input
          type="text"
          ref={inputRef}
          onChange={(e) => addingNewElementToList(e)}
          onFocus={setOutLineForInput}
          onKeyDown={inputDeactivation}
        />
      </Styled.ListItem>
    </Styled.OrderedList>
  )
}
