import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PorkList from './PorkList'
import FilterList from './FilterList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filter: 'all',
      sort: null
    }
  }

  render() {
    return (
      <div className="App">
          <Nav  />
          <FilterList />
          <PorkList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
