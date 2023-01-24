import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.aside<{isOpen: boolean}>`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: #0D0D0D;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0 3s ease-in-out;
  opacity: ${props=>props.isOpen ? '100%' : '0'};
  top: ${props=>props.isOpen ? '0' : '-100%'};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0,2s ease-in-out;
  }
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
     grid-template-rows: repeat(6, 60px);
  }
`;