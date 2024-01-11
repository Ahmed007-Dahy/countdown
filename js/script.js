/* let theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = 25 / 10;

let cardContainer = `
<div class="card">
    <div class="child">
        <h3> ${theTitle} </h3>
        <p> ${theDescription} </p>
        <span> ${theDate} </span>
    </div>
</div>
`
let repeatCard = cardContainer.repeat(4);
document.write(repeatCard);
//***********************************
let numberOne = 10;
let numberTwo = 20;
const numberConcat = "" + numberOne + numberTwo;

console.log(numberConcat);
console.log(` ${numberOne}${numberTwo} `);
console.log(typeof (numberConcat));
console.log(typeof (` ${numberOne}${numberTwo} `));
console.log("" + numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);

/***************************************************

let a = 21;
let b = 20;

console.log("" + "_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b); // _21_2021_2021_2021_20_ */

/***************************************************************************************************************** */

/***************************************  Jonas's time for JS***********************************/
/***************************************Javascript fundamental-1****************************** /
/*example on undefined data type
let firstName;
console.log(typeof firstName);

// example on Number & String & Boolean Data type

let lastName = "Ahmed Sameh Dahy";
let firstNumber = 23.25;
let takeOrder = true;

console.log(typeof lastName);
console.log(typeof firstNumber);
console.log(typeof true);
*********/

/*****  First Coding Challenge & Second Coding Challenge **********
//mark info dataset(1)
const markMass = 78;
const markHeight = 1.69;

//mark info dataset(2)
const markMass2 = 95;
const markHeight2 = 1.88;
//john info dataset(1)
const johnMass = 92;
const johnHeight = 1.95;
//john info dataset(2)
const johnMass2 = 85;
const johnHeight2 = 1.76;

//BMI For mark & john dataset(1)
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

//BMI For mark & john dataset(2)
markBMISecond = markMass2 / markHeight2 ** 2;
johnBMISecond = johnMass2 / johnHeight2 ** 2;

const markHigherBMI = markBMI > johnBMI;
const markHigherBMISecond = markBMISecond > johnBMISecond;

console.log(markBMI, johnBMI, markHigherBMI);
console.log(markBMISecond, johnBMISecond, markHigherBMISecond);

if (markBMI > johnBMI) {
    console.log(
        `Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}) !`
    );
} else {
    console.log(
        `John's BMI (${johnBMI}) is higher than Mark's BMI(${markBMI}) !`
    );
}
console.log(
    `In other condition we have this result about Mark & John's BMI 👇`
);
if (markBMISecond > johnBMISecond) {
    console.log(
        `Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}) !`
    );
} else {
    console.log(
        `John's BMI (${johnBMI}) is higher than Mark's BMI(${markBMI}) !`
    );
}
*/
/**************************************** */
/***************** Type Conversion & Type coercion
const yearsOld = '1999';
console.log(yearsOld);
console.log(typeof yearsOld);
console.log(Number(yearsOld) + 18);
console.log(typeof (yearsOld - 99), yearsOld - 99);
console.log(typeof (yearsOld * 99), yearsOld * 55);
console.log(typeof (yearsOld / 99), yearsOld / 55);
*/
/**************************************** */
/***  Truthy & Falsy Values ***
We have 5-types of falsy values
1- 0
2-''
3-undefined
4-NAN ------> Not A Number
5-Null

const testVar = 28;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(testVar));
// what happen here is Type coercion JS automatically coercion the value to boolean بعكس اللي فوق
if (testVar) {
    console.log(`this value ( ${testVar} ) found`);
} else {
    console.log(`this value ( ${testVar} ) not found`);
}
*/
/**************************************** */
/*Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalsAverageScore = (88 + 91 + 110) / 3;
if (dolphinsAverageScore > koalsAverageScore) {
    console.log(
        `Dolphins team have high average score = ${dolphinsAverageScore}, then they are winner team`
    );
} else {
    console.log(
        `Koalas team have high average score = ${koalsAverageScore}, then they are winner team`
    );
}
//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
const dolphinsAverageScore2 = (97 + 112 + 101) / 3;
const koalsAverageScore2 = (109 + 95 + 123) / 3;
if (dolphinsAverageScore2 > koalsAverageScore2 && dolphinsAverageScore2 >= 100) {
    console.log(
        `Dolphins team have high average score = ${dolphinsAverageScore2}, then they are winner team with score higher than 100 points`
    );
} else if (
    koalsAverageScore2 > dolphinsAverageScore2 &&
    koalsAverageScore2 >= 100
) {
    console.log(
        `Koals team have high average score = ${koalsAverageScore2}, then they are winner team with score higher than 100 points`
    );
} else {
    console.log('No team is winner, but both team are draw');
}
//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphinsAverageScore3 = (97 + 112 + 101) / 3;
const koalsAverageScore3 = (109 + 95 + 106) / 3;
if (
    dolphinsAverageScore3 === koalsAverageScore3 &&
    dolphinsAverageScore3 >= 100 &&
    koalsAverageScore3 >= 100
) {
    console.log(
        `Both of team called dolphin ${dolphinsAverageScore3} and koals ${koalsAverageScore3} has the same score, then they draw`
    );
} else {
    console.log('No team winner');
}
*/
/**************************************** */
/* Examples of how to transform switch-case statement to if-else blocks
const day = 'monday';
if (day === 'monday') {
    console.log('study Advanced CSS & SASS');
} else if (day === 'tuesday') {
    console.log('study JS course');
} else if (day === 'wendesday' || day === 'thrusday') {
    console.log('make travel-page');
}
const firstName = 'Ahmed';
const lastName = 'Dahy';
console.log(firstName + ' ' + lastName);
*/
/**************************************** */
/* this Coding Challenge #4 code area simple tip calculator
// Data 1: Test for bill values 275, 40 and 430
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was ${bill}, the Tip was ${tip} and the total value will be ${
        bill + tip
    }`,
);
/*********************************Javascript fundamental-2********************************** */
// this line for making your code more secure and show all errors in console to avoid bugs
'use strict';
/************************Functions part code*****************************
//this type of function is the simplest type
function trainBlock() {
    console.log('this msg from function block of code');
}
//this type
trainBlock();
function testBlock(num1, num2) {
    const addtion = num1 * num2;
    return addtion;
}
// this way makes var and store the function result in this var and logging it in console
const addtionResult = testBlock(200, 15.8);
console.log(addtionResult);
// This way is logging the function and pass the arguments to parameters's function
console.log(testBlock(2, 5));
// this example for function expression make function automatically store in var (that will return value)
const calcAge = function (dateOfYear, firstName) {
    const numYears = 2022 - dateOfYear;
    const personInfo = `${firstName} will be ${numYears} years old :)`;
    return personInfo;
};
console.log(calcAge(1999, 'Ahmed Dahy'));
// this example for Arrow function make function automatically store in var (that will return value)
const writeInfo = (dateOfBirth, theFirstName) => {
    const numYears = 2022 - dateOfBirth;
    const personInfo = `${theFirstName} will be ${numYears} years old :)`;
    return personInfo;
};
console.log(wirteInfo(1968, 'Sameh Dahy'));
// this example for function make process and call it in another function to complete it
function calcAge2(ageYears) {
    return 2022 - ageYears;
}
function personInfo(firstName, lastName, gender, dateOfBirth) {
    const age1 = calcAge2(dateOfBirth);
    const info = `first name is "${firstName}", last name is "${lastName}", gender is ${gender} and age is ${age1} years old`;
    return info;
}
console.log(personInfo('Ahmed', 'Dahy', 'Male', 1999));
console.log(personInfo('Omar', 'Dahy', 'Male', 2002)); */

