import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie">
      <div> {props.movie.name} </div>
      <div className="description">
        {props.movie.description}
      </div>
    </div>
  )
}
export default Movie
