const helper = {}

helper.generateActorsList = (movies) => {
  let nonUniqueActors = movies.reduce((acc, movie) => {
    return acc.concat(movie.actors)
  }, [])
  var uniqueActors = nonUniqueActors.filter((actor, index, self) => self.indexOf(actor) === index)
  return uniqueActors
}

helper.getMoviesBasedOnActor = (movies, actor) => {
  return movies.filter(movie => {
    return movie.actors.some(elem => elem === actor)
  })
}

export default helper
