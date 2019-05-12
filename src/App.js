import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './reset.css'
import './App.css';
import Nav from './containers/Nav'
import Main from './containers/Main'


// import 'normalize.css'


class App extends Component {

  componentWillMount(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
  }
  render() {
    return (
      <div className="App">
      <Main/>
      <Nav/>
      </div>
    );
  }
}

export default App;
