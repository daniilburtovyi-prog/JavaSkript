const { studentName, studentAge, isEnrolled, greet, add, isEven, colors, getFirstElement, car, getFullName } = require("./script.js");
const assert = require("assert");

assert.strictEqual(studentName,"John Doe");
assert.strictEqual(studentAge,20);
assert.strictEqual(isEnrolled,true);

assert.strictEqual(greet("Alice"),"Hello, Alice!");
assert.strictEqual(add(5,7),12);
assert.strictEqual(isEven(4),true);
assert.strictEqual(isEven(3),false);

assert.deepStrictEqual(colors,["red","green","blue"]);
assert.strictEqual(getFirstElement(["a","b","c"]),"a");

assert.deepStrictEqual(car,{ brand:"Toyota", model:"Camry", year:2020 });
assert.strictEqual(getFullName({firstName:"John",lastName:"Doe"}),"John Doe");
