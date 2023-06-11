/* Linking a Javascript File
let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!");
*/




/* Values and Variables
console.log(40 + 8 - 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let Hello = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/




/* DataTypes
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas ');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/




/* let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;

var job = 'programmer';
job = 'teacher';
 
lastName = 'Kaur';
console.log(lastName);
*/




/*Basic Operators
//Arithmetic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jagmeet';
const lastName = 'Kaur';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; //15
x += 10; // 25
x*= 4; //100
x++; //101
x--; //100
x--; //99
console.log(x); //99

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/




/* Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


/* Strings and Template Literals
const firstName = 'Jagmeet';
const job = 'Student';
const birthYear = 2002;
const year = 2023;

const jagmeet = "I'm " + firstName + ',a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jagmeet);

const jagmeetNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jagmeetNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/


/* Taking Decisions: if / else statements
const age = 19;

if(age >= 18) {
    console.log('Jagmeet can start driving license');
} else { 
    const yearsLeft = 18 - age;
    console.log(`Jagmeet is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if(birthYear <= 2000){
     century = 20;
} else {
     century = 21;
}
console.log(century);
*/




/* Type Conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); //strings converted to number
console.log('23' + '10' + 3); //concentated
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/




/* Truthy and Falsy Values
//Falsy values : 0, ' ', null, undefined, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(' '));

const money = 0;
if(money){
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height; 
if(height){
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");
}
*/




/* Equality Operators: == vs. === 
const age = '18';
if(age === 18) console.log("You just became an adult(strict)");

if(age == 18) console.log("You just became an adult(loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23){
    console.log("Cool! 23 is amazing number!");
} else if(favorite === 7){
    console.log("7 is also a cool number");
} else if(favorite === 9){
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23){
    console.log("Why not 23?");
}
*/




/* Logical Operators

const hasDriverLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive!');
} else{
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else{
    console.log('Someone else should drive...');
}
*/



/* The switch statement
const day = 'Thursday';
switch (day){
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
 
if(day === 'Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'Tuesday'){
    console.log('Prepare theory videos');
} else if(day === 'Wednesday' || day === 'Thursday'){
    console.log('Write code examples');
} else if(day === 'Friday'){
    console.log('Record videos');
} else if(day === 'Saturday' || day === 'Sunday'){
    console.log('Enjoy the weekend :D');
} else{
    console.log('Not a valid day!');
}
*/

/*  Statements and Expressions
3 + 4
1991
true && false && !false

if(23 > 10){
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/* The Conditional (Ternary) Operator
const age = 23;
age >= 18 ? console.log('I like to drink wine'):console.log('I like to drink water');

const drink = age >=18 ? 'wine':'water';
console.log(drink);

let drink2;
if(age >=18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine':'water'}`);
*/





