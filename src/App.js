import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import FileUpload from './component/FileUpload'
import { Upload, Icon, message } from 'antd';
import Nav from './containers/Nav'
import Main from './containers/Main'
import 'normalize.css'


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
