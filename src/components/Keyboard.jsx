import React from 'react';
import { Key, KeyboardContainer } from './Keyboard.styled';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const keys = alphabet.map(letter => (
  <Key>{letter}</Key>
));

const Keyboard = () => {
  return (
    <KeyboardContainer>
      {keys}
    </KeyboardContainer>
  )
}


export default Keyboard;