// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//FUNCTIONS

/*
function logger() {
    console.log(`my name is miracle`)
}

// this function don't produces any value

logger();
logger();
logger();
logger(); //invoking, runing or calling the function

function fruitProcessor(apples, orenges) {
    // console.log(apple, orenges);
    const juice = `juice with ${apples} apple and ${orenges} orenges.`;//build the string using the input data we get into the function
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); 

const appleOrengeJuice = fruitProcessor(2, 4);
console.log(appleOrengeJuice);
*/
/*
//a function to calculate an age base on a giving birth year the person birthyear  will be the input value

// FUNCTION DECLARATION

function calcAge1(birthYear) {
    return 2024 - birthYear    
} //generic function

const age1 = calcAge1(2001);
console.log(age1);

/*
// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);

//ARROW FUNCTION
const calcAge3 = birthYear => 2024 - birthYear ;
const age3 = calcAge3 (2002)
console.log(age3);  

//how many years a person has left berore retirment
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'miracle'));
console.log(yearsUntilRetirement(1999, 'Skay'));
*/

/*
// CALLING A FUNCTION INSIDE A FUNCTION: DATA FLOW
const cutPieces = function (fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, orenges) {
    const applePiesces = cutPieces(apples);
    const orengePieces = cutPieces(orenges);

    // console.log(apple, orenges);
    const juice = `juice with ${applePiesces} pieces of apples and ${orengePieces} pieces of orenges.`;//build the string using the input data we get into the function
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// ========================= ARRAYS ===================

const friends = ['Royal', 'Casey', 'Aadity', 'Hanafy'];
console.log(friends);

const y = new Array(1999, 2001, 2003);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'miracle';
console.log(friends);

// ARAYS THAT HOLD ALL KINDS OF INFORMATION ABOUT ME 
const birthPlace = 'from Nigeria';
const miracle = ['miracle', 'pininee', 'siddert', birthPlace, "i'm", 2024 - 2001, friends];
console.log(miracle);
console.log(typeof miracle);

// Exercise
const calcAge1 = function (birthYear) {
  return 2024 - birthYear;
} //generic function
const years = [1990, 1970, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[2]);
const age3 = calcAge1(years[3]);
const age4 = calcAge1(years[4]);
const age5 = calcAge1(years[9]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge1(years[0]), calcAge1(years[2]), calcAge1(years[3]), calcAge1(years[4]), calcAge1(years[years.length - 1])];
console.log(ages);

*/

/*
const friends = ['Royal', 'Casey', 'Aadity', 'Hanafy'];
//Add element to the end of the Array
const newLength = friends.push('praise');
console.log(friends);
console.log(newLength);

// To add element to the beginning  of the array 
friends.unshift('miracle');
console.log(friends);

//Remove element FROM THE ARRAYS
friends.pop(); //last element
console.log(friends);

friends.shift();// first element
console.log(friends);

//To get the index nuMber of each Array
console.log(friends.indexOf('Aadity'));
console.log(friends.indexOf());
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('siddert'));
console.log(friends.includes('Aadity'));
console.log(friends.includes(23));
console.log(friends);

friends.pop();
friends.pop();
friends.pop();
console.log(friends);
if (friends.includes('Aadity')) {
    console.log('you have a friend called Aadity');
} else {
    console.log('There is no friend called Aadity');
}

*/

/*  ====================== OBJECTS ====================
// OBJECTS
const miracle = {
    firstName: 'Miracle',
    lastName: 'Pininee',
    age: 2024 - 2001,
    job: 'student',
    friends: ['Royal', 'Casey', 'Aadity', 'Hanafy']
};

console.log(miracle);
console.log(miracle.friend);

console.log(miracle['firstName']);
console.log(miracle['lastName']);

const nameKey = 'Name';
console.log(miracle['first' + nameKey]);
console.log(miracle['last' + nameKey]);

const inteestedIn = prompt('What do you want to know about Miracle? choose between firstName, lastName, age, job, and friends');
if (miracle[inteestedIn]) {
    console.log(miracle[inteestedIn]); 
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friend');
};

miracle.location = 'Nigeria';
miracle['twitter'] = '@miracle';
console.log(miracle);
// Challenge
// "Miracle has 4 friends, and his best friend is called Aadity"
console.log(`${miracle.firstName} has ${miracle.friends.length} friends, and his best friend is called ${miracle.friends[2]}`);
*/

// ==================== OBJECT METHODS =========================

const miracle = {
    firstName: 'Miracle',
    lastName: 'Pininee',
    birthYear: 2001,
    job: 'student',
    friends: ['Royal', 'Casey', 'Aadity', 'Hanafy'],
    hasDriversLicense: true,
    
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     return 2024 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
    
console.log(miracle.calcAge(2001));  //this is how to call the function inside the object
console.log(miracle.calcAge(miracle.birthYear));
console.log(miracle['calcAge'](miracle['birthYear']));
console.log(miracle['calcAge'](miracle['birthYear']));
console.log(miracle.calcAge(miracle.birthYear));
console.log(miracle['calcAge'](miracle['birthYear']));
console.log(miracle.age);

// Challenge
// "Miracle is a 23-year old student, and he has a/no driver's license"





// the for loop
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
 

