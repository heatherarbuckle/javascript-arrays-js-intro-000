var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  // var newArray = [element, ...array];
  const newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  return array = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromEndOfArray(array) {
  return array = array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}
