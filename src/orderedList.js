import { React, useState, useRef } from "react"
import * as Styled from "./styled"

export const OrderedList = () => {
  const [inputText, setInputText] = useState([])
  const inputRef = useRef()

  const deleteArrayElement = (e, index) => {
    inputText[index] = e.target.value
    if (e.target.value.length === 0) {
      inputText.splice(index, 1)
    }

    setInputText([...inputText])
  }

  const inputDeactivation = (e) => {
    if (e.key === "Enter") {
      e.target.blur()
    }
  }

  const addingNewElementToList = (e) => {
    if (e.target.value.length > 0) {
      setInputText([...inputText, e.target.value])
      e.target.value = ""
    }
  }

  const setOutLineForInput = () => {
    inputRef.current.style.outlineColor = "#85BEF9"
  }
  return (
    <Styled.OrderedList>
      {inputText.map((text, index) => {
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