/********* Coding Challenge #1 from javaScript fundamental-2 "Show hint from video" ************
// Data 1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49
// Data 2: Dolphins score 85, 54, 41. Koalas score 23, 34, 27
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
    avgDolphins = calcAverage(85, 54, 41);
    avgKoalas = calcAverage(23, 34, 27);
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolhins team wins🥇 ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolhins team wins ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team win 😑');
    }
}
checkWinner();
*/
/************************Array part code****************************
// initialization of Array first way
//{"Array is type of DS"}
const friendsName = ['Ahmed', 'Sameh', 'Omar', 'Amr', 'Eyad'];

// initialization of Array second way
const friendsYears = new Array(1999, 1968, 2002, 2000, 2005);
console.log(friendsName);
console.log(friendsYears);

// Start to know about the most common method used with array
// First method called .push("Add items in the end of Array")this return the length of array .log need argument
friendsName.push('Mazen');
console.log(friendsName);
friendsYears.push(2004);
console.log(friendsYears);

// Second method called .unshift("Add items to start of Array")this return the length of array .log need argument
friendsName.unshift('Elmorshdy');
console.log(friendsName);
friendsYears.unshift(2001);
console.log(friendsYears);

// Third method called .pop("remove items in end of Array")this not return the length of array .log not need argument
friendsName.pop();
console.log(friendsName);
friendsYears.pop();
console.log(friendsYears);

//Forth method called .shift("remove items in start of Array")this not return the length of array .log not need argument
friendsName.shift();
console.log(friendsName);
friendsYears.shift();
console.log(friendsYears);

//Fifth method called .indexOf("return argument of index") need argument is argument if you want to searh on string must write it correct not number
console.log(friendsName.indexOf('Eyad'));
console.log(friendsYears.indexOf(1999));

//Sixth method called .includes("return if argument there is in array or not true or false") need argument is argument if you want to searh on string must write it correct not number
console.log(friendsName.includes('Eyad'));
console.log(friendsYears.includes(1999));
*/
/********* Coding Challenge #2 from javaScript fundmental-2 ************/
// Test data: 125, 555, 44
/* Some notes about my soultion
1-for make easier if block use the pervious example (short hand for if)

const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
};
const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1]),
];
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(bills);
console.log(tips);
console.log(total);
*/
/************************object part code*****************************
// initialization of object
// there are two ways to call any key in object
//first way by using dot
//{"Object is type of DS"}
const myInfo = {
    firstName: 'Ahmed',
    lastName: 'Dahy',
    dataOfBirth: 1999,
    job: 'student',
    haveLicense: false,
    friends: ['Omar', 'Amr', 'Eyad'],
    // make it like that to be logical and good practise and not waste alot of computing time when every time call this key
    calcAge: function () {
        this.age = 2022 - this.dataOfBirth;
        return this.age;
    },
    //To make sentense like it, you must use "this." because u inside object and asign method
    summryInfo: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${
            this.job
        }, and he has ${this.haveLicense ? 'a' : 'no'} driver's license`;
    },
};
console.log(myInfo.firstName);
//second way by using brackets and provide for us to put any experssion
console.log(myInfo['lastName']);
console.log(
    `my name is ${myInfo.firstName} ${
        myInfo['lastName']
    }, Iam ${myInfo.calcAge()} years old, my best friends are ${
        myInfo.friends[0]
    },${myInfo.friends[1]} and ${myInfo.friends[2]} `,
);
//this part for logging method was created into object
// if i want to use brackets to call property inside object make by this way 👇
console.log(myInfo['summryInfo']());
*/
/********* Coding Challenge #3 from javaScript fundmental-2 ****************
const johnInfo = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = Math.round(this.mass / this.height ** 2);
        return this.BMI;
    },
};
const markInfo = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = Math.round(this.mass / this.height ** 2);
        return this.BMI;
    },
};
if (markInfo.calcBMI() > johnInfo.calcBMI()) {
    console.log(
        `${markInfo.fullName}'s BMI ${markInfo.calcBMI()} is higher than ${
            johnInfo.fullName
        }'s BMI ${johnInfo['calcBMI']()}`,
    );
} else {
    console.log(
        `${johnInfo.fullName}'s BMI ${johnInfo.calcBMI()} is higher than ${
            markInfo.fullName
        }'s BMI ${markInfo['calcBMI']()}`,
    );
}
*/
/************************LOOPs part code****************************
// for loop init "init variable with 'let' beacuse we modify value "
for (let i = 0; i <= 6; i++) {
    // we put ("i") in sentense to make loop print six sentence sequencely
    console.log(`We are testing For loop iterations ${i}`);
}
// example with for loop and array
const ageArray = [1968, 1975, 1999, 2002, 2007, 2009, 2012];
const calcAge = [];
for (let i = 0; i < ageArray.length; i++) {
    // this best and logical way to add items in empty array use .push to add elements in end of array not in start
    calcAge.push(2022 - ageArray[i]);
    // with "continue" when found number make condition true close all loop and logging the result
    // if (calcAge[i] <= 20) continue;
    // with "break" when found number make condition true close all loop and logging the result
    if (calcAge[i] !== 54 ) break;
    console.log(calcAge);
}
*/
/********* Coding Challenge #4 from javaScript fundmental-2 *****************
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300
        ? billValue * 0.15
        : billValue * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    // to make it more profissional init var and reuse it
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log('Bills', bills);
console.log('Tips', tips);
console.log('Totals', totals);
//bouns challenge "i do the same but must put return line out of loop beacuse inside array will receive firt value in array and not continue to whole array so but return line out of loop to finish the whole array"
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
console.log(calcAverage(totals));
/* Now finish all parts of Javascript fundmental (1&2) ✌️🎉 */

/**************** Dom tree part ******************** */
document
    .querySelector('.number-box__click')
    .addEventListener('click', function () {
        const guessedNumber = Number(
            document.querySelector('.number-box__guess').value,
        );
        if (guessedNumber > 8) {
            document.querySelector('.number-box__text').style.display = 'block';
            document.querySelector('.number-box__small-text').style.display =
                'none';
        } else {
            document.querySelector('.number-box__small-text').style.display =
                'block';
            document.querySelector('.number-box__text').style.display = 'none';
            console.log(`you choose small number ${guessedNumber}`);
        }
    });
/**************************Modal-Window********************* */
const modal = document.querySelector('.animal-modal');
const overlay = document.querySelector('.modal-container');
const openModal = document.querySelector('.modal-section__dog');
const closeModal = document.querySelector('.close-modal');

const openModalAction = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModalAction = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
openModal.addEventListener('click', openModalAction);
closeModal.addEventListener('click', closeModalAction);
overlay.addEventListener('click', closeModalAction);

