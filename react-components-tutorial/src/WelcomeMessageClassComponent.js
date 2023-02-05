import React, { Component } from 'react';

class WelcomeMessageClassComponent extends Component {

  constructor(props) {
    super(props);    
  }  

  render() {
    return (
        <h1>Hello, Welcome {this.props.name}! I am a Class Component</h1>
    );
  }
}

export default WelcomeMessageClassComponent;