import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsItems from './components/NewsItems';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar/>
        <News/>
        {/* <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/> */}
      </div>
    )
  }
}

// MY API KET
// ed9b1d28af3644cda53f8d85664c1abf

