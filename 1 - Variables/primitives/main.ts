// How to declare a variable in typescript.

var varVar =
  "Has function or global scope and can be reassigned and redeclared";
let letVar = "Have block scope and cannot be redeclared. Can be reassigned";
const constVar =
  "Have block scope and cannot be redeclared. Can't be reassigned (for primitive values)";

// Primitive types

// The String object is used to represent and manipulate a sequence of characters.
const stringType: string = "This is a string";

// Number values represent floating-point numbers like 37 or -9.25.
const numType: number = 15; // is treated as falsy for boolean operations (if it is 0 it is false for example)

// The global undefined property represents the primitive value undefined.
const undefinedType: undefined = undefined;

// The null value represents the intentional absence of any object value.
const nullType: null = null; // is treated as falsy for boolean operations

// The Boolean object represents a truth value: true or false.
const booleanType: boolean = true;

// Symbol is a built-in object whose constructor returns a symbol primitive that's guaranteed to be unique.
const symbolType: symbol = Symbol("foo"); // Symbol("foo") === Symbol("foo"); // false

// BigInt values represent numeric values which are too large to be represented by the number primitive.
const bigintType: bigint = BigInt("0x1fffffffffffff"); // 9007199254740991n

console.log("Hello world!");
console.log(
  `${stringType}, ${numType}, ${undefinedType}, ${nullType}, ${booleanType}, ${bigintType}`
);
