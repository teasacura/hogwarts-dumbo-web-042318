import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <div className="ui eight wide column">
        <h4>Filter</h4>
        <select>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="ungreased">Ungreased</option>
        </select>
      </div>
    )
  }
}

export default Filter;
