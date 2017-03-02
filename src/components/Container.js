import React from 'react'
import '../styles/container.css'
import Filter from './Filter'
import MovieList from './MovieList'
import apiInterface from '../apiInterface'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = { movies: [], loading: true, actors: [] }
  }
  render () {
    if (this.state.loading) return (<div className="container">loading</div>)
    return (
      <div className="container">
        <Filter />
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
  componentDidMount () {
    apiInterface.readMovieRefs()
      .then(result => {
        this.setState({ movies: result, loading: false })
      })
  }
}
