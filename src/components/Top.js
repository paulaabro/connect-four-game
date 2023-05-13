import { styled } from "styled-components";
import logo from "../assets/images/logo.svg";

export default function Top({ pause, setPause, restart }) {
  return (
    <Container>
      <ButtonTop onClick={() => setPause(!pause)}>MENU</ButtonTop>
      <img src={logo} alt="connect_four_logo" />
      <ButtonTop onClick={restart}>RESTART</ButtonTop>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonTop = styled.button`
  height: 39 px;
  background-color: ${(props) => props.theme.darkPurple};
  color: ${(props) => props.theme.white};
  border-radius: 20px;
  padding: 10px 21px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;
