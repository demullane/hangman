import styled from 'styled-components';

const Char = styled.div`
  color: grey;
  font-weight: 600;
  font-size: 15px;
  width: 30px;
  height: 30px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({isSpace}) => isSpace ? 'white' : 'grey'};
  padding: 5px;
  margin: 5px;

  align-items: flex-start;
  text-align: center;
  box-sizing: border-box; 
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* max-width: 300px; */
`;

export {
  Char,
  Container,
}