//Activity 1
// let person = {
//     name: "Danny",
//     age: 27,
//     drinks:
//     "Cappucino",
//     sayHi(){
//         //console.log(this.name)
//         return `Hi I am ${this.name} and I am ${this.age}`
//     }
// }

//person.sayHi()
//This will run it as a function

// console.log(person.sayHi())
//Prints out in the terminal

//person.age = 200
//Updates the age from line 3 to line 10

//person.gender = "Male"
//Cannot find gender in person objects so it will auto add it

// person.favsongs = ["In The Air, We Will Rock You"]

//console.log(person.favsongs[0])
//This will print the first song in your list

//Activity 2
let pet = {
    name: "Lukas",
    typeOfPet: "German Shepard",
    age: 2,
    color: "Baige & White",
    sayWoof(){
        return `${this.name} is slurping on ${this.drink} and will eat his ${this.eat} later on in the day. The Breed of this dog is ${this.typeOfPet}.`
    }
}
pet.drink = "Water"
pet.eat = "Wet Food"
console.log(pet.sayWoof());

//Activity 3
let coffeeShop = {
    branch: "Starbucks",
    drinking: "Iced Tea, Coffee, Tea, Hot Chocolate",
    food: "Bacon Sandwich, Cheese Toastie, Weetabix, Fruits",
    sayWelcome(){
        console.log(`Hi, welcome to ${this.branch}. What would you like, we serve ${this.drinking} Our food menu is ${this.food}.`)
        console.log(`Your Order is ${this.foodOrdered} for your drinks it's ${this.drinkingOrdered}`)
    }
}
coffeeShop.drinking = ["Ice Tea ", 3.50, " Coffee ", 5.00," Tea ", 7.50, " Hot Chocolate ", 10.00]
coffeeShop.food = ["Bacon Sandwich ",  4.00,  " Cheese Toastie ", 5.00, " Weetabix ", 2.50, " Fruits ", 10.00]
coffeeShop.foodOrdered = ("Weetabix")
coffeeShop.drinkingOrdered = ("Coffee")
coffeeShop.sayWelcome();

//Algorithm/Activity
let name, pw = "Username, Password";
if(username  = name && pw = password){
console.log("Correct")
}else{
    console.log("Nahh, Wrong Mate")
}