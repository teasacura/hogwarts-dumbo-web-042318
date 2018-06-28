import React from 'react'

class Sort extends React.Component {
  render() {
    return (
      <div className="ui eight wide column">
        <h4>This is Sort</h4>
        <div>
          <select>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Sort;
