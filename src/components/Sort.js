import React from 'react'

class Sort extends React.Component {
  render() {
    return (
      <div>
        <h4>This is Sort</h4>
        <select>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>
      </div>
    )
  }
}

export default Sort;
