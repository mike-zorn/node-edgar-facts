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
  'Edgar has the teeth of a much younger dog, because he stole them',
  'If you try to trim Edgar\'s toenails, he will end you',
  'Edgar prefers looking to watching',
  'Despite popular belief, Edgar was not in the movie Men in Black',
  'Edgar is half pig, half gremlin',
  'Edgar is a loving uncle to 500 worms, may they rest in peace',
  'Edgar is a dingus',
  'Edgar does not enjoy walking on grates',
  'Edgar has no body image issues and refuses to entertain yours',
  'According to Public Health Expert, Rachel Bergstein, Edgar is a special little dude',
  'Edgar is a prince',
  'If Edgar were a human, he would look like Idris Elba or Whoopie Goldberg',
  'Edgar is not suject to the protestant work ethic and therefore does not participate in capitalism',
  'Edgar would be honored to attend your wedding',
  'Edgar runs with the big dogs',
  'Edgar contests the fact that he is a dingus',
  'Edgar has a sister named Annabelle, but she is dead to him',
  'Edgar has not read Marx\'s Captial, but he has heard most of it on audiobook and thinks he gets the gist'
]

module.exports = function () {
  return r.pick(facts)
}
