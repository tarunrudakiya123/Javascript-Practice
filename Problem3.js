//    Program to find the largest number in an array

let numb = [10, 20, 5, 35, 50];

let largestNumber = numb[0]; // Set the first number as the largest

for (let i = 1; i < numb.length; i++) { // Loop through the array starting from the second number
    if (numb[i] > largestNumber) { // If the current number is larger than the largest number so far
        largestNumber = numb[i]; // Set the current number as the new largest number
    }
}

console.log("The largest number in the array is " + largestNumber);

// ----------------------------------------------------------------------------------------------------//


    // Problem : Reverse array Print here..//

let number = [10, 20, 5, 35, 50, 30, 100, 99, 200, 4003];       //lenght = 10 - 1 = 9

//  Index =  [0,  1 , 2,  3 ,  4,  5,  6,  7,   8,    9]

// Index = 9, so loop will run til 9 index //


let t = number.length - 1                                  //10 lenght

while (t >= 0) {                                                // loop will run  0 to 9 index (in reverse)
    console.log(number[t]);

    t--;
}

// ----------------------------------------------------------------------------------------------------//


    // Problem : forward array Print here..//

let numbers = [10, 20, 5, 35, 50];

let k = 0

while (k < numbers.length) {

    console.log(numbers[k]);
    k++;
}


// ----------------------------------------------------------------------------------------------------//

    // Problem : Add value in Empty array[]

let myArray = [];

let p = 0

while (p < 10) {

    myArray[p] = p + 1;

    p++
}

console.log(myArray);

// ----------------------------------------------------------------------------------------------------//

    // Problem : How to add two array

// Example arrays
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

// Create a new array to store the sum
let result = [];

// Initialize the index variable
let i = 0;

// Iterate through the arrays
while (i < array1.length && i < array2.length) {
    // Add the corresponding elements and append the result to the new array
    result.push(array1[i] + array2[i]);

    // Increment the index variable
    i++;
}


// Print the result
console.log(result);

// ----------------------------------------------------------------------------------------------------//