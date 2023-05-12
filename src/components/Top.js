import { styled } from "styled-components";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Top() {
  const navigate = useNavigate();
  return (
    <Container>
      <ButtonTop onClick={() => navigate("/")}>MENU</ButtonTop>
      <img src={logo} alt="connect_four_logo" />
      <ButtonTop>RESTART</ButtonTop>
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
