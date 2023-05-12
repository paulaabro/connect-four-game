import { styled } from "styled-components";
import whiteboard from "../assets/images/board-layer-white-large.svg";
import blackboard from "../assets/images/board-layer-black-large.svg";
import turn_red from "../assets/images/turn-background-red.svg";

export default function GameBoard() {
  return (
    <Container>
      <img src={blackboard} alt="game_board" />
      <img src={whiteboard} alt="game_board" />
      <Turn>
        <img src={turn_red} alt="turn_red" />
        <div>
          <p>PLAYER 1’S TURN</p>
          <h3>3s</h3>
        </div>
      </Turn>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 160px;
  position: relative;
  display: flex;
  justify-content: center;

  & > :nth-child(2) {
    position: absolute;
  }
`;

const Turn = styled.div`
  position: absolute;
  bottom: -120px;
  color: ${(props) => props.theme.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
  }

  p {
    font-size: 16px;
    line-height: 20px;
  }

  h3 {
    font-size: 56px;
    line-height: 71px;
  }
`;
