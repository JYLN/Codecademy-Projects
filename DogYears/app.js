// My regular age
const myAge = 23;

// My early dog years
let earlyYears = 2;
earlyYears *= 10.5;

// My later dog years
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// My total age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase for some reason
const myName = 'JAYLEN'.toLowerCase();

// Put it all together
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`
);
