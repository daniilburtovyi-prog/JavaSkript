const studentName = "John Doe";
const studentAge = 20;
const isEnrolled = true;

function greet(name){ return `Hello, ${name}!`; }
function add(a,b){ return a+b; }
function isEven(n){ return n%2===0; }

const colors = ["red","green","blue"];
function getFirstElement(arr){ return arr[0]; }

const car = { brand:"Toyota", model:"Camry", year:2020 };
function getFullName(p){ return `${p.firstName} ${p.lastName}`; }

module.exports = { studentName, studentAge, isEnrolled, greet, add, isEven, colors, getFirstElement, car, getFullName };
