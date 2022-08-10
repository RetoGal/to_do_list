import styled from "styled-components"

export const OrderedList = styled.ol`
  flex-wrap: wrap;
  padding: 40px;
  border-top: 2px solid #858585;
  box-shadow: 0px 0px 5px 0px rgb(150 150 150);
`
export const ListItem = styled.li`
  letter-spacing: 3px;
  font-size: 22px;
  font-weight: bold;
  margin-left: 18px;
`

export const Input = styled.input`
  letter-spacing: 3px;
  font-weight: bold;
  outline-color: transparent;
  border: inherit;
  font-size: 18px;
  &:focus {
    outline-color: #85BEF9;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Header = styled.h1`
  color: red;
`
