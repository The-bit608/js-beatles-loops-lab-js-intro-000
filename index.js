function theBeatlesPlay(musicians, instruments) {
let facts = []
for (let i = 0; i < musicians.length; i += 1) {
facts.push(`${musicians[i]} plays ${instruments[i]}`)
}
return facts
}
function johnLennonFacts(array) {
let i = 0
let johnLennonFacts = []
while (i < array.length) {
johnLennonFacts.push(`${array[i]}!!!`)
i +=1
}
return johnLennonFacts
}
function iLoveTheBeatles(number) {
let iLoveTheBeatles = []
do {
  iLoveTheBeatles.push('I love the Beatles!')
} while (number < 15)
return iLoveTheBeatles
}
