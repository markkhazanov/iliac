import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}


  // <Header />
  
  // <Footer />