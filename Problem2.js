"use strict";

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert(arr === fruits); // true

var abc = arr.push("Pear"); // modify the array by reference

alert(fruits); // Banana, Pear - 2 items now


console.log(abc)

// ----------------------------------------------------------------------------------------------------//


    let age = 17;

if (age >= 18) {
    console.log("You are eligible to vote.");
    alert("You are right person for voting")
} else {
    console.log("You are not eligible to vote yet.");
    alert("You are not right person for voting")
}

// ----------------------------------------------------------------------------------------------------//