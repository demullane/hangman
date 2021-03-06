import React from 'react';
import PropTypes from 'prop-types';
import { Key, KeyboardContainer } from './Keyboard.styled';

const Keyboard = (props) => {
  const letters = props.unselected.concat(props.selected).sort();

  return (
    <KeyboardContainer>
      {letters.map((letter) => {
        const isSelected = props.selected.includes(letter);
        return <Key
          key={letter}
          value={letter}
          isSelected={isSelected}
          onClick={props.onClick}>{letter}
        </Key>
      })}
    </KeyboardContainer>
  )
}

Keyboard.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  unselected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}

Keyboard.defaultProps = {
  selected: [],
}

export default Keyboard;
