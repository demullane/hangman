import React, { Component } from 'react';

class DogImageComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      breed: '',
      image: '',
    }
  }
  componentWillMount() {
    this.setState({ isLoading: true })
    const url = 'https://dog.ceo/api/breeds/image/random';
    const config = {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }
    fetch(url, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        };
        // else throw error
      }).then((data) => {
        // data.message = "https://images.dog.ceo/breeds/briard/n02105251_7996.jpg"
        const breed = data.message.split('/')[4];
        const image = data.message.split('/')[5];
        this.setState({ breed, image });
      }).then(() => {
        this.setState({ isLoading: false });
      })
      // catch
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <img src={`https://images.dog.ceo/breeds/${this.state.breed}/${this.state.image}`} alt={this.state.breed} />
      )
    } else {
      return null;
    }
  }
}

export default DogImageComponent;