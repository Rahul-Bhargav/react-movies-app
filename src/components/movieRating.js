import React from 'react'
import helper from '../helpers/helperFunctions'

const MovieRating = (props) => {
  const colorToShow = helper.getRatingColor(props.rating).toString()
  return (
    <div className="movie-rating" >
      <p className="rating" style={{ color: colorToShow }}>{props.rating}/5</p>
    </div>
  )
}
export default MovieRating
