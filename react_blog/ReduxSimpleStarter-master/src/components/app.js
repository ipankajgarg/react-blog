import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
       <header>Header</header>
        {this.props.children}
        <footer>footer</footer>
        </div>
    );
  }
}