document.addEventListener('keydown', function (esc) {
    if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalAction();
    }
});
/* Now finish JavaScript in the Browser DOM and Events Fundamentals ✌️🎉 */
/************************************************************************************************************/
/***************** Test part for The theoretical part ******************
const arr = [2, 3, 5];
arr.push(5);
arr.push(8);
console.log(arr);
console.log(typeof arr);
*/
/*************************** 9. Data Structures, Modern Operators and Strings ****************************** */
/*This code is practing for destructing array & object with assignment and in left hand side with الاقواس بتاعت الحاجه اللي بعرفها
// This part for how making enhanced for object with ES6 2020
// If we had array outside obj and call it inside obj
const weekday = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const openingHours = {
    [weekday[1]]: {
        open: '7:00 AM',
        close: 7,
    },
    [weekday[2]]: {
        open: '8:00 AM',
        close: 6,
    },
    [weekday[4]]: {
        open: '10:00 AM',
        close: 9,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // First thing to do is if we had obj outside main obj we can call it like that
    openingHours,
    // Second thing to do is making functions like that and it's work fine
    matchingFood(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.categories[mainIndex]];
    },
    orderFood(firstIndex, secondIndex, thirdIndex) {
        return [
            this.location,
            this.categories[firstIndex],
            this.mainMenu[secondIndex],
            this.starterMenu[thirdIndex],
        ];
    },
    orderMeal(item1, item2, item3) {
        console.log(
            `your meal ingredients is ${item1}, ${item2} and finally ${item3}`,
        );
    },
    orderPizza(ingredient, ...otherIngredient) {
        console.log(ingredient);
        console.log(otherIngredient);
    },
};
*/
/* This part for practicing looping objects with (Key & value & entries)
// Test object.key
const properties = Object.keys(openingHours);
console.log(properties);
// Test object.value
const values = Object.values(openingHours);
console.log(values);
// Test object.entries
const entries = Object.entries(openingHours);
console.log(entries);
// For testing object.entries in better way we can do that
for (const [key, { open, close }] of entries) {
    console.log(`At ${key} we are open at ${open} and close at ${close}`);
}
*/
/* Optinal operator (.) make sure that element or array or method exist or not and if not will returne undefiend
// Array
for (const day of weekday) {
    const open = restaurant.openingHours[day]?.open ?? ',closed';
    console.log(`On ${day} we open at ${open}`);
}
//Method inside obj
console.log(
    restaurant.orderMeal?.('checken', 'pasta', 'onion') ??
        'this method not exist',
);
*/
/********************** Destructing Data Structure*******************
let [first, , second, third] = restaurant.starterMenu;
console.log(first, second, third);

const [startItem, categoriesItem] = restaurant.matchingFood(2, 2);
console.log(startItem, categoriesItem);

const array = ['Ahmed', 23, 'Sameh', ['Dahy', 83]];

const [firstItem, secondItem, thirdItem, [, forthItem]] = array;
console.log(
    `my name is ${firstItem}
    and my age is ${secondItem}
    my grandPa's age is ${forthItem}`,
);
const [locationInfo, cateItem, mainItem, menuItem] = restaurant.orderFood(
    0,
    2,
    2,
);
console.log(
    `my fav restaurant's location in "${locationInfo}" and i order from its categories "${cateItem}" and food is "${mainItem}" and menu is "${menuItem}"`,
);
const array2 = [, 5, [6, 8]];
const [firstnum = 3, secondnum, [thirdnum = 8, forthnum = 1]] = array2;
console.log(firstnum, secondnum, thirdnum, forthnum);
*/
/********************** this part for objects only destructing with {}
    array هنا الترتيب مش مهم بعكس
****************************************
/*call elements from obj and destructing it******
const { name, mainMenu, categories } = restaurant;
console.log(name, mainMenu, categories);
/*Rename for elements from obj and destructing it and loggging in console****
const {
    name: restaurantName,
    mainMenu: tags,
    openingHours: timesInterval,
} = restaurant;
console.log(restaurantName, tags, timesInterval);
/*Make default value for element is coming from obj and don't know if it had values or not****
const { menu = [], starterMenu: menuFirst = [] } = restaurant;
console.log(menu, menuFirst);
/*Mutating objects : make var of obj has a value give it another value form another var has the name var-name**
let a = 'Ahmed';
let b = 'Omar';
const obj = {
    a: 'Sameh',
    b: 'Dahy',
};
/* this trick for making destructing for object without writing const OR let
({ a, b } = obj);
console.log(a, b);
*/
/* this is small challange for taking copy of arr from obj and merg it with another arr in the same obj ✅
const mainMenuCopy = [...restaurant.mainMenu];
const fullMenu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(fullMenu);
// iterable : array,strings,sets,maps and after 2018 object become iterable
// Spread operator (...) in string making split for letters of string right-hand-side
const str = 'Ahmed';
const strArr = [...str, 'D'];
console.log(...str);
console.log(strArr);
// this example is recieve ingredient from prompt method and pass this array to method in restaurant and display it in logging
// const ingredients = [
//     prompt('first ingredient'),
//     prompt('second ingredient'),
//     prompt('third ingredient'),
// ];
// restaurant.orderMeal(...ingredients);
//

// this is example is for rest pattern that collect the rest value write (...var-name) in left-hand-side
//*************************** Array
const arr = [5, 6, 7, 8, 9, 2];
const [a, b, ...restOfArr] = arr;
console.log(a, b);
console.log(restOfArr);

//***********************example about obj restaurant
const { sat, ...restOfWeek } = restaurant.openingHours;
console.log(restOfWeek);
//********** make function with one paremeters and recieve array
const add = function (...wholeNumbers) {
    let sum = 0;
    for (let i = 0; i < wholeNumbers.length; i++) {
        sum += wholeNumbers[i];
    }
    console.log(sum);
};
const restArr = [10, 25, 30, 45, 50];
add(...restArr);
//********************* try rest pattern on restaurant object
restaurant.orderPizza('onion', 'cheese', 'mashroum', 'flour');
*/
/********************* for-looping array with (of)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const items of menu) {
    console.log(items);
}
//***************** if u want any index of element in array u can make it like that
for (const items of menu.entries()) {
    console.log(items);
}
//******************* if u want for printing it as Real menu, u will make destructing array with two vars
for (const [index, element] of menu.entries()) {
    console.log(`${index + 1} ${element}`);
}
*/
/********************************************************** Coding Challenge #1
    How i make brainstorming for solving Challenge
    Note : I saw video for make two poinst easier for me ✌️
1 : I need for destructing the element (players) for two arraies
    note: make two var in same destructing
2 : I need to use (spread opreator) to make one var for GK and another var for the rest of team
3 : I need to use (rest pattern) to collect all players in one array
4 : I need to add new players as substitue in the team1 array
5 : I make destructing for object odds inside game obj // we use {}
    in this step i saw part of video to show how to call x in odds obj and put it in new var with rename it in the left-hand-side with draw
    I make it with 70%
6 : make function with one parameters with use rest pattern and making for loop for print each player scored goal and make normal logging line to log the num of goals scored
7 : I will use the and (&&) opreator for solving it
// This is the second Part of Challenge
2 : we want to make loop to cal averages of odd of game obj
    we make this with function for calAverage
3 : we want to display the game result with team name dirctly from game obj

const game = {
    team1: 'Bayern Munich',
    team2: 'Alahly',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: [
        'Lewandowski',
        'Gnabry',
        'Lewandowski',
        'Hummels',
        'Lewandowski',
        'Gnabry',
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [bayernTeam, alahlyTeam] = game.players;
const [GK, ...fieldPlayers] = bayernTeam;
const allPlayers = [...bayernTeam, ...alahlyTeam];
const substituePlayers = ['Thiago', 'Coutinho', 'Perisic'];
const bayernTeamFinal = [...bayernTeam, ...substituePlayers];
const {
    odds: { team1, x: draw, team2 },
} = game;
const printGoals = function (...players) {
    console.log(`${players.length} have scored goal`);
    for (let i = 0; i < players.length; i++) {
        console.log(`player had scored goal is ${players[i]}`);
    }
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 > team2 && console.log('Team1 won the game');
team1 < team2 && console.log('Team2 won the game');
// first point in second challenge
for (const [index, element] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${element}`);
}
// second point in second challenge
const values = Object.values(game.odds);
let sum = 0;
const calcAverage = function () {
    for (const average of values) {
        sum += average;
    }
    return console.log(sum / values.length);
};
calcAverage();
// Third point in second challenge with 2 hints
for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamName}: ${odd}`);
}
// Solution of bouns from github but understood that
// this link is describe this solution
//https://stackoverflow.com/questions/69353904/hey-guys-can-anyone-explain-this-piece-of-code-to-me
// scored: ['Lewandowski','Gnabry','Lewandowski','Hummels','Lewandowski','Gnabry',]
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
/* This part of another DS in JS is Sets
// how to create Set
const familyName = new Set([
    'Ahmed',
    'Sameh',
    'Dahy',
    'Ahmed',
    'Omar',
    'Omar',
    'Dahy',
]);
// when log set it logs the unique values not all values like array
console.log(familyName);
// If I want to search on set about value, it inside set or not do that
console.log(familyName.has('Ahmed'));
console.log(familyName.has('Samir'));
// If I want to delet value from set do this
familyName.delete('Dahy');
// If I want to add new value to set do this
familyName.add('Samir');
// If I want to clear set do this
// familyName.clear();
console.log(familyName);
// Sets is like array are iterable
for (const names of familyName) {
    console.log(names);
}
//small note : when use Sets can't know any index of values inside it
console.log(familyName[0]);
*/
/* This part of another DS in JS is Maps
Notes about Maps
    1 :Map's key can be anything like (array,string,number,object,another map) and object not the same with map
    2 :If U want to delet or check on any key u must write it like key inside Maps
    3 :Maps are iterable and apply for() loop
    4 :If U want to pass array as key for Maps not passing array like this [1,2,3]
    5 :U must pass array like this const arr = [1,2,3] (pass varible name not value)
    6 :We can use the second way if our map are statci and don't need to add keys alot of times
To make quiz app from this map we do this
    1 : We use Prompt method for take answer from user
    2 : we make checking on this answer
    3 : we use the boolean keys in our map
    4 : To print specific key from map we use for loop and if-statment to ckeck the key

// how to create Maps (this way of how creating map but there is another way)
// This part as Fundemental of Maps
const familyName = new Map();
familyName.set('GrandPa', 'Dahy');
familyName.set('Father', 'Sameh');
familyName.set('AdultSon', 'Ahmed');
familyName.set('YouthSon', 'Omar');
console.log(familyName);
// To know the size of Maps do that
console.log(familyName.size);
// To get Key or Value from map do that
console.log(familyName.get('GrandPa'));
// To delet Key from Maps do that
familyName.delete('GrandPa');
// To check if key inside Map or not do that
console.log(familyName.has('GrandPa'));
// This line for note num : 2
console.log(familyName.has('father')); // false
console.log(familyName.has('Father')); // True
// Maps are iterable
for (const familyMembers of familyName) {
    console.log(familyMembers);
}
// Pass array as key for Maps
const array = [1, 2];
familyName.set(array, 'test array inside map');
console.log(familyName);

// This the second way to create map from scratch
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);
// To make quiz app from this map we do this
console.log(question.get('question'));
// Print three answers in Map
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
// Take answer from user
// const answer = Number(prompt('write your answer about our question:'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));
*/
/********************************************************** Coding Challenge #3
    1 : when i need to make unique array i merge set with array and do with this way and use spread opreator to make them array
    2 : I need to use delet method for removing event '64' from map
    3 : I need to calc average of all events that happen and log this msg to console
    Worst way and first time to do challenge like that 🥲
    🥲🥲🥲🥲🥲🥲🥲🥲🥲

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);
// make array for events that happen
const events = new Set(...[gameEvents.values()]);
// Delet event at 64 min
gameEvents.delete(64);
// take 90 min not extra time as he mention in code challenge
const realTime = [...gameEvents.keys()].pop();
console.log(
    `An event happened, on average, every ${
        realTime / gameEvents.size
    } minutes`,
);
// making loop for gameEvents map
for (const [minutes, events] of gameEvents) {
    const halfTime = minutes <= 45 ? 'First' : 'Second';
    console.log(`${halfTime} half ${minutes}: ${events}`);
}
 */
