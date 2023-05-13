import {useState} from "react";
import counterRedLarge from "../../assets/images/counter-red-large.svg"
import {styled} from "styled-components";
import BoardRow from "./BoardRow";
// import counterYellowLarge from "../../assets/images/counter-yellow-large.svg"

export default function Game() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(counterRedLarge)))

  return (
    <Container>
      {board.map((row, index) => <BoardRow key={index} row={row} />)}
    </Container>
  )
}

const Container = styled.div`
  width: 632px;
  height: 584px;
  background: red;

  //padding: 18px 18px 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`