import React from 'react';
import PropTypes from 'prop-types';

const WordToGuessBox = (props) => (<div className={props.className}>WORD TO GUESS</div>)

WordToGuessBox.propTypes = {
  className: PropTypes.string,
}

WordToGuessBox.defaultProps = {
  className: null,
}

export default WordToGuessBox;