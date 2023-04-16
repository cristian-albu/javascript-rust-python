fn main() {


    //? -------------------STRINGS------------------------

    let some_string:&str = "Fixed length string"; 
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
    // Basic functions on Strings,
    // is_empty(): false,
    // length(): 38,
    // Bytes(): 42,
    // contains use: true

    growable_string.push_str("    ");
    let str_len:usize = growable_string.trim().len();
    println!("Previous len: {}, after trim {}",growable_string.len(), str_len); // Previous len: 42, after trim 38

    let number: i32 = 6;
    let num_str:String = number.to_string();
    println!("Is the number a string: {}", num_str == "6"); // Is the number a string: true

    let some_char:char = 'a';
    let char_str:String = some_char.to_string();

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