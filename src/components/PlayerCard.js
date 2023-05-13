import { styled } from "styled-components";
import { BorderStyle } from "../styles/BorderStyle";

export default function PlayerCard({ play, score }) {
  return (
    <Container>
      <img src={play.image} alt={play.name} />
      <p>{play.name}</p>
      <h2>{score}</h2>
    </Container>
  );
}

const Container = styled(BorderStyle)`
  width: 141px;
  height: 160px;

  border-radius: 20px;
  background-color: ${props => props.theme.white};
  position: relative;

  margin-bottom: 100px;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }

  h2 {
    font-size: 56px;
    line-height: 71px;
    text-align: center;
  }

  img {
    position: absolute;
    top: -26px;
  }
`;
