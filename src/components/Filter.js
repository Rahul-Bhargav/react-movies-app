import React from 'react'

const Filter = (props) => {
  const actors = props.actors.map(actor => <option key={actor} value={actor}>{actor}</option>)
  return (
    <div className="filter">
      <div> Filter By Actors </div>
      <div className="options">
        <select value={props.selected} onChange={props.onActorSelected}>
          <option value='all'>All</option>
          {actors}
        </select>
      </div>
    </div>
  )
}
export default Filter
