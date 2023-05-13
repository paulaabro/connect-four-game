import {styled} from "styled-components";

export default function BoardRow({row}) {
  return (
    <Container>
      {row.map((cell, index) => <Cell key={index}>{cell && <img src={cell} alt="game-piece" />}</Cell>)}
  </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cell = styled.div`
`
