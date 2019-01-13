import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from './actions/message'
import LandingPage from './screens/LandingPage';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0
    }
    
  }
  _onChange = (value) => {
      this.props.dispatch(setMessage(value))
    }
  route = () => {
    this.setState({
      screen: !this.state.screen
    })
  }
  render () {
    const {message} = this.props.messageReducer;
    return (
    <div>
      <LandingPage/>
    </div>
    )
  }
}

export default connect(state => state)(App);
