import React from 'react'

const Filter = (props) => {
  return (
    <div className="filter">
      <div> Filter By Actors </div>
      <div className="options">
        <select selected="all">
          <option value='all'>All</option>
        </select>
      </div>
    </div>
  )
}
export default Filter
