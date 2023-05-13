import { styled } from "styled-components";

export const TopButtonStyle = styled.button`
  height: 39px;
  background-color: ${props => props.theme.darkPurple};
  color: ${props => props.theme.white};
  border-radius: 20px;
  padding: 10px 21px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;
