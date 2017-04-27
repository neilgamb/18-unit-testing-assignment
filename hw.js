////////////////////////// INSTRUCTIONS //////////////////////////

/**
 * For each of the following practice problems, write a series of tests that are as thorough as possible. 
 * Then solve the function so that it passes all tests. Submit both your tests and functions that pass 
 * those tests. Try to be as thorough as possible with your tests.
 */

import test from 'ava';

// ================ 1 | nickname =======================================
console.log("====== 1 | nickname =======================================")

/** 
 * Write a function that accepts two parameters: a potential nickname (string) and a fullName (string). 
 * Return true if the nickname is valid for the provided full name, and false otherwise.
 *
 * The nickname is valid if it's shorter than the full name and contains all letters in the order they appear 
 * in the full name. For example, "Lusa" is a valid nickname for "LUke SegArs" but "Luek" and "Sek" are not. 
 **/

test ('nicknamesTests', function (t){
    t.deepEqual(nicknameTester('Luek', 'Luke Segars'), false);
    t.deepEqual(nicknameTester('Sek', 'Luke Segars'), false);
    t.deepEqual(nicknameTester('Luke Segars', 'Luke Segars'), false);
    t.deepEqual(nicknameTester('Luke Segarx', 'Luke Segars'), false);
    t.deepEqual(nicknameTester('Luke Segarsy', 'Luke Segars'), false);

    t.deepEqual(nicknameTester('', 'Luke Segars'), undefined);

    t.deepEqual(nicknameTester('Lusa', 'Luke Segars'), true);
    t.deepEqual(nicknameTester('Luk', 'Luke Segars'), true);
    t.deepEqual(nicknameTester('LS', 'Luke Segars'), true);
});


function nicknameTester (nickname, fullName){

    let array = [];

if (nickname === ''){
    return undefined;
}

if (nickname.length < fullName.length){
    
    for (let i = 0; i < nickname.length; i++){

        for (let p = 0; p < fullName.length; p++){

            if(nickname[i] === fullName[p]){

                    array.push(nickname[i]);
            }
        }
    }

    let result = array.join('');

    if (result === nickname){
        return true;
    } else {
        return false;
    }
}

return false;
  
}

console.log(nicknameTester('Luek', 'Luke Segars'));



// ================ 2 | descending =======================================
console.log("====== 2 | descending =======================================")

/** 
 * Write a function that accepts one parameter: a number (number). Return the number with all 
 * digits sorted in descending (largest to smallest) order. 
 * 
 * For example, descending(5614) should return the number 6541. Make sure you're returning a 
 * number, not a string!
 **/

test ('descending', function (t){
    t.deepEqual(descending(14), 41);
    t.deepEqual(descending(5614), 6541);
    t.deepEqual(descending(90), 90);
    t.deepEqual(descending(2), 2);
    t.deepEqual(descending(11), 11);

});

function descending(num){

    let numberString = num.toString();
    let digits = numberString.split('');
    digits.sort();
    digits.reverse();
    let result = Number(digits.join(''));
    
    return result;

}

console.log(descending(11));


// ================ 3 | longx =======================================
console.log("====== 3 | longx =======================================")

/** 
 * Write a function that accepts one parameter: a sequence (string). Return the length of the 
 * longest continuous string of x's. 
 * For example, abxxaxterxtxxxa should return 3.
 **/


test ('longx', function (t){
    t.deepEqual(longx('abxxterxtxxxa'), 3);
    t.deepEqual(longx('abxxxxterxtxxxa'), 4);
    t.deepEqual(longx('abterxta'), 1);
    t.deepEqual(longx('abterta'), 0);
    t.deepEqual(longx('4x'), 1);

});

function longx(string){

    let xCount = 0;
    let xRun = 0;

    for (let i = 0; i < string.length; i++){
        if(string[i] === 'x'){
            xCount++;
        } else {

        if(xCount > xRun){
            xRun = xCount;
        }
            xCount = 0;
        }

    }

if (xCount > xRun){
    xRun = xCount;
}

return xRun;

}

console.log(longx('abxxterxtxxxa'));


// ================ 4 | guessWho =======================================
console.log("====== 4 | guessWho =======================================")

/** 
 * Write a function that accepts one parameter: a set of funcs (array). Return the numbers 
 * from 1-100 that return true for each of the functions in the array.
 **/

// let funcs = [
//   function big(x) { return x > 80; },
//   function odd(x) { return x % 2 === 1; },
// ];

// let result = guessWho(funcs);
// // result is [81, 83, 85, 87, 89, 91, 93, 95, 97, 99] 

// test ('guessWho', function (t){
//     t.deepEqual(guessWho(funcs), result);
// });


// function guessWho(funcs){

// let winners = [];

// for (let i = 1; i <= 100; i++) {

//     let arrayTemp = [];

//     for (let p = 0; p < funcs.length; p++){

//         if (funcs[p(i)] === true){

//                 arrayTemp.push(i);
//         };

//     }

//   }

//   return arrayTemp;

// }

// ================ 5 | subway =======================================
console.log("====== 5 | subway =======================================")

/** 
 * Write a function that accepts two parameters: an array of populations 'hungries' and an 
 * array of rent prices 'rent'. Each index represents a single location along an interstate 
 * where Subway could build one of its luxury sandwich establishments. 
 * 
 * If each person (elements in the first array) is expected to generate $10 per day, return 
 * the index of the most profitable restaurant given the expected revenue from the local hungry 
 * sandwich-lovers and the daily rent the restaurant is responsible for.
 **/

test ('subway', function (t){
    t.deepEqual(subway(hungries, rent), 3);
    t.deepEqual(subway(hungriesTwo, rent), 1);

});


let hungries = [
    {pop: 10, salary: 10},
    {pop: 15, salary: 10},
    {pop: 15, salary: 10},
    {pop: 20, salary: 10},
]

let hungriesTwo = [
    {pop: 12315, salary: 1003},
    {pop: 15341, salary: 4500},
    {pop: 24345, salary: 2332},
    {pop: 24220, salary: 934},
]

let rent = [40, 50, 100, 10];

console.log(hungries);

function subway(hungries, rent){

let mostProfit = 0;
let mostProfitLoc = 0;

    for(let i = 0; i < hungries.length; i++){
        if( (hungries[i].pop * hungries[i].salary) - rent[i] > mostProfit){
            mostProfit = (hungries[i].pop * hungries[i].salary) - rent[i];
            mostProfitLoc = i;
        }
    }

    return mostProfitLoc;
}

console.log(subway(hungries, rent));