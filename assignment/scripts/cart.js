console.log('***** Cart Functions *****');
let basket = [];
const maxItems = 5;

//1.
function addItem(item){
  if (basket.push(item));// added the .push to add items in
  return true;// return true if the item is added
}
console.log(addItem('apples'));// added apples into the basket
console.log(addItem('chocolate')); // testing
console.log(addItem('pears'));//testing
console.log(addItem('pencils'));//testing
console.log(basket);

//2.
function listItems(){
  for (let item of basket ){// created a for of loop to to see logg the list of items in the basket.
    console.log('item list', item);
  }
}
listItems();// called the function to see the list

//3.
function empty(){// created a empty function to empty the arrays
  basket = [];// used the a = [] which sets the array to an empty brackets.
}
empty();// called the function
console.log('basket is empty', basket);//checking to see if the array is empty, which it is.

//stretch goals

//4.
function isFull(){
   if (basket.length < maxItems){// created a if and else conditional
     return false;
   }
    else if(basket.length >= maxItems){
     return true;
   }
 }
 console.log(isFull());// console.log to see if the basket is full or not which it is not.

//5.
 function addItem(item){
   if(isFull() === true){// updated addItem with the isFull function to prevent exceeding maxItems.
     return false;
   }
   basket.push(item);// added the .push to add items in
   return true;// return true if the item is added
 }

console.log(addItem('turkey'));//testing isFull function
console.log(addItem('pizzas'));//testing isFull function
console.log(addItem('hamburger'));//testing isFull function
console.log(addItem('chicken'));//testing isFull function
console.log(addItem('spaghetti'));//testing isFull function
console.log(addItem('tomato'));//testing isFull function

//6.
function removeItem(item){
  if( removeItem = basket.splice(basket.indexOf('chicken'), 1)){//i used a if else statement to check if the item is splice.
  return removeItem;// if the item is splice then it will return what has been splice
  }
  return null;
}
console.log(removeItem());
console.log(basket);

//I have not been able to make this code work all the way. it splices what i want it to splice but when i try to put an item that doesn't exist it doesn't return null.
// when i use 0 it doesn't splice apples but when i use 1 then it does. How come?
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
