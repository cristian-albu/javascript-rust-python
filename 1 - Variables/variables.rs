// Docs variables: https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
// Docs data types: https://doc.rust-lang.org/book/ch03-02-data-types.html

// Rust is a statically typed language, meaning that the type of a variable is determined at compile time.
// By default data is immutable
// Rust has several primitive data types, which include:

fn main() {
    // Integer: Integers are whole numbers, either positive or negative, without decimals.
    // Rust has signed and unsigned integers of different sizes, ranging from 8 bits to 128 bits.
    let int_type1: i8 = -128;
    let int_type2: u16 = 65535;
    let int_type3: i32 = 2147483647;

    // Float: Floats are numbers with a decimal point. Rust has two float types, f32 and f64, with f64 being the default.
    let float_type1: f32 = 3.14;
    let float_type2: f64 = -2.5;

    // Boolean: Booleans are true or false values. Rust has a bool type that can only hold either true or false.
    let is_true: bool = true;

    // Character: Characters are single Unicode scalar values and are enclosed in single quotes.
    // Rust has a char type that represents a single character.
    let char_type: char = 'a';

    // Unit: Unit type () is a type that has only one possible value, also written as ().
    // It is commonly used to indicate that a function or expression returns nothing.
    fn do_nothing() -> () {
        // Do nothing
    }

    // The Option Enum: The Option enum represents the concept of a value being optional or absent.
    // It has two variants, Some and None. The Some variant contains a value of a certain type, while the None variant represents the absence of a value.
    let option_type1: Option<i32> = Some(42);
    let option_type2: Option<i32> = None;

    println!("Hello world");
    println!("{int_type1}, {float_type1}, {is_true}, {char_type}");
}