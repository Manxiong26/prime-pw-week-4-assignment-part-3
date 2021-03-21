console.log('***** Cart Functions *****');
let basket = [];
const maxItems = 5;

function addItem(item){
  if(isFull() === true){// updated addItem with the isFull function to prevent exceeding maxItems.
    return false;
  }
  basket.push(item);// added the .push to add items in
  return true;// return true if the item is added
}
console.log(addItem('apples'));// added apples into the basket
console.log(addItem('chocolate')); // also added chocolate just to make sure the .push is actually adding items in the basket.
console.log(addItem('pears'));
console.log(addItem('pencils'));
console.log(addItem('turkey'));//testing isFull function
console.log(addItem('pizzas'));//testing isFull function
//console.log(addItem('noodles'));//testing isFull function
console.log(basket);

function listItems(){
  for (let item of basket ){// created a for of loop to to see logg the list of items in the basket.
    console.log('item list', item);
  }
}
listItems();// called the function to see the list

function empty(){// created a empty function to empty the arrays
  basket = [];// used the a = [] which sets the array to an empty brackets.
}
//empty();// called the function
//console.log('basket is empty', basket);//checking to see if the array is empty, which it is.

//stretch goals


function isFull(){
   if (basket.length < maxItems){// created a if and else conditional
     return false;
   }
    else if(basket.length >= maxItems){
     return true;
   }
 }
 console.log(isFull());// console.log to see if the basket is full or not which it is not.

function removeItem(items){

}
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