/********************************************************** String methods
    1 : toLower & toUpper
    2 : string works as array if i want to select it
    3 : Know the lenth of string
    4 : Know index of any part of string
    5 : to slice any part of string this method recive index of start and index of end
    6 : Tirm() method remove any extra spaces
    7 : To replace any part of string with new part use replace() method
        Some notes about this method:
        7.1 : can repeat this method for same string in the same line
        7.2 : if i want to replace one more same word use .replaceAll()
    8 : Test if this word include inside this string or not

// 1
const companyName = 'DaHy Firm programming DaHy';
const companyNameWrong = '  DaHy Firm programming   \n';
console.log(companyName.toUpperCase());
console.log(companyName.toLowerCase());
// 2
console.log(companyName[0]);
console.log(companyName[3]);
console.log(companyName[5]);
// 3
console.log(companyName.length);
// 4
console.log(companyName.indexOf('d')); // -1 === 'not found'
console.log(companyName.indexOf('D')); // string methods are sensetive
console.log(companyName.lastIndexOf('a'));
// 5
console.log(companyName.slice(4 + 1)); // it reach to end of string because i don't put index of end
console.log(companyName.slice(4 + 1, 21));
// 6
console.log(companyNameWrong);
const companyNameCorrect = companyNameWrong.trim();
if (companyName === companyNameCorrect) {
    console.log(`Yeah, your company name is ${companyName} and it's correct`);
} else {
    console.log(
        `Sorry about that your company name:${companyNameWrong} and it's wrong`,
    );
}
// 7
const companyNameNew = companyName
    .replaceAll('DaHy', 'Ahmed')
    .replace('programming', 'Software engineering')
    .toLowerCase();
console.log(companyNameNew);
// 8
if (companyNameNew.includes('ahmed') && companyNameNew.includes('software')) {
    console.log(`Yeah, your company name: "${companyNameNew}" is valid`);
} else {
    console.log("Sorry about that, your company name is'nt valid");
}
*/
/********************************************************** Coding Challenge #4 and the final Challenge
 * This Challenge want from me when press btn all strings will be in normal formatting
    1 : First problem : i need to make function work when click of button
        Will do that with .addEventListener for button
//****************************************************************
    This solution of this challenge doesn't work with me and i don't know why
        document.body.append(document.createElement('textarea'));
        document.body.append(document.createElement('button'));
        document.querySelector('button').addEventListener('click', function () {
            const text = document.querySelector('textarea').value;
            const rows = text.split('\n');
            for (const [i, row] of rows.entries()) {
                const [first, second] = row.toLowerCase().trim().split('_');
                const output = `${first}${second.replace(
                    second[0],
                    second[0].toUpperCase(),
                )}`;
                console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
            }
        });
*/
// It's very diffcult on me but i learn alot of things
/***************** Finally finish this section 9. Data Structures, Modern Operators and Strings ****************/
/******************* 10. "A Closer Look at Functions"
Here I will write some notes i find it useful for me
    1 : string be primitive & object be reference
        1.1 : primitive when passed to function, We pass value of it and didn't pass value of its memory heap
            1.1.1 : So if u try to log this string or number after try change its value, it doesn't work and log orignal
    2 : when we pass anything to function we pass value not reference
        2.1 : when we pass object we pass value of object and value of its memory heap so object can change easy
            2.1.1 : So in JS we can't pass by reference, but we pass reference
    3 : There are some conspets in this video (num5)
        3.1 : functions are values (can pass function as argument to other function) (3.3)
        3.2 : functions are type of Objects, So we can use method for functions
        3.3 : First-class-function
            3.3.1 : can store function in variable or property inside obj
            3.3.2 : can pass function as argument to another function
            3.3.3 : can return function from function
            3.3.4 : this is theortical conspet and not use in practise, if it supports it it lead u to point num4
        3.4 : Higher-order-function : This conspet not found if language not support point (num 3.3)
            3.4.1 : This conspet we use it in practise
            3.4.2 : function to be higher-order it must receive another function as argument
            3.4.3 : *************************** it must inside its block of code return another function
    4 : This video is practise of point (num3)
    5 : Video (num7) about function return other function and something happen wil understant it later with clouser
    6 : Video (num8) is foucs of how make JS know that (this.) keyword refer to this object and don't
    show to us any bugs or error in our code, We can do this with (.call(obj-name,argument of method))
        6.1 : this error happen because book method not belong to lufthans obj and this refer to undefined
        6.2 : apply() method not use it.but it receives obj-name and array
        6.3 : can do that with call method with this way
    7 : IIFE : (Immediately Invoked Function Expression) this for writing function executing one time
        7.1 : we use this when we need to make variables can't been accessed on it
        7.2 : we call it by write () after defined this function
        7.3 : and must put it in () because this fun not have name
        7.4 : In futuer we use it in async function (important usage for this pattern)
    8 : CLOSURES : it's still little diffcult but i will read more and more for making it easier on me
        8.1 : it has accessed on (VE) Variable Environment of functions and VE stored all variables of function on it

const fistName = 'Ahmed';
// console.log(fistName.toUpperCase());
const Ahmed = {
    phoneNumber: 1012380309,
    brotherName: 'Omar',
};
const phoneNumberChange = function (name, obj) {
    obj.phoneNumber = 1012390833;
    name = 'omar';
};
phoneNumberChange(fistName, Ahmed);
console.log(fistName);
// point num4
// Build Example of higer-order-function
// This lower-level-function make string one word
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
// This lower-level-function make string capital for first word
const firstWordCapital = function (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
};
// Higher-order-function
const transformedString = function (str, fun) {
    console.log(`The string before change its fromate be: ${str}`);
    console.log(`The string after change its fromate be: ${fun(str)}`);
    console.log(`The string is changing with: ${fun.name}`);
};
transformedString(
    'javascript is the best programming language in whole world',
    oneWord,
);
console.log('/***************************************************');
transformedString(
    'javascript is the best programming language in whole world',
    firstWordCapital,
);
// challenge for refactor of code's jonas to arrow fucntion
const greet = (hey) => {
    return (name) => {
        console.log(`${hey} ${name}`);
    };
};
const greeting = greet('hey');
greeting('Ahmed');
greeting('Omar');
greeting('Sameh');
greet('hey')('Dahy');
//**********************************************
// Using .call() method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
// in this line take book method and put it in var for reusing it more one time
const book = lufthansa.book;
// if we try to write like this it's error
// book(lufthansa, 246, 'Ahmed');
// When use call method and pass to this method which obj deal with it, it's work fine
book.call(lufthansa, 246, 'Ahmed');
const egypt = {
    airline: 'EgyptAir line',
    iataCode: 'EA',
    bookings: [],
};
book.call(egypt, 159, 'Dahy');
const travelInfo = [450, 'Omar'];
book.call(egypt, ...travelInfo); // 6.3 : use spread opreator for array
console.log(egypt);

// challenge of bind method
const addTax = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const valueNum = addTax(0.23);
console.log(valueNum(100));
console.log(valueNum(250));

// point 7
(function () {
    const firstName = 'Ahmed';
    const middleName = 'Sameh';
    const lastName = 'Dahy';
    const broName = 'Omar';
    console.log(
        `my name is ${firstName} ${middleName} ${lastName} and my brother's name is ${broName}`,
    );
})();
// poit 8 : CLOSURES
const counter = function () {
    let counterNum = 0;
    return function () {
        counterNum++;
        console.log(`count is: ${counterNum}`);
    };
};
const counterNum = counter();
console.dir(counterNum); // to know about what happen in console
counterNum();
counterNum();
*/
/********************************************************** Coding Challenge #1
 * problems of this challenge
1 : I need to create method inside poll obj
    1.1 : we do that with making new method with this way
2 : I need to create prompt window inside register method
    2.1 : when make search about this point we do this with .join method for array about options and use regexp like "\n" for break line for each option
    2.2 : i made answer but i will sure later
        u made it wrong but understand what is true and do it
        مفيش مشكله لما يكون مستواك مش احسن حاجه علشان انت معرفتش تحل تاني تشالنج ليك كامل حليت جزء والجزء الباقي شوفت الفيديو
        بس اهم حاجه انك فهمت الحل ولو جالك حاجه مشابه هتبقي عارف تحلها ازاي هون علي نفسك
*/
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${poll.question}\n${poll.options.join(
                    '\n',
                )}\n(Write option number)`,
            ),
        );
        console.log(answer);
        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
        }
        this.displayResult();
        this.displayResult('string');
    },
    displayResult(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
/********************************************************** Coding Challenge #2
1 : when write .addEventListener and call header element JS go to clouser and discover if this element in VE of parent function or not because (.addEventListener is call back function not parent function)
when go to clouser it finds the header element and execute all codes
2 : to Improve for myself clouser has Priority over scope chain go to line:1218 we define same header element in global scope and .addEventListener not go to take blue color
*/
const header = document.querySelector('h1');
header.style.color = 'blue';
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'white';
    });
})();
/****************************************** 11. Working With Arrays
* We will go deeper with array and more advanced method of array
* we write name of method and what should it do only any extra info go to mdn
    1 : slice() : take part of array and doesn't effect on orignal array
    2 : splice() : work in the same way of slice() but effect on orignal array
        2.1 : this method receive two argu first of start index, second is numbers of element want to splice it
    3 : reverse() : from its name make array with reverse format and effects on orginal array
    4 : concat(arr-name) : this method concatenating two array together and its argu is the second array
    5 : join(sympol) : this method join two arraies together but return as string and choose which sympol want to be between them
********************************************************************
* This part we will know about forEach(callback function() {}) loop this type of looping we use it with arraies
* This for using forEach with arraies only
1 : forEach loop pass three argu from current array and order of these argu are important
        1- current element
        2- current index
        3-whole current array
    2 : forEach loop receive callback function,So forEach loop are high-order-function
    3 : we can't use (break || continue) keyword this work in whole array
***************************************************
* This for using forEach with maps and sets
    1 : forEach loop work with maps and pass three argu from map and order of these argu are important
        1- current value
        2- current key
        3-whole current map
    2 : forEach loop work also with sets but here it pass two argu
        1-value
        2-we put it as (_) as not important argu for make same maps
        3-whole current set
***************************************************
* map method
    1 : this method is very similar (forEach) but difference is
        1.1 : return new array and this is array is result of apply some operations on orginal array
        1.2 : in argu part work similar (forEach)
* filter method
    1 : this method is very similar (map)
        1.1 : it will return new array after making filteration on it and remove rest part of array
* reduce method
    1 : this method take all values of array and make opreation on them and display one single value as number
    2 : this method argu are
        2.1 : this the call back function and its argu are acc for accumulator that store current array element if we want to multiplication all array values
* find method
    1 : find method is very similar of filter method, but difference is
        1.1 : find method return the first value apply our condition, but filter method return new array with all values
* findeIndex method
    1 : making loop on array but return index of element which condition apply on it
* some & every method
    1: these two methods are search on array and return true or false
        1.1 : some : not required all elements of array had applied the condition
        1.2 : every : required all elements of array had applied the condition
    we use some method on request loan at bankist application
* flat method -----> [[1,2],3,[4,5,6],7] ---- in 1 level
    1 : it take a parent array and flatted it to one array
* flatMap method
    1 : this method is combining of map and flat together but work in one level if array in two level of nesting u need to use flat method again
* sort method
    1 : it doesn't take any argu if sorted array of strings, but array of number we will do that
        1.1 : sort((a,b)=>a-b)
            1.1.1 : a ---> current element
            1.1.2 : b ---> next element
            1.1.3 : a-b: if this return negative number it means that a < b and keeping order
            1.1.4 : a-b: if this return positive number it means that a > b and switching order
    2 : if array is mixing of number and string don't use sort method

// // Prefixed ++ oeprator
// let a = 10;
// console.log(++a);
// console.log(a);

***********************************************
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
console.log(arr);
// point num1
console.log(arr.slice(2, -1));
console.log(arr.slice(2, -2));
console.log(arr.slice(2)); // when you not defined the end it takes all array
// Spread opreator do the same thing
console.log(arr.slice());
console.log([...arr]);
console.log('***********************************************');
// point num2
console.log(arr);
console.log(arr.splice(4));
console.log(arr.splice(0, 3));
console.log(arr);
console.log('***********************************************');
// point num3
const arrLetters = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];
console.log(arrLetters); // before use method
console.log(arrLetters.reverse());
console.log(arrLetters); // after use method
console.log('***********************************************');
// point num4
const arrNames = ['ahmed', 'sameh', 'dahy', 'omar'];
const arrNames2 = ['amgad', 'amr', 'Eyad'];
const arrWholeNames = arrNames.concat(arrNames2);
console.log(arrWholeNames);
// we can do that with this way too and two ways are perfect
// console.log([...arrNames, ...arrNames2]);
// point num5
console.log([...arrNames, ...arrNames2].join(' * '));
// console.log([...arrNames, ...arrNames2].join(' / '));
// console.log([...arrNames, ...arrNames2].join(' - '));
arrWholeNames.forEach(function (name, i) {
    if (name.length > 4) {
        console.log(
            `your name is: ${name} is long and your number is ${i + 1}`,
        );
    } else {
        console.log(
            `your name is:${name} is short and your number is ${i + 1}`,
        );
    }
});

console.log('****************For-Loop*****************');
// Same thing we can doing it but with for loop
for (const [i, el] of arrWholeNames.entries()) {
    if (i.length > 4) {
        console.log(`your name is: ${el} is long and your number is ${i + 1}`);
    } else {
        console.log(`your name is:${el} is short and your number is ${i + 1}`);
    }
}

console.log('**********ForEach-Loop with maps************');
// forEach with maps
const names = new Map([
    ['firstName', 'Ahmed'],
    ['fatherName', 'Sameh'],
    ['grandPa', 'Dahy'],
]);
names.forEach(function (value, key, map) {
    console.log(`my ${key} is ${value}`);
});
console.log('**********ForEach-Loop with sets************');
// forEach with sets
const nameUnique = new Set([
    'Ahmed',
    'Omar',
    'Dahy',
    'Ahmed',
    'Sameh',
    'Dahy',
    'Samir',
    'Omar',
]);
nameUnique.forEach(function (value, _, set) {
    console.log(`${value}`);
});
// Map method for array DS
const egpMoney = [1000, 2000, 500, 200, 100, 400, 3000, 20];
const egpToUsd = 30.85;
// put this block of code in new var because map method return new array
// make it arrow function because it's small and quick challenge
const egpToUsdMoney = egpMoney.map((money) => money / egpToUsd);
console.log(egpToUsdMoney);
// second example will apply on it map method
const movements = [2000, -100, -200, -500, -330, 3000, 1300, 4500, 6000];
const movementsNew = movements.map(
    (mov, i) =>
        `Movement number ${i + 1}: You ${
            mov > 0 ? 'deposit' : 'withdrawal'
        } ${Math.abs(mov)}`,
);
console.log(movementsNew);
// Filter method for array DS
const movementsLarge = movements.filter((mov) => mov > 0);
const movementsSmall = movements.filter((mov) => mov < 0);
console.log(movementsLarge);
console.log(movementsSmall);
// reduce method for array DS
// this example will return from reduce method the max number on array
// after iteration has done the value is returened, it will be new acc in the next iteration
// const movements = [2000, -100, -200, -500, -330, 3000, 1300, 4500, 6000];
const maxNumber = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(maxNumber);
*/
/*************************Coding Challenge #1
1 : this for taking shallow copy of julia dog's data(because it's a bad practice to mutate function
parameters)
********************* *
// first i create the data of julia and kate
const juliaData = [9, 16, 6, 8, 3];
const kateData = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
    // point number 1
    const dogsJuliaCorrect = dogsJulia.slice();
    dogsJuliaCorrect.splice(0, 1);
    dogsJuliaCorrect.splice(-2);
    const dogsCorrectData = [...dogsJuliaCorrect, ...dogsKate];
    // another way of merge two arraies together
    // const dogsCorrectData = dogsJuliaCorrect.concat(dogsKate);
    dogsCorrectData.forEach(function (el, i) {
        if (el >= 3) {
            console.log(
                `Dog number ${i + 1} is an adult, and is ${el} years old`,
            );
        } else {
            console.log(
                `Dog number ${i + 1} is an puppy, and is ${el} years old`,
            );
        }
    });
};
checkDogs(juliaData, kateData);
*/
/*************************Coding Challenge #2
1 : this time you try more one time but the mistake that u do is to put this two variables inside humanAges
*********************
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(function (age) {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });
    const adultAges = humanAges.filter((age) => age >= 18);
    // This the first way
    // const averageAges =
    //     adultAges.reduce((acc, age) => acc + age) / adultAges.length;
    // we can do this with another way with arr.length argu of reduce method
    const averageAges = adultAges.reduce(
        (acc, age, _, arr) => acc + age / arr.length,
        0,
    );
    return averageAges;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// code challenge #3
// we use arrow function and chaining method (it will reduce performance if array in huge)
const calcAverageHumanAge1 = (ages) => {
    return ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};
console.log('// code challenge #3');
console.log(calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));
// find method
const movements = [2000, -100, -200, -500, -330, 3000, 1300, 4500, 6000];
const negMovements = movements.find((mov) => mov < 0);
const negMovements1 = movements.filter((mov) => mov < 0);
console.log(movements);
//find method
console.log(negMovements);
// filter method
console.log(negMovements1);
const arrNumbers = [[1, 2], 3, [4, 5, 6], 7, 8];
console.log(arrNumbers.flat());
// pass to flat method number of level
const arrNumbersDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrNumbersDeep.flat(2));
******************************************************************/
// how to use array constructor to make 100 random dice roll
// const randomDice = Array.from(
//     { length: 100 },
//     () => Math.floor(Math.random() * 100) + 1,
// );
// console.log(randomDice);
//****************************************
// Some exercises about all 23 array's method
// const account1 = {
//     owner: 'Ahmed Sameh',
//     movements: [2000, 4500, -100, -200, -500, -330, 3000, 1300],
//     interestRate: 1.2, // %
//     pin: 1999,
// };
// const account2 = {
//     owner: 'Omar Sameh',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5, // %
//     pin: 2002,
// };
// const account3 = {
//     owner: 'Sameh Dahy',
//     movements: [200, 450, 500, -200, -500, -330, 3000, 1300],
//     interestRate: 0.8, // %
//     pin: 1968,
// };
// const account4 = {
//     owner: 'Ahmed Dahy',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1, // %
//     pin: 1975,
// };
// const accounts = [account1, account2, account3, account4];
// // 1.
// const bankDepositSum = accounts
//     .flatMap((acc) => acc.movements)
//     .filter((mov) => mov > 0)
//     .reduce((sum, mov) => sum + mov, 0);
// console.log(bankDepositSum);
// 2.
// First way of know about all deposits above equal 1000 with filter method
// const numDeposits1000 = accounts
//     .flatMap((acc) => acc.movements)
//     .filter((mov) => mov >= 1000).length;
// Second way of know about all deposits above equal 1000 with reduce method
// const numDeposits1000 = accounts
//     .flatMap((acc) => acc.movements)
//     .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);
// // 3. how making object with using reduce method it's advanced example about reduce method
// const { deposits, withdrawals } = accounts
//     .flatMap((acc) => acc.movements)
//     .reduce(
//         (sums, cur) => {
//             // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//             sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//             return sums;
//         },
//         { deposits: 0, withdrawals: 0 },
//     );

// console.log(deposits, withdrawals);

// // 4.
// this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//     const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);
//     const exceptions = [
//         'a',
//         'an',
//         'and',
//         'the',
//         'but',
//         'or',
//         'on',
//         'in',
//         'with',
//     ];

//     const titleCase = title
//         .toLowerCase()
//         .split(' ') // for transformation string to array
//         .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
//         .join(' ');

//     return capitzalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
/*************************Coding Challenge #4**********************
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
// add recommenedFood as new property
dogs.forEach(function (item) {
    item.recommenedFood = Math.trunc(item.weight ** 0.75 * 28);
});
// find sarah owner
const dogOfSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
    `Sarah's dog is eating too ${
        dogOfSarah.curFood > dogOfSarah.recommenedFood ? 'much' : 'littel'
    } food`,
);
// *3* make array of owner who eat them dogs too much and another array for eating too littel
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommenedFood)
    .flatMap((dog) => dog.owners);
const ownersEatTooLittel = dogs
    .filter((dog) => dog.curFood < dog.recommenedFood)
    .flatMap((dog) => dog.owners);
// 4 : Log a string to the console for each array created in 3.
console.log(`${ownersEatTooMuch.join(' and ')}'s eating too much`);
console.log(`${ownersEatTooLittel.join(' and ')}'s eating too littel`);
// 5 : Log to the console whether there is any dog eating exactly the amount of food
const exactlyAmountFood = dogs.some((dog) =>
    dog.curFood === dog.recommenedFood ? true : false,
);
// 6 : Log to the console whether there is any dog eating an okay amount of food
const okayAmountFood = dogs.some(
    (dog) =>
        dog.curFood > dog.recommenedFood * 0.9 &&
        dog.curFood < dog.recommenedFood * 1.1,
);
// 7 : Create an array containing the dogs that are eating an okay amount of food
const okayAmountFoodArray = dogs.filter(
    (dog) =>
        dog.curFood > dog.recommenedFood * 0.9 &&
        dog.curFood < dog.recommenedFood * 1.1,
);
// 8 : Create a shallow copy of the 'dogs' array and sort it by recommended food *see sorted part*
const dogsCopySorted = dogs
    .slice()
    .sort((first, second) => first.recommenedFood - second.recommenedFood);

