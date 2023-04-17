// Docs variables: https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
// Docs data types: https://doc.rust-lang.org/book/ch03-02-data-types.html

// Rust is a systems programming language designed for performance and safety.
// It has a strong focus on memory safety, with features like ownership and borrowing to prevent common programming errors like null pointer dereferences and data races.
// Rust is often used for building low-level systems software, like operating systems, web browsers, and game engines.



fn main() {

    // By default data is immutable
    // You can declare that a variable is mutable like this:
    let mut mutable_data: bool = true;
    println!("{}", mutable_data);
    mutable_data = false ;


    // You also have constants. These are not allowed to use the "mut". The data type must be annotated
    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

    println!("{}", THREE_HOURS_IN_SECONDS);

    // If you declare the same variable twice it is called shadowing. The compiler will see the second one "over-shadow" the first one.
    // It is useful if you want to perfom some transformations without making the variable mutable.


    // _Underscore before the variable is to show rust-analyzer that we declare this variable and never use it later on purpose.

    let _x = 5;
    let _x: i32 = _x + 1;

    // Rust has several primitive data types, which include:
    // Integer: Integers are whole numbers, either positive or negative, without decimals.
    // Rust has signed and unsigned integers of different sizes, ranging from 8 bits to 128 bits.
    let int_type1: i8 = -128;
    let _int_type2: u16 = 65535;
    let _int_type3: i32 = 2147483647;

    // The prefix "i" means it is signed, followed by the bit number ("i8, i64"). The prefix "u" means unsigned. Signed means it could be a negative number or a positive one.
    // i8 can store -(2^7) to 2^7 - 1  |  -128 to 127. u8 can store 0 to 2^8 - 1 | 0 - 255

    // Float: Floats are numbers with a decimal point. Rust has two float types, f32 and f64, with f64 being the default.
    let float_type1: f32 = 3.14;
    let _float_type2: f64 = -2.5;

    // Boolean: Booleans are true or false values. Rust has a bool type that can only hold either true or false.
    let is_true: bool = true;

    // Character: Characters are single Unicode scalar values and are enclosed in single quotes.
    // Rust has a char type that represents a single character.
    let char_type: char = 'a';

    // Unit: Unit type () is a type that has only one possible value, also written as ().
    // It is commonly used to indicate that a function or expression returns nothing.
    fn _do_nothing() -> () {
        // Do nothing
    }

    // The Option Enum: The Option enum represents the concept of a value being optional or absent.
    // It has two variants, Some and None. The Some variant contains a value of a certain type, while the None variant represents the absence of a value.
    let _option_type1: Option<i32> = Some(42);
    let _option_type2: Option<i32> = None;

    print!("Hello world ");
    println!("{mutable_data}, {int_type1}, {float_type1}, {is_true}, {char_type}");

    //? -------------------STRINGS------------------------

    let _some_string:&str = "Fixed length string"; 
    let mut growable_string:String = String::from("This string will grow");
    println!("This string is \"{}\"", growable_string); // This string is "This string will grow"


    growable_string.push('s');
    println!("This string is \"{}\"", growable_string); // This string is "This string will grows"

    growable_string.pop();
    println!("This string is \"{}\"", growable_string); // This string is "This string will grow"

    growable_string.push_str(" which i will use");
    println!("This string is \"{}\"", growable_string); // This string is "This string will grow which i will use"

    println!(
        "Basic functions on Strings,
         is_empty(): {},
         length(): {},
         Bytes(): {},
         Contains use: {}",
         growable_string.is_empty(),
         growable_string.len(),
         growable_string.capacity(),
         growable_string.contains("use")
    );
    /*
    Basic functions on Strings,
    is_empty(): false,
    length(): 38,
    Bytes(): 42,
    contains use: true
    */

    growable_string.push_str("    ");
    let str_len:usize = growable_string.trim().len();
    println!("Previous len: {}, after trim {}",growable_string.len(), str_len); // Previous len: 42, after trim 38

    let number: i32 = 6;
    let num_str:String = number.to_string();
    println!("Is the number a string: {}", num_str == "6"); // Is the number a string: true

    let some_char:char = 'a';
    let _char_str:String = some_char.to_string();

    let my_name:String = "Nouman".to_string(); // Nouman
    println!("{}", my_name);

    let empty_string:String = String::new();
    println!("Length is: {}", empty_string.len() ); // Length is: 0

    let s_1:String = "Nouman".to_string();
    let s_2:String = "Azam".to_string();
    let s_3:String = format!("My first name is {} and my last name is {}", s_1, s_2);
    println!("{}", s_3);  // My first name is Nouman and my last name is Azam

    let concat:String = format!("{}{}", s_1, s_2);
    println!("{}", concat); // NoumanAzam



    //? -------------------TUPLES-----------------------
}