const beginning = ['I', 'You', 'Us'];
const middle = ['like', 'love', 'hate'];
const end = ['pineapples', 'coding', 'Bob'];

const mixedMessage = () => {
  finalArray = [];
  let i = Math.floor(Math.random() * 3);
  let j = Math.floor(Math.random() * 3);
  let p = Math.floor(Math.random() * 3);
  finalArray.push(beginning[i]);
  finalArray.push(middle[j]);
  finalArray.push(end[p]);
  return finalArray.join(' ');
};

console.log(mixedMessage());