console.log(exactlyAmountFood);
console.log(okayAmountFood);
console.log(okayAmountFoodArray);
console.log(dogsCopySorted);
*/
/*********************************** Finally I had finished this playlist ******************************** */
/******************************************************************************************************** */
/*********************************** 12. Numbers, Dates, Intl and Timers
1 : Difference between Math.trunc Math.floor
****************************************
2 : using reminder operator to know if number is even or not
****************************************
3 : Now I will know how to create new dates
    3.0 : Now know how to create dates and know about method of this dates
    3.1 : .toISOString() ---> return ISO format (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ)
    3.2 : .getDay() ---> // return the number of day ('thursday')
    3.3 .getFullYear() ---> return the year and don't use .getYear() because it's old
    3.4 : .getTime() ---> return from January 1, 1970 with number of milliseconds
    3.5 : if u want to make hours or months or days like this 05/ 08 / 2023
        const nowTime = new Date()
        3.5.1 : first convert this to string --- > `${nowTime.getMonth() + 1}`.padStart(2, 0);
            3.5.1.1 : do the same way with days and hours
        3.5.2 : I make it in bankist application
    3.6 : we can do any calculation on dates
    3.7 : Internationalization API ---> new Intl.DateTimeFormat(location,options)
        "full"
        "long"
        "medium"
        "short"
*******************************
// point num1
console.log(Math.trunc(-23.3)); // remove the .3 only
console.log(Math.floor(-23.3)); // remove the .3 and make it -24
// we recive two numbers from user and logging random number between these two numbers
const randomNumbers = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomNumbers(-5, 5));
// point num2
const numberFamily = (num) =>
    num % 2 === 0 ? "it's even number" : "it's odd number";
console.log(numberFamily(5));
console.log(numberFamily(2));
console.log(numberFamily(3));
console.log(numberFamily(54544));
// point num3
const nowDate = new Date();
console.log(nowDate);
console.log(nowDate.getFullYear());
console.log(nowDate.getMonth() + 1);
console.log(nowDate.getDay());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());
console.log(nowDate.toISOString());
console.log(nowDate.getTime());
// point num 3.6
const oldYear = new Date(2016);
const nowYear = new Date().getFullYear();
console.log(Math.round(nowYear - oldYear));
// point num 3.6 another example
const oldYear1 = new Date(2011, 8, 10);
const nowYear1 = new Date();
console.log(
    Math.round(Math.abs(oldYear1 - nowYear1) / (1000 * 60 * 60 * 24 * 365)),
);
// point num 3.7
const date = new Date();
const loacal = 'ar-EG';
const loacalHome = 'de-CH';
const numeric = 'numeric';
const niceFromattedDate = new Intl.DateTimeFormat(loacalHome, {
    hours: numeric,
    minutes: numeric,
    seconds: numeric,
}).format(date);
console.log(niceFromattedDate);
// make a real clock in the console
const options1 = {
    timeStyle: 'short',
};
// how to make real clock
// setInterval(function () {
//     const realClock = new Date();
//     const hours = `${realClock.getHours()}`.padStart(2, 0);
//     const minutes = `${realClock.getMinutes()}`.padStart(2, 0);
//     const seconds = `${realClock.getSeconds()}`.padStart(2, 0);
//     console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
*/
/*********************************** Finally I had finished this playlist ******************************** */
/******************************************************************************************************** */
/*********************************** 13. Advanced DOM and Events
1 : Selecting elements
    1.1 : this return whole html code
    1.2 : this return whole <head>
    1.3 : this return whole <body>
    1.4 : this first select element and if i wanna to select class can do this with two ways
        1.4.1 : first way use the same method but do that ('.text')
            1.4.1.1 : this return this item self only and not update itself
        1.4.2 : second way use this method .getElementsByClassName()
            1.4.2.1 : this return htmlcollection[] and this update itself if u put another element with same class name
    1.5 : this return all elements with this name of class in NodeList[] DS and update itself when reload page
    1.6 : this return all elements with this name of tag and return the same at point 1.4.2.1
//////////////////////////// 2 //////////////////////////////
2 : Creating and inserting elements
    2.1 : first step create element and store the container which we want to put element inside it
    2.2 : pass to this element class name
    2.3 : pass to this the insert text of element
    2.4 : choose which location want to put element on it
//////////////////////////// 3 //////////////////////////////
3 : Delete elements
    3.1 :
//////////////////////////// 4 //////////////////////////////
4 : Style element
    4.1 : making style for element and all stylies put into inline element
    4.2 : .style not return any style in extrnal CSS
    4.3 : If i need to return any style from extrnal CSS use getComputedStyle(elementName).style
        4.3.1 : if logging it, it will return all styles of this element
    4.4 : If i need to get any style and modify on it
    4.5 : in css file i made root for CSS variables if i want to modify on any one of it
        4.5.1 : we can set any property we want with this method but method in num 4.1 is easier
//////////////////////////// 5 //////////////////////////////
5 : Attribute of element
    5.1 : to get standard attr from any element do this
        5.1.1 : undefiend because it isn't standard attr, it's specfic attr
        5.1.2 : if i want to get it
        5.1.3 : if i want to get url of img in absoulte format (return url the same was written in html)
    5.2 : to set attr use this
//////////////////////////// 6 //////////////////////////////
6 : eventHandler
    6.1 : mouseenter event --- like hover
    6.2 : we can remove any event by setTimeOut()
//////////////////////////// 7 //////////////////////////////
7 : Event Propagation in Practice caputer phase & target phase and bubbling phase
//////////////////////////// 8 //////////////////////////////
8 : DOM Traversing
    8.1 : first i know the parent and i wanna target all these
        This is going downwards (childer)
        8.1.1 : the first child
        8.1.2 : the last child
        8.1.3 : all childs
    8.2 : second i know the childerns and i wanna target parents
        This is going upwards (parents)
        8.2.1 : closest(condition) method take condition to make search on it and if reach for this element apply specific style

// 1.1
console.log(document.documentElement);
// 1.2
console.log(document.head);
// 1.3
console.log(document.body);
// 1.4 : this for select element
const body = document.querySelector('body');
// 1.4.1
const headText = document.querySelector('.text');
// 1.4.2
const headText1 = document.getElementsByClassName('text');
console.log(headText1);
// 1.5
const allHeaderText = document.querySelectorAll('.text');
console.log(allHeaderText);
// 1.6
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//////////////////////////// 2 //////////////////////////////
// 2.1
const btnPoll = document.createElement('button');
const btnContainer = document.querySelector('.btn-poll');
// 2.2
btnPoll.classList.add('poll');
// 2.3
btnPoll.innerHTML = 'Answer poll from JS ⁉️';
// 2.4
btnContainer.append(btnPoll); // make it last child node of container --- same method ---> .after()
btnContainer.prepend(btnPoll); // make it first child node of container --- same method ---> .before
//////////////////////////// 3 //////////////////////////////
const btnPollSecond = document.querySelector('.poll2');
btnPollSecond.addEventListener('click', function () {
    btnPoll.remove();
});
//////////////////////////// 4 //////////////////////////////
// 4.1
btnPollSecond.style.backgroundColor = 'Green';
btnPollSecond.style.fontSize = '2rem';
btnPollSecond.style.color = 'white';
// 4.2
console.log(btnPollSecond.style.margin);
// 4.3
console.log(getComputedStyle(btnPollSecond).margin);
console.log(getComputedStyle(btnPollSecond).display);
// 4.4
console.log(
    (btnPollSecond.style.height =
        Number.parseFloat(getComputedStyle(btnPollSecond).height, 10) +
        3 +
        'px'),
);
// 4.5
document.documentElement.style.setProperty('--first-color', 'aqua');
// 5.1
console.log(btnPollSecond.className);
// 5.1.1
console.log(btnPollSecond.author);
//5.1.2
console.log(btnPollSecond.getAttribute('author'));
// 5.1.3
const img = document.querySelector('.img');
console.log(img.src);
console.log(img.getAttribute('src'));
// 5.2
btnPollSecond.setAttribute('company', 'quizApp');
// 6.1
btnPollSecond.style.backgroundColor = 'blue';
const changeColor = function () {
    btnPollSecond.style.backgroundColor = 'green';
};
openModal.addEventListener('mouseenter', changeColor);
// 6.2
setTimeout(
    () => openModal.removeEventListener('mouseenter', changeColor),
    3000,
);
// 7
const section = document.querySelector('.capture--section');
const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
        0,
        255,
    )})`;
document.querySelector('.link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget);
});
btnPollSecond.addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget);
});
// 8
const headingBox = document.querySelector('.text-box');
// 8.1.1
headingBox.firstElementChild.style.color = 'darkBlue';
console.log(headingBox.firstElementChild);
// 8.1.2
headingBox.lastElementChild.style.color = 'darkRed';
console.log(headingBox.lastElementChild);
// 8.1.3 (return nodelist that return every child in this like comment or text)
console.log(headingBox.childNodes);
// 8.1.3 (return htmlcollection that return only childern like element only)
console.log(headingBox.children);
// 8.2
const middleHeader = document.querySelector('.text2');
console.log(middleHeader.parentElement);
console.log(middleHeader.parentNode);
middleHeader.closest('.text-box').style.backgroundColor = 'var(--second-color)';
*/
/*********************************** Finally I had finished this playlist *************************/
/***************************************** Coding Challenge #1 ( Object Oriented Programming (OOP) )
 1 : first problem I want to make constructor function
 1.1 : to solve this problem make function with first capital letter
 2 : second make two methods for Car constructor function 'accelerate' & 'rake'
 3 : create two objects or instance for two companies of cars
 4 : call two methods for each of two cars instance
 ***************************************************************************************************
 /// Point num 1
 const Car = function (speed, make) {
    this.speed = speed;
    this.make = make;
};
 /// Point num 2
 Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(
        `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H`,
    );
};
 Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(
        `${this.make} Car's speed when pressure in brake Padel ${this.speed}`,
    );
};
 const bmw = new Car(160, 'BMW');
 const mercedes = new Car(150, 'Mercedes');
 bmw.accelerate();
 bmw.brake();
 console.log('********************');
 mercedes.accelerate();
 mercedes.brake();
 **************************************************************************************************/
