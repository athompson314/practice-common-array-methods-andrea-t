//Task 1: Create the Order System
//Create a multi-dimensional array called orders with two rows:
//The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
//The second row stores three pastry orders (e.g., “Croissant”, “Muﬃn”,“Bagel”).

let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"],
];

//Task 2: Log the number of drinks and number of pastries by using .length on each row.
console.log("Number of drinks: "+orders[0].length);
console.log("Number of pastries: "+orders[1].length);

//Task 3: Access Orders Using Bracket Notation
//Use bracket notation to log a specific drink and a specific pastry using
//hardcoded numbers. For example, you might want to log the first drink and last
//pastry. Do this for three combinations.
console.log("First drink and last pastry is "+orders[0][0]+" and "+orders[1][2]);
console.log("Second drink and second pastry is "+orders[0][1]+" and "+orders[1][1]);
console.log("Third drink and first pastry is "+orders[0][2]+" and "+orders[1][0]);

//Task 4: Access Orders Dynamically with Variables
let latte = orders[0][0];
let muffin = orders[1][1];

//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
//dynamically adjusts to the number of items using .length.

for(let i=0; i<orders[0].length;i++){
    console.log(orders[0][i]);
}

//Task 6: Add a New Order & Track Length
//Suppose a new order has been placed: a customer ordered a flat white. Add “flat
//white” to the drinks category dynamically. Log the updated number of drinks after
//the addition. Declare two variables and use them with bracket notation to log the selected order
//dynamically.

orders[0].push("Flat White");
for(let i=0; i<orders[0].length;i++){
    console.log(orders[0][i]);
}
console.log("Number of drinks: "+orders[0].length);
console.log("Number of pastries: "+orders[1].length);

let flatWhite = orders[0][3];
let croissant = orders[1][0];
console.log("The order is "+ flatWhite +" and " + croissant);