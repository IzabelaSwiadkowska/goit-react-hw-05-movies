import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
position: relative;
    height: 40px;
    width: 350px;
    display: flex;
    text-align: center;
    border-radius: 10px;
    border: 0px;
    outline: none;
    margin: 0px auto 20px;
    padding: 0px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 1px, rgba(0, 0, 0, 0.5) 0px 4px 4px, rgba(0, 0, 0, 0.5) 1px 4px 6px, rgba(0, 0, 0, 0.12) 0px 1px 1px inset, rgba(0, 0, 0, 0.15) 0px 4px 4px inset, rgba(0, 0, 0, 0.16) 1px 4px 6px inset;`


export const Input = styled.input`
font-family:'Muli';
font-size:18px;
    height: 40px;
    width: 290px;
    padding: 0px 0px 0px 15px;
    border: 0px;
    outline: none;
    background: transparent;
    color: rgb(255, 255, 255);
    opacity: 0.75;`

export const Button = styled.button`
        position: relative;
    cursor: pointer;
    display: block;
    height: 40px;
    width: 80px;
    border: 0px;
    padding: 0px;
    font-family:'Muli';
    font-size: 16px;
    border-radius: 0px 10px 10px 0px;
    background-color: rgb(255, 140, 0);
    color: rgb(255, 255, 255);
     
`

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
  padding: 20px;
  margin: 0px;
  font-size: 18px;
  color: #fff;
   
`;
