import { styled } from "styled-components";
import logo from "../assets/images/logo.svg";
import { TopButtonStyle } from "../styles/TopButtonStyle";
import Portal from "./Modal/Portal";

export default function Top({ pause, setPause, restart }) {
  return (
    <Container>
      <Portal restart={restart} pause={pause} setPause={setPause} />
      <img src={logo} alt="connect_four_logo" />
      <TopButtonStyle onClick={restart}>RESTART</TopButtonStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
