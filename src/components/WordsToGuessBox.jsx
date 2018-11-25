import React from 'react';
import PropTypes from 'prop-types';
import { Char, Container } from './WordsToGuessBox.styled';

const WordsToGuessBox = (props) => {
  const arrToGuess = props.stringToGuess.toUpperCase().split('');
  return (
    <Container className={props.className}>
      {arrToGuess.map(char => {
        const isLetterGuessed = props.lettersGuessed.includes(char);
        return (
          <Char isSpace={char===' '}>
            {isLetterGuessed ? char : null}
          </Char>
        )
      })}
    </Container>
  )
}

WordsToGuessBox.propTypes = {
  className: PropTypes.string,
  lettersGuessed: PropTypes.arrayOf(PropTypes.string),
  stringToGuess: PropTypes.string.isRequired,
}

WordsToGuessBox.defaultProps = {
  className: null,
  lettersGuessed: [],
}

export default WordsToGuessBox;