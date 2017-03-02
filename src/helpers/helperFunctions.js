const helper = {}

helper.ratingColors = {
  '1': 'red',
  '2': 'red',
  '3': 'blue',
  '4': 'blue',
  '5': 'green'
}

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

helper.getRatingColor = (rating) => {
  return helper.ratingColors[rating]
}

export default helper
