 
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  
`;

export const HomeTitle = styled.h1`
font-family:'Muli';
  font-weight: 700;
  color:#fff;
  margin: 30px, 0;
  text-decoration: none;
  
`;

export const MovieUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const MovieItem = styled.li`
background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 220px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  padding: 0px;
  margin: 0px;
  height: 300px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MovieTitle = styled.div`
font-family:'Muli';
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  margin: 0px;
  font-size: 15px;
  color: #fff;
   
`;
