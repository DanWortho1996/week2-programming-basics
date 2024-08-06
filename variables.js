//console.log("All around the world".charAt(7))

//Note! charAT starts from 0 when counting characters. This will show the letter U.

//let i = 10;

//i = i + 5;

//i equals 5, this is defining a string, number or booleon etc

//const i = 10;

//var i = 10;

//console.log(i)

//let my_drinks = "Tea";
//console.log("My morning starter is "+my_drinks);

//let name = "Danny";
//let age = 27;
//let drinks = "Cuppa";
//console.log("My name is "+name+ " My age is " +age+ " and my favourite morning drink is " +drinks)

//console.log(`My name is ${name}. My age is ${age} and my one and only drink is ${drinks}`)

//let name = "Jess"
//age = 102;
//my_drinks = "Whisky"

//console.log(`My name is ${name}. My age is ${age} and my one and only drink is ${drinks}`)

// Activity 1

let name = "Jess"
age = 38;
my_drinks = "Whisky"
my_color  = "Purple"

console.log(`My name is ${name} My age is ${age} and my favourite morning drink is ${my_drinks} My favourite colour is ${my_color}`)

//Activity 2

let breakfast = "Weetabix"
let lunch = "Maccies"
let dinner = "Roasties"

console.log(`Mandem had ${breakfast} then I went to the Mystery Mobile and had some ${lunch} with Scooby & Shaggy, after this we went too get dinner and ate some ${dinner} in Toby's Carvary`)

breakfast = "coissant"
lunch = "KFC"
dinner = "Salt n Pepper Chicken"

console.log(`Tomorrow, I plan to eat ${breakfast} for breakfast. For lunch I will be going to have ${lunch}. Later on in the day i will be having ${dinner} and that will be my Three meals of the day.`)

//Activity 3
// function calculate_age(dob){
//     var diff_ms = Date.now() - dob.gettime()
//     var age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1996);

// }
//Countdown to Birthday
//let dateToday = new Date();

//let myBirthDate = new Date('1996, 30, 08');
 
const today = new Date();
const myBirthDate = new Date ("1996, 08, 30")
const oneDay = 24 * 60 *  60 * 1000;
const daysAlive = Math.floor((today - myBirthDate) / oneDay);
console.log(`Unfortunately you have been alive for... ${daysAlive}`);

//Activity 4
let space1 = "X"
let space2 = "O"

console.log(`  |   |  `)
console.log(` ${space1}|   |  `)
console.log(`---------`)
console.log(`  | ${space2} |  `)
console.log(`  |   |  `)
console.log(`---------`)
console.log(`  |   |${space1}  `)
console.log(` ${space2}|   |  `)
