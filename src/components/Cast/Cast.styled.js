import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #3f51b542;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      background-color: rgba(0, 0, 0, 0.5);
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
  transition-duration: 300ms;
`;

export const CastItem = styled.li`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
    background-color: rgba(0, 0, 0, 0.5);
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

export const CastDescr = styled.div`
font-family:'Muli';
font-size:25px;
letter-spacing: 2px;
  padding: 5px;
  margin: 0px;
  font-size: 10px;
  color: #fff;
`;

export const CastName = styled.h3`
font-size: 18px;
padding-bottom: 3px;
  margin: 0px;
`;

export const CastChar = styled.p`
font-size: 16px;
padding-bottom: 3px;
  margin: 0px;
`;
export const Span = styled.span`
color:  #ff6c00;`