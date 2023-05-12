import { styled } from "styled-components";
import whiteboard from "../assets/images/board-layer-white-large.svg";
import blackboard from "../assets/images/board-layer-black-large.svg";

export default function GameBoard() {
  return (
    <Container>
      <img src={blackboard} alt="game_board" />
      <img src={whiteboard} alt="game_board" />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 160px;
  position: relative;
  display: flex;
  justify-content: center;

  :nth-child(2) {
    position: absolute;
  }
`;
