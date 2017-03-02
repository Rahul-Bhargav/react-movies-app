import React from 'react'
import '../styles/movie.css'
import MovieRating from './movieRating'
import MovieContent from './movieContent'

const Movie = (props) => {
  const themeStyle = {
    backgroundColor: props.movie.theme
  }
  return (
    <div className="movie">
      <div className="theme-strip" style={themeStyle} />
      <MovieContent
        name={props.movie.name}
        description={props.movie.description}
        actors={props.movie.actors}
        date={props.movie.releaseDate}
      />
      <MovieRating rating={props.movie.rating} />
    </div>
  )
}
export default Movie
