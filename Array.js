//Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.

//An array is an object that can store multiple values at once. 

//For example,

//const words = ['hello', 'world', 'welcome']; Here, words is an array


// const fruits = [];

// fruits.push("banana", "apple", "peach");
// console.log(fruits.length);


// let Team = 11;

// const Cricket = ["Virat", "Rohit", "Hardik", "SuryaKumar", "Bumrah", "Ashrdeep", "Jadeja", "Dhoni", "Pruthvi-show", "Jaiswal", "Umesh"];

// const Tarun = Cricket.length;

// for (let i = 1; i <= Tarun; i++) {

//     console.log(Cricket)
// }

// var arr = ["Tarun", "Rahul", "Henil","Hardik", "Surbhi", "Vidhi"]
// console.table(arr);
// console.log(arr.length);
// console.log([1,2,3,4,5,6,7,8,9,10]);
// console.log(typeof (arr));


const om = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(om)
console.log(om[3])         //find value 
console.log(om.length)   //Index 
console.log(typeof om)

//---------------------------------------  ( Push method  )----------------------------------------------------//



//Push method:      (Use for Add value in array at last position)       

const app = om.push('Push');
console.log(om)

//---------------------------------------  ( Unshift Method )----------------------------------------------------//


//Unshift Method:    (Use for Add value in array at First Position) //

om.unshift('Unshift')   //add Value at frist position in Array //
console.log(om)

//---------------------------------------  ( Shift Method )----------------------------------------------------//


//Shift Method:     (Use for remove first value from array and return the value)//

om.shift()          //Remove first Value from Array// 
console.log(om);


//---------------------------------------  ( Pop Method )----------------------------------------------------//


//Pop Method:      (Use for remove last value from array and return the value)//

om.pop()           //Remove last Value from Array// 
console.log(om);



//===================================================================================================================//




//--------------------------------------- New Exmple ( Change Value )----------------------------------------------------//



om[2] = '2000'         // Change value by using index ex: om[2] = '2000'//

console.log(om)


//--------------------------------------- New Exmple ( Index )----------------------------------------------------//


const Name = ["Virat", "Rohit", "Hardik", "SuryaKumar", "Bumrah"];

Find = Name.indexOf('Bumrah')   //Find Index of value//

console.log(Find);


//--------------------------------------- New Exmple ( Last Index )----------------------------------------------------//


const Player = ["Virat", "Rohit", "Hardik", "SuryaKumar", "Bumrah"];

LastIndex = Player.lastIndexOf('Hardik')

console.log(LastIndex);


//--------------------------------------- New Exmple (Includes)----------------------------------------------------//

const Names = ["Virat", "Rohit", "Hardik", "SuryaKumar", "Bumrah"];

Hello = Names.includes('Bumrah')

console.log(Hello);

//--------------------------------------- New Exmple (Find object)----------------------------------------------------//

let channels = [{
    name: 'Tarun',
    Money: 10000
},

{
    name: 'Rahul',
    Money: 20000
},

{
    name: 'Henil',
    Money: 25000

}];


const find1 = channels.find((element) => {       //Find Money and return//
    return element.Money === 20000
})
console.log(find1);




const find2 = channels.find((element) => {        //Find Name and return//
    return element.name === 'Tarun'
})
console.log(find2);


//--------------------------------------- New Exmple ( Concat Method )----------------------------------------------------//

// It is use for join more value in array //
// It is alse use for join two or more array. //


let names1 = ["Tarun", "Rohit", "Hardik", "Kumar", "Pradip"];
let names2 = ["Mandip", "Urdip", "Vandip", "Suryadip", "Pradip"];


// console.log(names1.concat('Yash', 'Suraj'))
console.log(names1.concat(names2))

//--------------------------------------- New Exmple ( Slice Method )----------------------------------------------------//

//Basically Slice method is used for remove the value form Array//

//Slice(Start Point Index , End Point Index)// for [ ex. slice(3,5) ]


let name1 = ["Tarun", "Rohit", "Hardik", "Kumar", "Pradip"];
let name2 = ["Mandip", "Urdip", "Vandip", "Suryadip", "Pradip"];
let name3 = name1.concat(name2)

console.log(name3.slice(3));        //Remove value before 3rd index//

console.log(name3.slice(3, 5));        //Remove value before 3rd index & Remove value after 5th Index from array//



//--------------------------------------- New Exmple ( Spread opeator )----------------------------------------------------//

//Spread oprator basically use for join to aaray//

let no1 = ["Tarun", "Rohit", "Hardik", "Kumar", "Pradip"];
let no2 = ["Mandip", "Urdip", "Vandip", "Suryadip", "Pradip"];
let no3 = [...no1, ...no2]


console.log(no3);


//--------------------------------------- New Exmple ( Join )----------------------------------------------------//

//Join all the element to the string//

let student = ['T', 'A', 'R', 'U', 'N']

XYZ = student.join('')             //write which you want to remove from []

console.log(XYZ);                  // Result =  TARUN 


//--------------------------------------- New Exmple ( splice )----------------------------------------------------//


XYZ1 = student.splice('_')

console.log(XYZ1);


//--------------------------------------- New Exmple ( Filter )----------------------------------------------------//

// Filter Mathod is used for filter out value form Array//

let Cities = [

    { name: 'Mumbai', Population: 3929399 },
    { name: 'Delhi', Population: 8729399 },
    { name: 'Bangalore', Population: 2503800 },
    { name: 'Chennai', Population: 2329352 },
    { name: 'Ahmedabad', Population: 3203993 },

];

let Home = Cities.filter(Ram => {
    return Ram.Population > 2600000


})
console.log(Home);



//--------------------------------------- New Exmple ( Map Method )----------------------------------------------------//

//Map method//


let Region = [

    { name: 'Mumbai', Population: 1000 },
    { name: 'Delhi', Population: 2000 },
    { name: 'Bangalore', Population: 3000 },
    { name: 'Chennai', Population: 4000 },
    { name: 'Ahmedabad', Population: 5000 },

];

let New = Region.map(Hello => {
    return Hello.Population * 2 
})
console.log(New);


