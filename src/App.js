import logo from "./logo.svg"
import "./App.css"
import { OrderedList } from "./orderedList"
import * as Styled from "./styled"

const App = () => {
  return (
    <Styled.Container>
      <OrderedList />
      <OrderedList />
    </Styled.Container>
  )
}

export default App
