import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
 
`;

export const SNavLink = styled(NavLink)`
font-family:'Muli';
  font-weight: 600;
  font-size: 25px;
  color:red;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #ececf1;
    font-weight: 700;
    transform: scale(1.1);
     background-color: #ff8c00;

  border-radius: 2rem;
  display: inline-block;
 
  padding: 10px 20px;
  }
`;
