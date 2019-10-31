import React from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,
    };
  }

  addStrike = ()  => { 
    this.setState({
      strikes: this.state.strikes+1
    })
    if (this.state.strikes>2){
      this.setState({
        strikes: this.state.strikes=0
      })
    }
  };  

  addBall = ()  => {
    this.setState({
      balls: this.state.balls+1
    })
    if (this.state.balls>3){
      this.setState({
        balls: this.state.balls=0
      })
    }
  }; 

  addFoul = ()  => {
    this.setState({
      strikes: this.state.strikes+1
    })
    if (this.state.strikes>1){
      this.setState({
        strikes: this.state.strikes=2
      })
    }
  }; 

  addClear = ()  => {
    this.setState({
      balls: this.state.balls=0,
      strikes: this.state.strikes=0
    })
  }; 
  
render() {  
  return (
    <div> 
      <h2>Counter</h2>
      <Display balls={this.state.balls} strikes={this.state.strikes}/>
      <Dashboard addStrike={this.addStrike} addBall={this.addBall} addFoul={this.addFoul} addClear={this.addClear}/>
    </div>
  );
 } 
}

export default App;
