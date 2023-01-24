import styled from "styled-components";
import {Link} from 'react-scroll';

type ButtonProps = {
  primary?: boolean;
  dark?: boolean;
  big?: boolean;
  fontBig?: boolean
}

export const Button = styled(Link)<ButtonProps>`
  border-radius: 50px;
  background-color: ${props=>props.primary ? '01bf71' : '#010606'};
  white-space: nowrap;
  padding: ${props=>props.big ? '14px 48px' : '12px 30px'};
  color: ${props=>props.dark ? '#010606' : '#fff'};
  font-size: ${props=>props.fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${props=>props.primary ? '#fff' : '#010606'};
  }
`;