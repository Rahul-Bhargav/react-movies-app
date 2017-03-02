import generateActorsList from '../helpers/helperFunctions'

it('generateActorsList should return array', () => {
  const result = generateActorsList([])
  expect(result).toBeInstanceOf(Array)
})
