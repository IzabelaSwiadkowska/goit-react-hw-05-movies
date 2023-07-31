import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 96px;
  font-weight: 700;
  color: #ff6c00;
  text-align: center;
`;
export const BtnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 10px 30px;
  text-decoration: none;
  font-family: 'Muli';
  border: 1px solid #ff8c00;
  border-radius: 10px;
  color: #ff8c00;
  font-size: 16px;
  height: 30px;
  width: 150px;
  &:hover {
    background-color: #ff6c00;
    color: #fff;
  }
`;
