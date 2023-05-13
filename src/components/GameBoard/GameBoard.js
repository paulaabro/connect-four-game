import { styled } from "styled-components";
import whiteboard from "../../assets/images/board-layer-white-large.svg";
import blackboard from "../../assets/images/board-layer-black-large.svg";
import turnRed from "../../assets/images/turn-background-red.svg";
import turnYellow from "../../assets/images/turn-background-yellow.svg";
import Game from "./Game";
import BoardRow from "./BoardRow";


export default function GameBoard({ counter, play, turn, opponent }) {
  const player = [
    {
      name: opponent === "player" ? "PLAYER 1's" : "YOUR",
      turn: turnRed,
      color: "white",
    },
    {
      name: opponent === "player" ? "PLAYER 2's" : "CPU's",
      turn: turnYellow,
      color: "black",
    },
  ];

  return (
    <Container>
        <Board pos="static" src={blackboard} alt="game_board" />
        <Game />
        <Board pos="absolute" src={whiteboard} alt="game_board" onClick={play} />
      <Turn color={player[turn].color}>
        <img src={player[turn].turn} alt="turn_red" />
        <div>
          <p>{player[turn].name} TURN</p>
          <h3>{counter}s</h3>
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
 
`;
const Board = styled.img`
  position: ${props => props.pos};
`
const Turn = styled.div`
  position: absolute;
  bottom: -120px;
  color: ${(props) => props.theme[props.color]};

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
