import React, { Component } from 'react';
import './App.css';
import DogImageComponent from './components/DogImageComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isImgLoading: false,
    }
  }

  // setState(key, value) {
  //   debugger;
  // }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          HANGMAN
        </h1>
        <DogImageComponent className="dog-image"/>
      </div>
    );
  }
}

export default App;

// 1. need a word generator, for word to be guessed
  // api?
  // maximum character limit? 
  // EXTRA: easy, medium, hard levels
// 2. need to submit a letter
  // check if letter exists in word
  // VISUAL: show letters guessed
  // VISUAL: if it does exist fill in blank spaces with letter
  // VISUAL: if it doesn't add a body part
    // body parts: head, torso, right and left arms, right and left leg
// 3. submit button and field for submitting (maybe show letters to choose from?)
// 4. some sort of "You won!" or "You died :(" animation
// LATER
// styling
// tests
// fork and change to typescript

