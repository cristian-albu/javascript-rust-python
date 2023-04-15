//  More complex objects in javascript and typescript are objects.
//! Objects in are stored in the heap while primitives are stored in the stack. You can't copy an object with "a = {object}, b = a". You can only make a reference to it my using that method.

// Objects can be:
//? ----------------ARRAYS-------------------
const arrayType: Array<any> = ["First", "Second", "Third"];

// An array can contain any kind of value
const arrayWithMultipleTypes: Array<any> = [2, null, ["Another array", 10]];

// But with typescript you can enforce a certain type
const arrayOfStrings: Array<string> = ["string", "string", "string"];
const anotherArrayOfString: string[] = ["or like this", "another one"];
const arrayOfNumbers: number[] = [1, 2, 3, 4];

// Arrays in javascript don't have a defined length. Each array has an index for each element, starting from 0
const arrayIndexes = ["first", "second", "third"]; // Index 0 is "first", index 1 is "second"...

// You can check an arrays length like this
arrayIndexes.length; // > 3

// You can access elements like this
arrayIndexes[0]; // > "first"

// Common operations on arrays are
const testArray: number[] = [0, 1, 2, 3, 4, 5];
testArray.push(6); // testArray > [0, 1, 2, 3, 4, 5, 6]
testArray.pop(); // testArray > [0, 1, 2, 3, 4, 5]
testArray.shift(); // testArray > [1, 2, 3, 4, 5]
testArray.unshift(0); // testArray > [0, 1, 2, 3, 4, 5]

//? ----------------OBJECTS-------------------
// Objects are key value stores that work like a dictionary
const obj = {
  name: "Cristian",
  age: 54,
  male: true,
};
// The proprieties inside of an object can be accessed like this:
obj.name; // > "Cristian"
obj["age"]; // > 54

// An object can nest other objects:

const obj2 = {
  anotherObj: {
    name: "some name",
    age: 25,
  },
  anotherObj2: {
    name: "Some other name",
  },
};
// You can access values like this:

obj2.anotherObj.age; // > 25
obj2["anotherObj2"]["name"]; // > "Some other name"

// In typescript you can define an interface or a type of objects

interface ObjectInterface {
  name: string;
  age: number;
  male: boolean;
  car: "Ford" | "Mercedes"; // "|" any of the options
  house?: boolean; // "?" makes it optional
}

const newObj: ObjectInterface = {
  name: "Cristi",
  age: 28,
  male: true,
  car: "Ford",
};

//? ----------------DATES--------------------

//You can create new dates like this: new Date(year,month,day,hours,minutes,seconds,ms)
const date = new Date(); // > Sat Apr 15 2023 18:45:15 GMT+0300 (Eastern European Summer Time)
const newDate = new Date(2015, 5, 30); // > Tue Jun 30 2015 00:00:00 GMT+0300 (Eastern European Summer Time)

// You can extract certain values like this

date.getTime(); // > 1681573731520 JavaScript stores dates as number of milliseconds since January 01, 1970.
date.getDay(); // > 6 (From 0 to 6, Sunday to Saturday)
date.getMonth(); // > 5 (From 0 to 11, January to December)
date.toDateString(); // > A more readable format -- Sat Apr 15 2023

// There are many more predefined functions like toUTCString(), toISOString(), getYear()

// https://www.youtube.com/watch?v=hLgUTM3FOII  https://www.youtube.com/watch?v=Z_2rpuPQmC0 more about maps and sets
//? ---------------- MAPS ---------------------
// A Map object is a collection of key-value pairs where the keys and values can be of any type. Here is an example of creating a Map object and adding some key-value pairs to it:
const myMap = new Map();

const anotherMap: Map<any, any> = new Map([
  ["key", "value"],
  ["1", "Key"],
]);

myMap.set("apple", 5);
myMap.set("banana", 10);
myMap.set("orange", 15);

console.log(myMap.get("banana")); // Output: 10

// There are also weak maps: Unlike the Map object, the WeakMap does not prevent the garbage collector from collecting its keys, which means that a key-value pair in a WeakMap can be removed when the key is no longer referenced anywhere else in the program.
const weakMap = new WeakMap();

//? ---------------- SETS ---------------------
// A Set object is a collection of unique values of any type. The values can be of any data type and can be added, removed, or checked for existence in the set. Here's an example:
// create a new set object
const mySet = new Set();

// add values to the set
mySet.add("apple");
mySet.add("banana");
mySet.add("apple"); // this will not add a new value, since it's already in the set

// get the number of values in the set
console.log(mySet.size); // Output: 2

// check if the set has a value
console.log(mySet.has("banana")); // Output: true

// delete a value from the set
mySet.delete("apple");

// There are also WeakSets: WeakSet is designed to allow objects to be garbage collected when they are no longer used in the program. When an object that is stored in a WeakSet is no longer referenced anywhere else in the program, the WeakSet automatically removes the object from the set.

let weakSet = new WeakSet();