/***************************************** Coding Challenge #2 ( Object Oriented Programming (OOP) )
 1 : first thing to re-make challenge #1 but with ES6 class
 2 : set the setter to make speed of car with km/h
 3 : set the getter to make it with mi/h and store it inside class
 ***************************************************************************************************
 class CarCl {
    constructor(speed, carName) {
        this.speed = speed;
        this.carName = carName;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    accelerate() {
        this.speed += 10;
        console.log(
            `${this.carName} Car's speed is when pressure in fuel Padel ${this.speed} KM/H`,
        );
    }
    brake() {
        this.speed -= 5;
        console.log(
            `${this.carName} Car's speed when pressure in brake Padel ${this.speed}`,
        );
    }
}
 const ford = new CarCl(120, 'Ford');
 ford.accelerate();
 ford.brake();
 ford.speedUS = 150;
 console.log(ford);
 **************************************************************************************************/
/***************************************** Coding Challenge #3 ( Object Oriented Programming (OOP) )
 polymorphism apply here because accelerate method that created for EVCar constructor
 overwrite to accelerate method which inhertance from Car parent
 I use Object.Create to inherted Car.Prototype to EVCar.Prototype
 ***************************************************************************************************
 const Car = function (speed, make) {
    this.speed = speed;
    this.make = make;
};
 Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(
        `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H`,
    );
};
 Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(
        `${this.make} Car's speed when pressure in brake Padel ${this.speed}`,
    );
};
 /// Point num 2
 const EVCar = function (speed, make, charge) {
    Car.call(this, speed, make);
    this.charge = charge;
};
 EVCar.prototype = Object.create(Car.prototype);
 EVCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};
 EVCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H and charge will decrease to ${this.charge}%`,
    );
};
 const Tesla = new EVCar(120, 'Tesla', 23);
 Tesla.chargeBattery(90);
 Tesla.accelerate();
 Tesla.brake();
 */
