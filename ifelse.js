//if (condition1) {
    //do this
//} //else if (condition2){
    //do this
//}
//else{
    //if nothing met this will show
//}

let weather = "sunny";

if (weather == "sunny"){
    console.log("Well, I better wear some E45 init")
}else if (weather == "rainy"){
    console.log("Go Get the umbrella lad")
} else{
    console.log("Hmmm. Should of got Factor 50 instead.")
};

let dice = Math.floor(Math.random()*9);
//Mini game with random number generator shown above
if (dice > 6){
    console.log(`You Win! you rolled ${dice}`)
}else{
        console.log("You Loose")
    }

let place = "London"
let weathers = "Cloudy"

if (place == "London" &&  weathers == "Cloudy"){
    console.log("Check Again")
}else if (place == "London" && weathers == "Cloudy"){
    console.log("Obviously")
}else {
    console.log("What? It isn't cloudy for once?")
}

