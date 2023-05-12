import { styled } from "styled-components";
import iconcheck from "../assets/images/icon-check.svg";
import { useNavigate } from "react-router-dom";

export default function RulesPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Rules</Title>
      <Subtitle>Objective</Subtitle>
      <Description>
        Be the first player to connect 4 of the same colored discs in a row (either vertically,
        horizontally, or diagonally).
      </Description>
      <Subtitle>How to play</Subtitle>
      <div>
        <ItemNumber>1</ItemNumber>
        <Description>Red goes first in the first game.</Description>
      </div>
      <div>
        <ItemNumber>2</ItemNumber>
        <Description>
          Players must alternate turns, and only one disc can be dropped in each turn.
        </Description>
      </div>
      <div>
        <ItemNumber>3</ItemNumber>
        <Description>The game ends when there is a 4-in-a-row or a stalemate.</Description>
      </div>
      <div>
        <ItemNumber>4</ItemNumber>
        <Description>The starter of the previous game goes second on the next game.</Description>
      </div>
      <Button onClick={() => navigate("/game")}>
        <img src={iconcheck} alt="check_icon" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 480px;
  height: 537px;
  border-radius: 40px;
  background-color: ${props => props.theme.white};
  border: 3px solid ${props => props.theme.black};
  box-shadow: 0px 10px 0px ${props => props.theme.black};
  color: ${props => props.theme.black};
  padding: 30px 34px;
  position: relative;

  div {
    display: flex;
    gap: 19px;
    margin-bottom: 12px;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  line-height: 71px;
  text-align: center;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  margin: 32px 0 16px;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.purple};
  text-transform: uppercase;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  mix-blend-mode: normal;
  opacity: 0.66;
`;

const ItemNumber = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: -40px;
  left: calc(50% - 32px);
`;
