import React from 'react'
import '../styles/App.css'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = { movies: [], loading: true, actors: [] }
  }
  render () {
    return (
      <div className="container">
        <div className="filter">
          <p>Filter by Actors</p>
          <select selected="all">
            <option value='all'>All</option>
          </select>
        </div>
      </div>
    )
  }
}
