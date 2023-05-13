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
  const [score0, setScore0] = useState(0);
  const [score1, setScore1] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [turn, setTurn] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let interval = null;

    if (!pause) {
      interval = setInterval(() => {
        setCounter(counter => {
          if (counter === 1) clearInterval(interval);
          return counter - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pause]);

  const play0 = {
    name: opponent === "player" ? "Player 1" : "You",
    image: opponent === "player" ? playerOne : you,
  };

  const play1 = {
    name: opponent === "player" ? "Player 2" : "CPU",
    image: opponent === "player" ? playerTwo : cpu,
  };

  return (
    <Page>
      <PlayerCard play={play0} score={score0} />
      <Main>
        <Top pause={pause} setPause={setPause} />
        <GameBoard counter={counter} />
      </Main>
      <PlayerCard play={play1} score={score1} />
    </Page>
  );
}

const Main = styled.div`
  width: 632px;
  margin: 0 60px;
`;
