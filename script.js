const beginning = ['I', 'You', 'We'];
const middle = ['like', 'love', 'hate', 'adore', 'kick', 'slap'];
const end = ['pineapples', 'coding', 'Bob', 'cauliflower', 'Jim', 'Mickey Mouse', 'rollercoasters'];

const mixedMessage = () => {
  finalArray = [];
  let beginningRandom = Math.floor(Math.random() * beginning.length);
  let middleRandom = Math.floor(Math.random() * middle.length);
  let endRandom = Math.floor(Math.random() * end.length);
  finalArray.push(beginning[beginningRandom]);
  finalArray.push(middle[middleRandom]);
  finalArray.push(end[endRandom]);
  return finalArray.join(' ');
};

console.log(mixedMessage());