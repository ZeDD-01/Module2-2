//If-else statement
let x = 20;

if (x > 10){
    console.log(`{x} is greater than 10`);
} else {
    console.log(`{x} is less than 10`)
}

let day = "Saturday";

if(day == "Saturday" || day == "Sunday"){
    console.log("Hooray for the weekend!");
} else {
    console.log("A few more days until the weekend");
}

let budget = 20;

if(budget > 50){
    console.log("Ride a taxi");
} else if (budget > 30 && budget <= 50){
    console.log("Ride a bus");
} else if (budget > 10 && budget <= 30){
    console.log("Ride a train");
} else {
    console.log("Ride a bike");
}

//Switch-case statements
const environment = "production";

switch (environment) {
  // when environment is specified as production
    case "production":
        console.log("I am production environment");
        break;

    // when environment is specified as staging
    case "staging":
        console.log("I am staging environment");
        break;

    // when environment is not specified or specified as environment
    default:
    case "development":
        console.log("I am development environment");
}

//While loop
let whileCount = 0;

while(whileCount < 10){
  console.log(whileCount);
  whileCount++;
}

//Do-while loop
let doWhileCount = 0;
//Try changing the value of doWhileCount to be greater than 10.
do {
    console.log(doWhileCount);
    doWhileCount++;
}while(doWhileCount < 10);

//For loop
for(let i = 5; i < 20; i++){
    console.log(`The current value is ${i}`);
}