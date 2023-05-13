import { useParams } from "react-router-dom";
import Page from "../components/Page";
import PlayerCard from "../components/PlayerCard";
import playerOne from "../assets/images/player-one.svg";
import you from "../assets/images/you.svg";
import cpu from "../assets/images/cpu.svg";
import playerTwo from "../assets/images/player-two.svg";
import Top from "../components/Top";
import { styled } from "styled-components";
import GameBoard from "../components/GameBoard";
import { useEffect, useState } from "react";
import { TIMER } from "../constants/timer";

export default function GamePage() {
  const { opponent } = useParams();
  const [counter, setCounter] = useState(TIMER);
  const [scores, setScores] = useState([0, 0]);
  const [turn, setTurn] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let interval = null;

    if (!pause) {
      interval = setInterval(() => {
        setCounter((counter) => {
          if (counter === 0) {
            clearInterval(interval);
            const newScores = [...scores];
            const nextTurn = (turn + 1) % 2;
            newScores[nextTurn]++;
            setScores(newScores);
            setTurn(nextTurn % 2);
            return TIMER;
          }
          return counter - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pause, turn, scores]);

  const players = [
    {
      name: opponent === "player" ? "Player 1" : "You",
      image: opponent === "player" ? playerOne : you,
    },
    {
      name: opponent === "player" ? "Player 2" : "CPU",
      image: opponent === "player" ? playerTwo : cpu,
    },
  ];

  function play() {
    const newScores = [...scores];
    newScores[turn]++;
    setScores(newScores);
    setTurn((turn + 1) % 2);
    setCounter(TIMER);
  }

  function restart() {
    setCounter(TIMER);
    setScores([0, 0]);
  }

  return (
    <Page>
      <PlayerCard play={players[0]} score={scores[0]} />
      <Main>
        <Top pause={pause} setPause={setPause} restart={restart} />
        <GameBoard
          counter={counter}
          play={play}
          turn={turn}
          opponent={opponent}
        />
      </Main>
      <PlayerCard play={players[1]} score={scores[1]} />
    </Page>
  );
}

const Main = styled.div`
  width: 632px;
  margin: 0 60px;
`;
