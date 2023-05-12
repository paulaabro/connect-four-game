import { styled } from "styled-components";
import Page from "../components/Page";
import { BorderStyle } from "../styles/BorderStyle";
import logo from "../assets/images/logo.svg";
import { ButtonStyle } from "../styles/ButtonStyle";
import playerVsCpu from "../assets/images/player-vs-cpu.svg";
import playVsPlayer from "../assets/images/play-vs-player.svg";

export default function MenuPage() {
  return (
    <Page bgcolor="darkPurple">
      <Container>
        <img src={logo} alt="connect_four_logo" />
        <div>
          <Button bgcolor="pink">
            <div>
              <span>PLAY VS CPU</span>

              <img src={playerVsCpu} alt="player_vs_cpu" />
            </div>
          </Button>

          <Button bgcolor="yellow">
            <div>
              <span>PLAY VS PLAYER</span>

              <img src={playVsPlayer} alt="player_vs_cpu" />
            </div>
          </Button>

          <Button bgcolor="pink">
            <div>
              <span>GAME RULES</span>
            </div>
          </Button>
        </div>
      </Container>
    </Page>
  );
}

const Container = styled(BorderStyle)`
  width: 480px;
  height: 537px;
  background-color: ${props => props.theme.purple};
`;

const Button = styled(ButtonStyle)`
  padding: 0 20px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
