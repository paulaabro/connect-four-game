import { useParams } from "react-router-dom";
import Page from "../components/Page";
import PlayerCard from "../components/PlayerCard";
import playerOne from "../assets/images/player-one.svg";
import you from "../assets/images/you.svg";
import cpu from "../assets/images/cpu.svg";
import playerTwo from "../assets/images/player-two.svg";

export default function GamePage() {
  const { opponent } = useParams();

  const play1 = {
    name: opponent === "player" ? "Player 1" : "You",
    image: opponent === "player" ? playerOne : you,
  };

  const play2 = {
    name: opponent === "player" ? "Player 2" : "CPU",
    image: opponent === "player" ? playerTwo : cpu,
  };

  return (
    <Page>
      <PlayerCard play={play1} score="11" />
      <PlayerCard play={play2} score="20" />
    </Page>
  );
}
