import styled from 'styled-components';
import WordToGuessBox from './components/WordToGuessBox';

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Header = styled.h1`
  justify-content: center;
  letter-spacing: 3px;
  font-size: 25px;
  color: grey;
`;

const StyledWordToGuessBox = styled(WordToGuessBox)`
  padding: 10px;
`;

export {
  AppBody,
  Header,
  StyledWordToGuessBox,
}