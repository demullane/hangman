import React, { Component } from 'react';
import DogImageComponent from './components/DogImageComponent';
import { AppBody, Header, StyledWordToGuessBox } from './App.styled';
import Illustration from './components/Illustration';
import Keyboard from './components/Keyboard';

class App extends Component {
  constructor() {
    super();
    this.submitLetter = this.submitLetter.bind(this);
    this.state = {
      isImgLoading: false,
      selectedKeys: [],
      unselectedKeys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }
  }

  submitLetter = (event) => {
    const chosenLetter = event.target.value;
    this.setState(prevState => ({
      ...prevState, 
      selectedKeys: prevState.selectedKeys.concat(chosenLetter),
      unselectedKeys: prevState.unselectedKeys.filter(letter => letter !== chosenLetter),
    }));
  }

  render() {
    return (
      <AppBody>
        <Header>HANGMAN</Header>
        {/* <DogImageComponent /> */}
        <Illustration />
        <StyledWordToGuessBox />
        <Keyboard 
          selected={this.state.selectedKeys}
          unselected={this.state.unselectedKeys}
          onClick={this.submitLetter}
        />
      </AppBody>
    );
  }
}

export default App;

// 1. need a word generator, for word to be guessed - DOGGO IMAGE (x)

// 2. need to submit a letter
  // check if letter exists in word
  // VISUAL: show letters guessed (x)
  // VISUAL: if it does exist fill in blank spaces with letter
  // VISUAL: if it doesn't add a body part
    // body parts: head, torso, right and left arms, right and left leg (x)

// 3. submit button and field for submitting (maybe show letters to choose from?) (x)

// 4. some sort of "You won!" or "You died :(" text

// 5. play again (reset) button

// LATER
  // styling
  // tests
  // fork and change to typescript
  // remove dog api?? and add list of simple words?
  // refactor svg file

  // EXTRA
  // dog or cat images
  // hangman image gets darker and darker as you play more letters?

