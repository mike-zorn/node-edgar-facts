var Random = require('random-js')
var r = new Random(Random.engines.mt19937().autoSeed())
var facts = [
  'Edgar will never die',
  'Edgar is an angel',
  'The swirls in Edgar\'s butt are called Orchids',
  'Edgar is the most beautiful creature in the universe',
  'Edgar\'s favorite color is purple, because it signifies royalty',
  'Edgar is the perfect shape',
  'Edgar\'s butt-hole is flirty',
  'Edgar witches from 5 p.m. to 9 p.m. every night',
  'Edgar has the teeth of a much younger dog',
  'If you try to trim Edgar\'s toenails, he will end you',
  'Edgar prefers looking to watching',
  'Despite popular belief, Edgar was not in the movie Men in Black',
  'Edgar is half pig, half gremlin',
  'Edgar is a loving uncle to 500 worms'
]

module.exports = function () {
  return r.pick(facts)
}
