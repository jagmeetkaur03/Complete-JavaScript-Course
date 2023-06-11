/* Activating Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;
const if = 23;
*/




/* Functions
function logger(){
  console.log('My name is Jagmeet');
}

//calling / running / invoking function
logger(); 
logger();
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const fruitJuice = fruitProcessor(5,0);
console.log(fruitJuice);
console.log(fruitProcessor(5,0));

const fruitJuice1 = fruitProcessor(2,4);
console.log(fruitJuice1);

const num = Number('23');
*/




/* Function Declarations vs. Expressions

//Function Declaration
// function calcAge1(birthYear){
//   const age = 2037 - birthYear;
//   return age;
// }
// console.log(calcAge1(1991));

//or 

function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);console.log(age1);

//Function Expression
//Anonymous Function 
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);
*/




/* Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1991, 'Bob'));
*/




/* Functions Calling Other Functions
function cutFruitPieces(fruit){
  return fruit * 4;
}
function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2,3));
*/




/* Reviewing Functions

const calcAge = function(birthYear){
  return 2037 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'MIke'));
*/

/* Coding Challenge 3

const scoreDolphins = (97+112+101)/3;
const scoreKoalas = (109+95+123)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins wins the trophy');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas wins the trophy');
} else if(scoreDolphins === scoreKoalas){
    console.log('Both teams wins the trophy');
} else{
    console.log('No team wins the trophy');
}
*/


// Coding Challenge 1