/**************************************************************************************************/
/***************************************** Coding Challenge #4 ( Object Oriented Programming (OOP) )
 class CarCl {
    constructor(speed, make) {
        this.speed = speed;
        this.make = make;
    }
    accelerate() {
        this.speed += 10;
        console.log(
            `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H`,
        );
    }
    brake() {
        this.speed -= 5;
        console.log(
            `${this.make} Car's speed when pressure in brake Padel ${this.speed} KM/H`,
        );
        return this;
    }
}
 class EVCl extends CarCl {
    #charge;
    constructor(speed, make, charge) {
        super(speed, make);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(
            `${this.make} Car's speed is when pressure in fuel Padel ${
                this.speed
            } KM/H and charge will decrease to ${this.#charge}%`,
        );
        return this;
    }
}
 const rivian = new EVCl(120, 'Rivaian', 23);
 rivian.accelerate().chargeBattery(90).brake();
 */
/*********************************** 14. Object-Oriented Programming (OOP) With JavaScript
1 : video num 5 & 6
 1.1 : when create constructor function these four steps happened
    1.1.1 : will create New {}
    1.1.2 : function will be called = this ---> {}
    1.1.3 : {} linked it to prototype
    1.1.4 : function automatically return this {}
 1.2 : to create constructor function make first letter Captial
 1.3 : bad practise to make method inside constructor function because if we need to make 1000 instance all
  1000 instance will make copy of this method and make performance worse
 1.4 : now I will make methods for constructor function with effiecnt way
 1.5 : after making method this method not found inside ahmed object but will be found inside __proto__ of object
  because this method in inhertance form Person constructor to ahmed as object
 1.6 : __proto__ come from this point 1.1.3
 1.7 : if I search for calcAge method inside ahmed object itself will not find but if I search in __proto__ will find it
  because ahmed or omar object contains the three properties which come from Person itself
 /// This is examples about all videos before video num 10
 const Person = function (firstName, lastName, birthYear) {
    // to create properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    // point num 1.1.2
    console.log(this);
};
 const Ahmed = new Person('Ahmed', 'Dahy', 1999);
 const Omar = new Person('Omar', 'Dahy', 2002);
 console.log(Ahmed, Omar);
 /// point 1.4
 Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};
 Person.prototype.displayFullName = function () {
    console.log(
        `My first name is ${this.firstName} and my last name is ${this.lastName}`,
    );
};
 Ahmed.calcAge();
 Omar.calcAge();
 /// Point 1.5
 console.log(Ahmed);
 /// this way from webstorm to know .__proto__
 /// console.log(Ahmed['__proto__']);
 /// this is the second way
 console.log(Ahmed.__proto__);
 /// Point 1.6
 console.log(Person.prototype === Ahmed['__proto__']);
 /// Point 1.7
 console.log(Ahmed.hasOwnProperty('firstName'));
 /// when search inside ahmed itself
 console.log(Ahmed.hasOwnProperty('displayFullName'));
 /// when search inside .__proto__ itself
 console.log(Ahmed.__proto__.hasOwnProperty('displayFullName'));
 ***************************************************************************************************
 2 : Video Num 10 ES6 Classes
  2.1 : classes are special kind of functions
  2.2 : classes are first-class
  2.3 : inside block of class ES6 Apply strict mode even if u don't write in first line of your file
  2.4 : classes are Not hoisted ---> (we can't call it before declare class)
  2.5 : In Classes methods are stored in prototype not in object it self, so I don't need to write method like in point 1.4
  2.6 : to make instance of class or new object make it like last way
 ***************************************************************************************************
 3 : Video Num 11 Setter & getter
  3.1 : getter to use it write get keyword before method name
    3.1.1 : when I need to get value of method or property from class
  3.2 : setter to use it write set keyword before method name
    3.2.1 : when I need to set new value for example to string inside class
 **************************************************************************************************
 4 : Video Num 12 static method
  4.1 : static method is different of normal method
  4.2 : static method not inherted to instance
  4.3 : To make it use static keyword
 */
/// Here I apply the same example for person constructor function but with class
/*
class PersonCl {
    /// This is properties of PersonCl class
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    /// These are methods of class
    calcAge() {
        console.log(2023 - this.birthYear);
    }
    greeting() {
        console.log(`Hey ${this.firstName}`);
    }
    get knowAge() {
        return 2023 - this.birthYear;
    }
    /// Point num 3.1
    get knowFisrtName() {
        return this.firstName;
    }
    /// Point num 3.2
    set dateOfUser(birth) {
        if (2023 - this.birthYear > birth) {
            openModalAction();
        } else {
            return false;
        }
    }
    /// Point num 4
    static sayHi() {
        console.log('hi every body ✌️');
    }
}
/// Point num 2.6
const Ahmed1 = new PersonCl('Omar', 'Dahy', 2002);
console.log(Ahmed1);
/// here call method from class block and display the value
Ahmed1.calcAge();
Ahmed1.greeting();
console.log(PersonCl.prototype === Ahmed1.__proto__);
/// Point num 3.1.1
console.log(Ahmed1.knowAge);
/// Point num 3.2
console.log(Ahmed1);
// Ahmed1.dateOfUser = numberLabel.value;
/// Point num 4
PersonCl.sayHi();
/// Point num 4.2
// Ahmed1.sayHi();
/// Point num 1
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
/// Here I Finally Understand the logic for how getting value from input html and convert it to number and make validation on age
///************************************ And this area is for any code I want to be executed all time
const numberLabel = document.getElementById('number');
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const numberConvert = Number(numberLabel.value);
    if (numberConvert <= 16) {
        openModalAction();
    }
});
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${
                Object.values(data.flags).map((el) => el)[1]
            }" alt='flag' />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(
                    data.languages,
                ).join(' ')}</p>
                <p class="country__row"><span>💰</span>${Object.values(
                    data.currencies,
                )
                    .map(({ name }) => name)
                    .join(' ')}</p>
            </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
};
const getCountryData2 = async function (country) {
    /// Put all code into try block for js try to execute that
    try {
        const countryAsync = await fetch(
            `https://restcountries.com/v3.1/name/${country}`,
        );
        const countryResponse = await countryAsync.json();
        renderCountry(countryResponse[0]);
        const neighbour = countryResponse[0].borders[2];
        const neighbourResponse = await fetch(
            `https://restcountries.com/v3.1/alpha/${neighbour}`,
        );
        const neighbourResponseData = await neighbourResponse.json();
        renderCountry(neighbourResponseData[0], 'neighbour');
        /// This for showing container
        countriesContainer.style.opacity = 1;
    } catch (error) {
        /// if any error happen then js execute this line of code to handle error
        console.error(`You input wrong country ${error.message}🟥🟥`);
    }
};
btn.addEventListener('click', function () {
    // getCountryData2('egypt');
    // getCountryData2('brasil');
    getCountryData2('suisse');
});
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1- In private field ,private method, setter, getter and static method  all put in instance itself not in prototype
  And we can't call it outside the class
2- Now will make chaning for all method in class with add this keyword
  to all method for returning the object or class itself to make chaning work fine
////////////////////////////////////////////////////////////////////////////////////////////////////
class PersonCl {
    /// Private fields and put this in constructor function
    #birthYear;
    /// This is properties of PersonCl class
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        /// we must call the private field in constructor function to can use it in all methods
        this.#birthYear = birthYear;
    }
    /// These are methods of class
    calcAge() {
        console.log(2023 - this.#birthYear);
        return this;
    }
    greeting() {
        console.log(`Hey ${this.firstName}`);
        return this;
    }
    get #knowAge() {
        return 2023 - this.#birthYear;
    }
    /// Point num 3.1
    get knowFisrtName() {
        return this.firstName;
    }
    /// Point num 3.2
    set dateOfUser(birth) {
        if (2023 - this.birthYear > birth) {
            openModalAction();
        } else {
            return false;
        }
    }
    /// Point num 4
    static sayHi() {
        console.log('hi every body ✌️');
    }
}
/// This way for how making inhertance in ES6 Classes
class StudentCl extends PersonCl {
    constructor(firstName, lastName, birthYear, course) {
        super(firstName, lastName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(
            `My first name is ${this.firstName} and I apply this course: ${this.course}`,
        );
        return this;
    }
}
const Ahmed1 = new StudentCl('Ahmed', 'Dahy', 1999, 'Computer Science');
/// this way of chaning and all these method return its output
Ahmed1.introduce().calcAge().greeting();
*/
/***************************************** Coding Challenge #3 ( Object Oriented Programming (OOP) )
 polymorphism apply here because accelerate method that created for EVCar constructor
 overwrite to accelerate method which inhertance from Car parent
 I use Object.Create to inherted Car.Prototype to EVCar.Prototype
 ***************************************************************************************************
 const Car = function (speed, make) {
    this.speed = speed;
    this.make = make;
};
 Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(
        `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H`,
    );
};
 Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(
        `${this.make} Car's speed when pressure in brake Padel ${this.speed}`,
    );
};
 /// Point num 2
 const EVCar = function (speed, make, charge) {
    Car.call(this, speed, make);
    this.charge = charge;
};
 EVCar.prototype = Object.create(Car.prototype);
 EVCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};
 EVCar.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} Car's speed is when pressure in fuel Padel ${this.speed} KM/H and charge will decrease to ${this.charge}%`,
    );
};
 const Tesla = new EVCar(120, 'Tesla', 23);
 Tesla.chargeBattery(90);
 Tesla.accelerate();
 Tesla.brake();
 */
