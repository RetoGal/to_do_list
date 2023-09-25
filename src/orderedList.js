import { React, useState, useRef } from "react"
import * as Styled from "./styled"

export const OrderedList = () => {
  const [list, setList] = useState([])
  const inputRef = useRef()

  const updateListItem = (value, index) => {
    list[index] = value
    if (value === "") {
      list.splice(index, 1)
    }
    setList([...list])
  }

  const inputDeactivation = (e) => e.key === "Enter" && e.target.blur()
  const addElementToList = (value) => value !== "" && setList([...list, value])
  const setOutLineForInput = () => inputRef.current && (inputRef.current.style.outlineColor = "#ff0000")

  return (
    <Styled.OrderedList>
      {list.map((text, index) => {
        return (
          <Styled.ListItem key={index}>
            <Styled.Input
              key={index}
              type="text"
              value={text}
              onChange={(e) => updateListItem(e.target.value, index)}
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
          value={""}
          onChange={(e) => addElementToList(e.target.value)}
          onFocus={setOutLineForInput}
          onKeyDown={inputDeactivation}
        />
      </Styled.ListItem>
    </Styled.OrderedList>
  )
}
