import { styled } from "styled-components";

export default function Page({ children, bgColor }) {
  return <Container bgColor={bgColor}>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme[props.bgColor]};
`;
