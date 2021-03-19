console.log('***** Cart Functions *****');
let basket = []

function addItem(item){
  basket.push(item);
  return true;
}
console.log(addItem('apples'));
console.log(addItem('chocolate'));
console.log(basket);

function listItems(){
  for (let item of basket ){
    console.log('list of items', item);
  }
}
listItems();

function empty(){
  basket = [];
}
empty();
console.log('basket is empty', basket);
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
