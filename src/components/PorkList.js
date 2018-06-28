import React from 'react'
import Pork from './Pork'

class PorkList extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => <Pork key={hog.name} hog={hog} />)}
      </div>)
  }
}

export default PorkList;
