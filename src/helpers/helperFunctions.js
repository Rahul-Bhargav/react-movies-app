const helper = {}

helper.ratingColors = {
  '1': 'red',
  '2': 'red',
  '3': 'blue',
  '4': 'blue',
  '5': 'green'
}

helper.generateActorsList = (movies) => {
  if (movies === undefined) return 'invalid input'
  if (!Array.isArray(movies)) return 'invalid input'
  if (movies.length === 0) return 'invalid input'
  let invalidIndices = []
  let isValid = true
  movies.forEach((movie, index) => {
    if (movie.actors === undefined) {
      isValid = false
      invalidIndices.push(index)
    }
    if (!Array.isArray(movie.actors) && isValid) {
      isValid = false
      invalidIndices.push(index)
    }
  })
  if (!isValid) return 'invalid input at ' + invalidIndices
  let nonUniqueActors = movies.reduce((acc, movie) => {
    return acc.concat(movie.actors)
  }, [])
  var uniqueActors = nonUniqueActors.filter((actor, index, self) => self.indexOf(actor) === index)
  return uniqueActors
}

helper.getMoviesBasedOnActor = (movies, actor) => {
  if (movies === undefined) return 'invalid movies input'
  if (!Array.isArray(movies)) return 'invalid movies input'
  if (movies.length === 0) return 'invalid movies input'
  let invalidIndices = []
  let isValid = true
  movies.forEach((movie, index) => {
    if (movie.actors === undefined) {
      isValid = false
      invalidIndices.push(index)
    }
    if (!Array.isArray(movie.actors) && isValid) {
      isValid = false
      invalidIndices.push(index)
    }
  })
  if (!isValid) return 'invalid input in movies at ' + invalidIndices
  if (typeof actor !== 'string') return 'invalid actor input'

  return movies.filter(movie => {
    return movie.actors.some(elem => elem === actor)
  })
}

helper.getRatingColor = (rating) => {
  return helper.ratingColors[rating]
}

export default helper
