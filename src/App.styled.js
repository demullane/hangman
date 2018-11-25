import styled from 'styled-components';
import WordsToGuessBox from './components/WordsToGuessBox';

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

const StyledWordsToGuessBox = styled(WordsToGuessBox)`
  padding: 25px;
`;

export {
  AppBody,
  Header,
  StyledWordsToGuessBox,
}