import React from 'react'
const moment = require('moment')

const MovieContent = (props) => {
  const actors = props.actors.map(actor => <li key={actor}>{actor}</li>)
  return (
    <div className="movie-content">
      <div className="name">{props.name}</div>
      <div className="desc">{props.description}</div>
      <div className="actors-date">
        <div className="actors">
          <p>Actors</p>
          <ul>{actors}</ul>
        </div>
        <div className="release-date"><p>Released On:</p>{moment(props.date).format('Do MMM YYYY')}</div>
      </div>
    </div>
  )
}
export default MovieContent
