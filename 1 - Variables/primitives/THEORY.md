# Rust

📌**Immutable variable declaration**: The let keyword is followed by the variable name, an equal sign, and the initial value of the variable. By default, variables are immutable in Rust, which means their value cannot be changed once they are initialized.

```rust
// Immutable variable declaration
let x = 42;
```

📌 **Mutable variable declaration**: If you want to change the value of a variable after it has been initialized, you can use the mut keyword to make it mutable. Mutable variables are declared using let mut.

```rust
// Mutable variable declaration
let mut y = 3.14;
```

📌 **Type annotations**: Rust has a strong type system, which means that every variable must have a type. You can add a type annotation to a variable declaration by putting a colon followed by the type after the variable name.

```rust
// Type annotations can be added to specify the variable's type
let z: bool = true;
```

📌 **Constant declaration**: Constants are values that cannot be changed throughout the entire program. They are declared using the const keyword and must be initialized with a value at the time of declaration. Constants are useful for defining values that are used frequently in your code, such as mathematical constants or configuration values.

```rust
// Constant declaration
const MAX_POINTS: u32 = 100_000;
```

## Scalar data types

### ✅ bool

A boolean value represents either true or false. In Rust, the `bool` type is a primitive data type that can only have two possible values: `true` or `false`. For example:

```rust
let is_rust_awesome: bool = true;
```

### ✅ Integers

Integers are whole numbers that can be either positive or negative. In Rust, there are several types of integers, which differ in size and whether they are signed or unsigned. The following table summarizes the available integer types:

| Type    | Size                   | Range                                                   |
| ------- | ---------------------- | ------------------------------------------------------- |
| `i8`    | 8 bits                 | -128 to 127                                             |
| `i16`   | 16 bits                | -32,768 to 32,767                                       |
| `i32`   | 32 bits                | -2,147,483,648 to 2,147,483,647                         |
| `i64`   | 64 bits                | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `i128`  | 128 bits               | -(2^127) to (2^127)-1                                   |
| `isize` | architecture dependent | -2^(n-1) to 2^(n-1)-1                                   |
| `u8`    | 8 bits                 | 0 to 255                                                |
| `u16`   | 16 bits                | 0 to 65,535                                             |
| `u32`   | 32 bits                | 0 to 4,294,967,295                                      |
| `u64`   | 64 bits                | 0 to 18,446,744,073,709,551,615                         |
| `u128`  | 128 bits               | 0 to (2^128)-1                                          |
| `usize` | architecture dependent | 0 to 2^n-1                                              |

For example:

```rust
let x: i32 = -42;
let y: u64 = 123456789;
```

### ✅ Floats

Floating-point numbers are real numbers that can represent fractional values. In Rust, there are two primitive floating-point types: `f32` and `f64`, which represent 32-bit and 64-bit floating-point numbers, respectively. The `f32` type has a single-precision format, while `f64` has a double-precision format. For example:

```rust
let x: f32 = 3.14;
let y: f64 = 2.718281828459045;

let largest_f32 = std::f32::MAX; > 3.4028235E+38;
let largest_f64 = std::f64::MAX; > 1.7976931348623157E+308;
```

### ✅ char

A `char` type represents a Unicode Scalar Value, which means it can represent any Unicode character, including ASCII characters, emojis, and other international characters. In Rust, a `char` is denoted by a single quote `'`, and can hold a single character. For example:

```rust
let heart_emoji: char = '❤';
let letter_a: char = 'a';
```

### ✅ Option

The `Option` type is used to represent a value that may or may not be present. It's commonly used to handle cases where a value might be missing, or to indicate an error condition. An `Option` can either be `Some(value)` or `None`. For example:

```rust
let x: Option<i32> = Some(42); // x has a value of 42
let y: Option<i32> = None; // y has no value
```
