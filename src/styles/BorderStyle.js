import { styled } from "styled-components";

export const BorderStyle = styled.div`
  border: 3px solid ${props => props.theme.black};
  box-shadow: 0 10px 0px ${props => props.theme.black};
  border-radius: 40px;
`;
