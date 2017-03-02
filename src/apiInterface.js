const api = {
  readMovie: function () {
    return fetch(`https://movie-api-atlrumqzze.now.sh/movies`, { method: 'get' })
      .then((result) => {
        return result.json()
      })
      .catch(err => {
        console.log(err)
      })
  },
  readMovieRefs: function () {
    return fetch(`https://movie-api-atlrumqzze.now.sh/movies-ref`, { method: 'get' })
      .then((result) => {
        return result.json()
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default api
