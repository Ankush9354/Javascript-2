let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

console.log(+true);// yeh true -> 1 me covert kr dega aur output 1 dega 

console.log(+""); // yeh 0 output dega
// yaha pr "+" ka mtlb hai ki jo bhi + ke aage hai vo number me convert ho jayega 
// +true       // 1
// +false      // 0

// +"123"      // 123
// +"12.5"     // 12.5

// +""         // 0
// +" "        // 0

// +"hello"    // NaN

// +null       // 0
// +undefined  // NaN

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let number = 1;
console.log(++number);// 2 -> first increase then return 

console.log(number++); // 2 -> first return then inncrease
console.log(number); // 3