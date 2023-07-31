import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
color:grey;
font-family:'Muli';
font-size: 22px;
  display: flex;
  padding: 30px;
   background-color: rgba(0, 0, 0, 0.5);
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Img = styled.img`
  width: 360px;
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
    
`;

export const MovieTitle = styled.h2`
font-family:'Muli';
color: orange;
letter-spacing: 1px;
 
  margin-left: 0;
`;

export const AddInfo = styled.h3`
font-size: 20px;
color: grey;
font-family:'Muli';
  margin-left: 35px;
  margin-bottom: 20px;
  
`;

export const InfoList = styled.ul`
font-family:'Muli';
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px 0px 20px;
    
`;

export const InfoLink = styled(Link)`
 padding: 10px 20px;
 margin-left: 30px;
  text-decoration: none;
 border: 2px solid #ff6c00;
 color:#ff6c00;
 border-radius:10px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
  background-color: #ff6c00;
    color: #fff;
    transform: scale(1.1);}
      &.active {
    color: #ececf1;
    font-weight: 700;
    transform: scale(1.1);
     background-color: #0e0e0e;

  border-radius: 2rem;
  display: inline-block;
  padding: 10px 20px;
  }
`;

export const BtnLink = styled(Link)`

padding: 10px 30px;
text-decoration:none;
font-family:'Muli';
border: 1px solid #ff8c00;
    border-radius: 10px;
    color: #ff8c00;
    font-size: 14px;
    height: 30px;
    width: 100px;
      &:hover {
  background-color: #ff6c00;
    color: #fff;}`
