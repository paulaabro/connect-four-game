import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  width: 400px;
  height: 72px;

  font-size: 24px;
  line-height: 31px;

  background-color: ${props => props.theme[props.bgcolor]};
  border: 3px solid ${props => props.theme.black};
  box-shadow: 0 10px 0 ${props => props.theme.black};
  border-radius: 20px;

  &:hover {
    border-color: ${props => props.theme.darkPurple};
    box-shadow: 0 10px 0 ${props => props.theme.darkPurple};
  }
`;
