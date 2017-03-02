import React from 'react'
import '../styles/container.css'
import Filter from './Filter'
import MovieList from './MovieList'
import apiInterface from '../apiInterface'
import helper from '../helpers/helperFunctions'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = { movies: [], currentSelectedActor: 'all', loading: true, actors: [] }
  }

  onActorSelected (e) {
    this.setState({ currentSelectedActor: e.target.value })
  }

  render () {
    if (this.state.loading) return (<div className="container">loading</div>)
    const moviesToShow = this.state.currentSelectedActor === 'all' ? this.state.movies : helper.getMoviesBasedOnActor(this.state.movies, this.state.currentSelectedActor)
    return (
      <div className="container">
        <Filter actors={this.state.actors} onActorSelected={this.onActorSelected.bind(this)} selected={this.state.currentSelectedActor}/>
        <MovieList movies={moviesToShow} />
      </div>
    )
  }
  componentDidMount () {
    apiInterface.readMovieRefs()
      .then(result => {
        this.setState({ movies: result, loading: false, actors: helper.generateActorsList(result) })
      })
  }
}
