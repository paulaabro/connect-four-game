import { styled } from "styled-components";

export default function Page({ children, bgcolor }) {
  return <Container bgcolor={bgcolor}>{children}</Container>;
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme[props.bgcolor]};
`;
