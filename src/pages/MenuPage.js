import { styled } from "styled-components";
import Page from "../components/Page";
import { BorderStyle } from "../styles/BorderStyle";
import logo from "../assets/images/logo.svg";
import { MenuButtonStyle } from "../styles/MenuButtonStyle";
import playerVsCpu from "../assets/images/player-vs-cpu.svg";
import playVsPlayer from "../assets/images/play-vs-player.svg";
import { useNavigate } from "react-router-dom";

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <Page bgcolor="darkPurple">
      <Container>
        <img src={logo} alt="connect_four_logo" />
        <div>
          <Button bgcolor="pink" color="white" onClick={() => navigate("/game/cpu")}>
            <div>
              <span>PLAY VS CPU</span>

              <img src={playerVsCpu} alt="player_vs_cpu" />
            </div>
          </Button>

          <Button bgcolor="yellow" color="black"  onClick={() => navigate("/game/player")}>
            <div>
              <span>PLAY VS PLAYER</span>

              <img src={playVsPlayer} alt="player_vs_cpu" />
            </div>
          </Button>

          <Button bgcolor="white" color="black"  onClick={() => navigate("/rules")}>
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
  background-color: ${(props) => props.theme.purple};
  padding: 70px 40px 60px;

  & > img {
    display: block;
    margin: 0 auto 79px;
  }
`;

const Button = styled(MenuButtonStyle)`
  padding: 0 20px;
  margin-bottom: 30px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
