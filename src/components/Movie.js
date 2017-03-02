import React from 'react'
import '../styles/movie.css'

const Movie = (props) => {
  const themeStyle = {
    backgroundColor: props.movie.theme,
    display: 'inline-block',
    height: '80px',
    flexBasis: '10%'
  }
  return (
    <div className="movie">
      <div style={themeStyle} />
      <div> {props.movie.name} </div>
      <div className="description">
        {props.movie.description}
      </div>
    </div>
  )
}
export default Movie
