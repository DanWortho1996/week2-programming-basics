// let age_child = 15;
// let age_adult = 20;
// let senior  = 61;
// if(age_child < 18){
//     console.log(`Child price is £8`)
// }
// else if(age_adult > 18 && < 60){
//     console.log(`Adult price is £10.95` )
// }
// else{
//     console.log(`Senior price is £10`)}


//Const declares variable and can NEVER be changed as it is a CONSTANT
// const pressGrindBeans = () => {
//     console.log("Grinding Beans for 20 seconds");
// }
//This will run the code inside the curly brackets as shown above be sure to finish all code with semi colin to make it officially run, this will print what is on console.log
//pressGrindBeans();
//This is now a function and should be able to run programme 
// {} Curly brackets is where you write most of your code to create functions or order or button press even button press for games

let coffeeIsGrinding = false;
const pressGrindBeans =  ()   =>  {
    if(coffeeIsGrinding){
        console.log("Grinding for 20 seconds")
        coffeeIsGrinding = false
    }else{
        coffeeIsGrinding = true
    }
    console.log("Grinds for 20 Seconds")
}
pressGrindBeans();

// const cashWithdrawal = (amount, accnum) =>  {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);


const favcolor = (color) => {
    console.log(`My favourite color is ${color}`)
}

favcolor("Blue");
favcolor("Red");
favcolor("Purple");

const checkTicketPrice = (ages) => {
    if (ages < 18){
        console.log("Young")
    }else{
        console.log("Older")
    }

}
checkTicketPrice();
checkTicketPrice(18);
checkTicketPrice(43);
checkTicketPrice(21);
checkTicketPrice(15);

//This section is for Function Returns from line 66 onwards
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp (2,3);
console.log(addUp(4, 5))

if(addUp(3, 4) > 10){
    console.log("Bigger than 10")
}else{
    console.log("It Is Not")
}

//Functions have been declared using syntax i.e, => it makes work less of a mess and less use of words

//Activity 1
const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    }else{
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

//Activity 2
let orderCounter  = 0;
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} & ${topping2}`);
        orderCounter++}

takeOrder("Beef", "Pineapple");
takeOrder("Pineapple", "Chicken");

//Activity 3
const moneyWithdrawal = (amount = 5000, accnum = 1234) => {
    if(accnum === 1234 && amount  <= 5000){
        console.log(`Withdrawing ${amount} from this account ${accnum}.`);
    }else{
        console.log(`Incorrect ${amount}, Please Try Again...`)
    }
}
moneyWithdrawal(200, 5000);
moneyWithdrawal(200, 1234);
moneyWithdrawal(200, 5000);
moneyWithdrawal(7900, 1234);