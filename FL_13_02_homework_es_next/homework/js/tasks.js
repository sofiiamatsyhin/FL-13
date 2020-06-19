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
    .then(json => {
      sortArr(json);
      getName(json);
    })
}

function getName(data) {
  data.forEach(person => console.log(person.name));
}

function sortArr(data) {
  data.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}

async function fetchAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  sortArr(data);
  getName(data);
}