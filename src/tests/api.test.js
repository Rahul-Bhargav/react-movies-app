import apiInterface from '../apiInterface'

it('Api Interface should return a json object', (done) => {
  apiInterface.readMovie()
    .then(response => {
      expect(response).toBeInstanceOf(Object)
      done()
    })
})

it('Api Interface should return a json object', (done) => {
  apiInterface.readMovieRefs()
    .then(response => {
      expect(response).toBeInstanceOf(Object)
      done()
    })
})

it('Api Interface should return a Array', (done) => {
  apiInterface.readMovieRefs()
    .then(response => {
      expect(response).toBeInstanceOf(Array)
      done()
    })
})

