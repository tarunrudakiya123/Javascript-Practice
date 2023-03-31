// ----------------------------------------------------------------------------------------------------//

//         --------Map Method-------------//


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const New = numbers.map(function (main) {
    return main * 1000
});


console.log(New)

// ----------------------------------------------------------------------------------------------------//

function isEven(number) {
    if (number % 2 === 0) {

        return true;
    } else {
        return false;
    }
}

console.log(isEven(20)); // true
console.log(isEven(15)); // false


// ----------------------------------------------------------------------------------------------------//


function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
console.log(sumEvenNumbers([2, 4, 6, 8]));
console.log(sumEvenNumbers([1, 3, 5, 7]));


// ----------------------------------------------------------------------------------------------------//
