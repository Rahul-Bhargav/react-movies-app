const api = {
  readMovie: function () {
    return fetch(`https://movie-api-atlrumqzze.now.sh/movies`, { method: 'get' })
      .then((result) => {
        return result.json()
      })
  },
  readMovieRefs: function () {
    return fetch(`https://movie-api-atlrumqzze.now.sh/movies-ref`, { method: 'get' })
      .then((result) => {
        return result.json()
      })
  }
}

export default api
