var Random = require('random-js')
var r = new Random(Random.engines.mt19937().autoSeed())
var facts = [
  'Edgar will never die',
  'Edgar is an angel',
  'The swirls in Edgar\'s butt are called Orchids',
  'Edgar is the most beautiful creature in the universe',
  'Edgar\'s favorite color is purple, because it signifies royalty',
  'Edgar is the perfect shape',
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
  'Edgar has not read Marx\'s Captial, but he has heard most of it on audiobook and thinks he gets the gist',
  'Do you want to learn how to swim but are afraid of water? Edgar\'s swimming school is for you',
  'Every frisbee in the world belongs to Edgar',
  'Edgar is extremely respectful',
  'Nothing scares Edgar, except for fire drills',
  'Edgar does not understand birds and has a number of questions for the species as a whole',
  'Edgar does not buy into the concept of overdressing. He wears his finest tuxedo to all formal occasions',
  'Edgar does not like to be brushed, as he believes his coat looks best when slightly tousled',
  'Edgar does not understand why he is not currently sitting on your lap',
  'Edgar would love to attend your barre fitness class',
  'Edgar is offended',
  'Edgar is a prince among men and animals alike'
]

module.exports = function () {
  return r.pick(facts)
}
