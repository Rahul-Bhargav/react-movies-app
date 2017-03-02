import apiInterface from '../apiInterface'

it('Api Interface should return a json object', () => {
  apiInterface.readMovie()
    .then(response => {
      console.log(response)
      expect(response).toEqual(Object)
    })
})

it('Api Interface should return a json object', () => {
  apiInterface.readMovieRefs()
    .then(response => {
      console.log(response)
      expect(response).toEqual(Object)
    })
})

it('Api Interface should return a Array', () => {
  apiInterface.readMovieRefs()
    .then(response => {
      console.log(response)
      expect(response).toEqual(Array)
    })
})
