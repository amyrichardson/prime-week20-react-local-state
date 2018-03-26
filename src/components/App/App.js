import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Bob',
        city: 'Smallville'
      }
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNameChange(event) {
    console.log('hi');
    this.setState({ user: { ...this.state.user, name: event.target.value } });
  }
  handleCityChange(event) {
    console.log('hi');
    this.setState({ user: { ...this.state.user, city: event.target.value } });
  }
  handleButtonClick() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleNameChange} />
        <input onChange={this.handleCityChange} />
        {this.state.user.name} is from {this.state.user.city}
        <button onClick={this.handleButtonClick}>Button</button>
      </div>
    );
  }
}

export default App;
