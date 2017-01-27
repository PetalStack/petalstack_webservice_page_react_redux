import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/react-datepicker/dist/react-datepicker.min.css';
import Task from './components/Task/Task'

class App extends Component {
  constructor(){
    super()
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (

        <div className="">
            <img src={logo} className="App-logo" alt="logo" />
          <Task/>
        </div>
      );
  }
}

export default App;
