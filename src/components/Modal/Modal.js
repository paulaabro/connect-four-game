import { styled } from "styled-components";
import { MenuButtonStyle } from "../../styles/MenuButtonStyle";
import {BorderStyle} from "../../styles/BorderStyle";
import {useNavigate} from "react-router-dom";

export default function Modal({ restart, setPause, close }) {
  const navigate = useNavigate();
  function continueGame() {
    close();
    setPause(false);
  }

  function restartGame() {
    close();
    setPause(false);
    restart();
  }

  return (
    <>
    <Wrapper>
    </Wrapper>
    <Container>
      <h2>PAUSE</h2>
      <Button bgcolor="white" color="black" onClick={continueGame}>CONTINUE GAME</Button>
      <Button bgcolor="white" color="black" onClick={restartGame}>RESTART</Button>
      <Button bgcolor="pink" color="white" onClick={() => navigate("/")}>QUIT GAME</Button>
    </Container>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`
const Container = styled(BorderStyle)`
  width: 480px;
  height: 491px;
  background: ${props => props.theme.purple};

  position: fixed;
  top: calc(50% - 540px / 2);
  left: calc(50% - 240px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
  h2 {
    font-size: 56px;
    line-height: 71px;
    text-align: center;
  color: ${props => props.theme.white};
    margin-bottom: 24px;
  }
`;

const Button = styled(MenuButtonStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
`