/**************************************************************************************************/
/*********************************** Finally I had finished this playlist *************************/
/************************* 16. Asynchronous JavaScript Promises, AsyncAwait, and AJAX
1: This is first and traditional way of how using Ajax API with new XMLHttpRequest()
  * and as u see it take alot of code and I face the callhell that happen when nested callback functions
2: With fetch().then we make the same at point num 1 but with pretty, easy and less code than point num1
3 : Now I will know about handling error with catch()
 const btn = document.querySelector('.btn-country');
 const countriesContainer = document.querySelector('.countries');
 /// Point num 1
 // const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data);
//     });
// };
 /// here i make refactor to code and put this html block in function
 const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${
                Object.values(data.flags).map((el) => el)[1]
            }" alt='flag' />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(
                    data.languages,
                ).join(' ')}</p>
                <p class="country__row"><span>💰</span>${Object.values(
                    data.currencies,
                )
                    .map(({ name }) => name)
                    .join(' ')}</p>
            </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
};
 const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};
 /// Point num 2
 const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[2];
            if (!neighbour) return;
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0], 'neighbour');
        })
        .catch((err) => {
            console.error(err);
            renderError(`Something went wrong ${err.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

 btn.addEventListener('click', function () {
    getCountryData('egypt');
});
 // getCountryData('brasil');
 // getCountryData('germany');
 // getCountryData('usa');
 // getCountryData('uae');
 */
/***************************************** Coding Challenge #1 ( 16. Asynchronous JavaScript Promises, AsyncAwait, and AJAX )
all input links that had given to me isn't access and not working
****************************************************************************************************
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[4];
            if (!neighbour) return;
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0], 'neighbour');
        })
        .catch((err) => {
            // console.error(err);
            renderError(`Something went wrong ${err.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    });
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};
/// Take api link and function for timing if timing finished before api
// link it will display first else the api display first
Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    timeout(0.14),
])
    .then((data) => console.log(data[0]))
    .catch((err) => console.error(err));
/// If any reject or error would found it will return the reject onlt
Promise.all([
    Promise.resolve('Valid1'),
    Promise.reject('Invalid'),
    Promise.resolve('Valid-1'),
])
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
/// It will return all promises either fulfilled or reject in array ES2020
Promise.allSettled([
    Promise.resolve('Valid2'),
    Promise.reject('Invalid2'),
    Promise.resolve('Valid3'),
])
    .then((data) => console.log(data))
    .catch((err) => console.error(`${err.message}`));
/// It will return the first fulifuld value and ignore any reject or error
// value the same of all but ignore error ES2021
Promise.any([
    Promise.resolve('Valid'),
    Promise.reject('Invalid'),
    Promise.resolve('Valid'),
])
    .then((data) => console.log(data))
    .catch((err) => console.error(`${err.message}`));
/// Now will test the Asynchronous tasks and synchronous tasks
/// And what difference between call back queue and micro task queue
// console.log('test start now'); /// 1
// setTimeout(() => console.log('timer will run in 0 second'), 0); /// 5
// Promise.resolve('this is first promise').then((response) =>
//     console.log(response),
// ); /// 3
// Promise.resolve('this is second promise').then((res) => {
//     /// make this to prove that timeout number not meaning anything if any task in micro task queue
//     // for (let i = 0; i < 100000000; i++) {}
//     console.log(res); /// 4
// });
// console.log('test end now'); /// 2
/// Now I will make promise example for showing country and its neighbout with async and await
*/
/**************************************************************************************************/
/*********************************** Finally I had finished this playlist *************************/
/************************* 17. Modern JavaScript Development Modules, Tooling, and Functional
1 : This is the first way of importing modules to the main module of main script
2 : For making export from module can do this with export default or named export
 2.1 : Don't put export keyword inside any block like if...else of function
3 : To import this fucntion do this put its name inside carlyPraces
4 : To export some variables do this and can change its name by add as
5 : This is way for importing everything from module as object
6 : export default work like this and import like this
7 : Don't mix export default and named export
8 : live connection : when import any variable from another module don't return copy of this var but
  return the var itself because here make push method to array and wher add names it automatically pushed
*/
/// Point num3
// import { fullName, birthYear as birth, age } from './displayName.js';
/// Point num 7
// import diplayInfo { fullName, birthYear as birth, age } from './displayName.js';
/// Point num 5
import * as displayName from './displayName.js';
/// Point num 6
import displayInfo, { arrName } from './displayName.js';
console.log('importing module');
// displayName.fullName('Ahmed', 'Dahy');
console.log(displayName.birthYear, displayName.age);
displayInfo('Omar', 'Dahy');
displayInfo('Ahmed', 'Dahy');
displayInfo('Sameh', 'Dahy');
displayInfo('Hamsa', 'Dahy');
/// Point num 8
console.log(arrName);
/*
**************************************************************************************************
**************************************************************************************************
****************************************************************************************************
Now and after a long time of studying, learning and making code challenges I Finish JS Course.
I learn alot and alot of features and really how js work and how to write the code,And this file will
eventually my refernce OF any block of code I want to restudy it
****************************************************************************************************
**************************************************************************************************
************************************************************************************************
 */
// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints);
//     console.log(classPoints);
//     const averageScore = classPoints.reduce(
//         (acc, score, _, arr) => acc + score / arr.length,
//         0,
//     );
//     return averageScore < yourPoints;
// }
/// Solution for this problem-Solving in one line
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }
// console.log(betterThanAverage([2, 3], 5));
///*************************************************************************************************
/*

Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);

*/
// const min = function (list) {
//     // list.sort((a, b) => a - b);
//     // return list[0];
//     return Math.min(...list);
// };
//
// const max = function (list) {
//     // list.sort((a, b) => b - a);
//     // return list[0];
//     return Math.max(...list);
// };
// console.log(min([42, 54, 65, 87, 0]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(max([5]));
///*************************************************************************************************
// const reverseSeq = (n) => {
//     // let arrSeq = [];
//     // for (let i = n; i > 0; i--) {
//     //     arrSeq.push(i);
//     // }
//     // return arrSeq;
//     return Array(n)
//         .fill(0)
//         .map((e, i) => n - i);
// };
// console.log(reverseSeq(5));
// console.log(
//     Array(5)
//         .fill(0)
//         .map((element, index) => 5 - index),
// );
///*************************************************************************************************
/*
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
returns "(123) 456-7890"
******************* Solution ************************
const createPhoneNumber = (numbers) => {
    const firstCell = numbers.slice(0, 3).join('');
    const secondCell = numbers.slice(3, 6).join('');
    const wholeCell = numbers.slice(6).join('');
    return '(' + firstCell + ')' + ' ' + secondCell + '-' + wholeCell;
};
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
************************************ Second Problem-Solving ****************************************
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
******************* Solution ************************
const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    } else {
        return digitalRoot(
            n
                .toString()
                .split('')
                .map(Number)
                .reduce((acc, num) => acc + num),
        );
    }
};
console.log(digitalRoot(16));
console.log(digitalRoot(456));
///*************************************************************************************************
************************************ Third Problem-Solving ****************************************

const isIsogram = (string) => {
    let str = string
        .toLowerCase()
        .split('')
        .sort()
        .join('')
        .match(/(.)\1+/g);
    if (str === null) {
        return true;
    } else {
        return false;
    }
};
console.log(isIsogram('Dermatoglyphics'));
*/
const arr = [1, 2, 3, 4];
const arr1 = [];
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};
console.log(arr.last());
console.log(arr1.last());
