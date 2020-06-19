function maxElement(array) {
  return Math.max(...array);
}


function copyArray(array) {
  return [...array];
}


function addUniqueId(obj) {
  let newObj = {...obj};
  newObj.id = Symbol();
  return newObj;
}


function regroupObject(obj) {
  let {name, details: {id, age, university}} = obj;
  let firstName = name;
  let newObj = {university, user: {age, firstName, id}};
  return newObj;
}


function findUniqueElements(array) {
  return Array.from(new Set(array));
}


function hideNumber(num) {
  let sliceNumber = num.slice(-4);
  return sliceNumber.padStart(num.length, '*')
}


function required() {
  throw new Error('Missing property');
}
function add(num1 = required(), num2 = required()) {
  return num1 + num2;
}


function fetchName() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(name => {
      getName(name);
      sortArr(name);
    })
}
function getName(data) {
  return data.forEach(person => console.log(person));
}
function sortArr(data) {
  return data.sort();
}