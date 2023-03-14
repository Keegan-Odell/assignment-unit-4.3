console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull() === false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

//add items to basket under here
console.log(`Adding food (expects true): ${addItem(' apples')}`);
console.log(`Adding food (expects true): ${addItem(' oranges')}`);
console.log(`Adding food (expects true): ${addItem(' peaches')}`);
console.log(`Adding food (expects true): ${addItem(' grapes')}`);
console.log(`Adding food (expects true): ${addItem(' mango')}`);
console.log(`Adding food (expects false): ${addItem(' pear')}`);

function listItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

listItems(basket);

function empty(array) {
  array_length = array.length;
  for (let i = 0; i < array_length; i++) {
    array.pop();
  }
  return true;
}

//console.log(`cart is empty (expect true): ${empty(basket)}`);

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

function removeItem(item) {
  let basketItem = basket.indexOf(item);
  if (basketItem === -1) {
    return null;
  } else {
    console.log(`removing item: ${basket[basketItem]}`);
    return basket.splice(basketItem, 1);
  }
}

removeItem('apples');
console.log(`your basket is now:${basket}`);
