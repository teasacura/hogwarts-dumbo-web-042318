import React from 'react'
import Sort from './Sort'
import Filter from './Filter'

class FilterList extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        <Filter />
        <Sort />
      </div>
    )
  }
}

export default FilterList;
