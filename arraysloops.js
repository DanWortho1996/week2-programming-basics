let coffeorder = [
    "Alex - Tea",
    "Ben - Hot Chocolate",
    "Charlie - Coffee"
];
console.log(coffeorder);

let songs = [
    "Phil Collins - In the Air",
    "Ed Sheeran - I See Fire",
    "2pac - Changes"
]
//.push adds item to bottom of list or order
songs.push(
    "Hanz Zimmer - POTC",
    "Eminem  - Without Me")
console.log(songs)

let drinks = [
    "Whisky",
    "Rum",
    "Tequilla"
];
console.log(drinks[0])
console.log(drinks[1])
console.log(drinks[2])

let mydrinks = [
    "Coke",
    "Pepsi",
    "Fanta",
    "Red Bull"
]
for(let i = 0; i < mydrinks.length; i++){
    console.log(mydrinks[i])
}

let multiplesTwo = [];
for(let r = 0; r < 20; r++){
    if(r % 2 == 0){
        multiplesTwo.push(r);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

//Continuos loop until True
let age = 15;{
    while(age < 18){
        console.log("You are a child")
        age++
    }
    console.log("You are an adult")
}

let cards = ["Diamond", "Spade", "Clubs", "Hearts"];
let currentCard = "Club";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard  = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

//Activity 1
let films = [
    "Pirates of The Caribbean",
    "Jurassic World",
    "Predator"
]
films.push(
    "Aliens VS Predator (AVP)",
    "Hot Fuzz"
)
console.log(films)

//Activity 2
let num1 = 0;
for(let num1 = 0; num1 < 52; num1++)
    while(num1 != 52){
        console.log(num1);
        num1  = Number[Math.floor(Math.random()*52)];
}
console.log(num1);