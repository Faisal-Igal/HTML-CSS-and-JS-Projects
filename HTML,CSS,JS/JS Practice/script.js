
// poker game using const and let variables
const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName}, and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has one
    ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
    ((playerOnePoints + playerThreePoints) == 0);  // two has won 

console.log("Game has ended: ", gameHasEnded);





// JavaScript practice using functions 
function displayGreeting() {
    console.log("Hello world");
}

displayGreeting();


function displayGreeting(Faisal) {
    const message = `Hello, ${name}!`;
    console.log(message);
}

function displayGreeting(name, slautation = 'Hello') {
    console.log = `${slautation}, ${name}`;
}

displayGreeting('Faisal');



// blackjack card game using Boolean logic and operators.
let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo;

let cardThree = 7;
sum += cardThree;
if (sum > 21) {
    console.log('You Lost');
    process.exit(1);
}
console.log(`You have ${sum} points`);

let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
    console.log('You win');
}
else {
    console.log('Bank wins')
}


// JS practice using if else statements to define if function is true or false
let currentMoney = 2000;
let laptopPrice = 3000;

if (currentMoney >= laptopPrice) {
    console.log('Getting a new laptop!');
}

else {
    console.log('Still cant afford one');
}


let currentMoney = 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20);

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
    console.log('Getting a new laptop!');
}
else {
    console.log('Still cant afford one');
}


// Loops and arrays

let iceCreamFlavor = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavor.length; i++) {
    console.log(iceCreamFlavor[i]);
}

// for each loop 
let numbers = [10, 20, 30, 40];
numbers.forEach(number => console.log(number));

// Find an item by using find()
let iceCreamFlavor = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavor.find(falver => flavor === 'Chocolate')


// Filter items with a common property by using filter()
let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" },
    { name: "Strawberry", type: "fruit" },
    { name: "Vanilla", type: "Vanilla" },
    { name: "Pistachio", type: "Nuts" },
    { name: "Neapolitan", type: "Chocolate" },
    { name: "Mint Chip", type: "Chocolate" }
];

iceCreamFlavors.filter(flavor => flavor.type === "Chocolate")


// Check a condition by using some()
iceCreamFlavors.some(flavor => flavor.type === "Nuts")

iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.

// Projections map
let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" },
    { name: "Strawberry", type: "fruit" },
    { name: "Vanilla", type: "Vanilla" },
    { name: "Pistachio", type: "Nuts" },
    { name: "Neapolitan", type: "Chocolate" },
    { name: "Mint Chip", type: "Chocolate" }
];
iceCreamFlavors.map(flavor => {
    flavor.price = 1;
    return flavor;
}) // every item now has a new property price: 1




// Aggregations
let sales = [{
    date: '2021-05-01',
    amount: 2
},
{
    date: '2021-05-01',
    amount: 1
}
    // and so on...
]

// for loop to sum it all up
let sum = 0;
for (let i = 0; i < sales.length; i++) {
    sum += sales[i].amount;
}

// or use reduce method a more elegant approach but takes some time getting used to
sales.reduce((acc, curr) => acc + curr.amount, 0);


// app.js ice cream business 

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip", "Raspberry"];

let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 },
    { name: "Strawberry", type: "Fruit", price: 1 },
    { name: "Vanilla", type: "Vanilla", price2 },
    { name: "Pistachio", type: "Nuts", price: 1.5 },
    { name: "Neapolitan", type: "Chocolate", price: 2 },
    { name: "Mint Chip", type: "Chocolate", price: 1.5 },
    { name: "Raspberry", type: "Fruit", price: 1 },
];


let transactions = []

transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
transactions.push({ scoops: ["Raspberry", "Strawberry"], total: 2 })
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })

const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`);

let flavorDistribution = transactions.reduce((acc, curr) => {
    curr.scoops.forEach(scoop => {
        if (!acc[scoop]) {
            acc[scoop] = 0;
        }
        acc[scoop]++;
    })
    return acc;
}, {}) // { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }