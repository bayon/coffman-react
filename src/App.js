import React, { Component } from 'react';
import './App.css';
import HeaderUnit from './components/layout/HeaderUnit';
import BodyUnit from './components/layout/BodyUnit';
import FooterUnit from './components/layout/FooterUnit';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container mx-auto">
            <div className="min-h-screen md:flex md:flex-col "  >
            <HeaderUnit></HeaderUnit>
            
            <BodyUnit></BodyUnit>
            <FooterUnit></FooterUnit>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
