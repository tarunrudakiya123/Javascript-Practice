// Problem: How to filter negetive value from an array 


const number = [1, -2, 3, -4, 5, -6];

const positiveNumbers = [];

for (let i = 0; i < number.length; i++) {
    if (number[i] >= 0) {
        positiveNumbers.push(number[i]);
    }
}

console.log(positiveNumbers); // Output: [1, 3, 5]

// ----------------------------------------------------------------------------------------------------//

// Problem: How to filter positive value from an array 


const numbers = [1, -2, 3, -4, 5, -6, 10, -20, 243, , 500, -53, 30, -333];

const NegetiveArray = [];                                  //Empty array//

var i = 0;                                                 //Declare  variable for comapare in loop 

while (i < numbers.length) {                               //Loop will run from 0 to array length//

    if (numbers[i] < 0) {                                  // 0 is consider value 
        NegetiveArray.push(numbers[i]);

    }

    i++

}

console.log(NegetiveArray);

// ----------------------------------------------------------------------------------------------------//

// Problem: How to nake multiplication table using array and loop in Js//

// Define the size of the table
const tableSize = 10;

// Create an empty two-dimensional array to store the table
const table = [];

// Populate the table with multiplication values
for (let i = 0; i <= tableSize; i++) {
    // Create a new row in the table
    table[i] = [];


    for (let j = 0; j <= tableSize; j++) {
        // Multiply the values and add them to the current row
        table[i][j] = i * j;
    }
}

// Print the table to the console
for (let i = 0; i <= tableSize; i++) {
    let row = '';

    for (let j = 0; j <= tableSize; j++) {
        // Add the current value to the row string
        row += table[i][j] + '\t';
    }

    console.log(row);
}
