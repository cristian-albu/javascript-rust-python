pub fn arrays(){
    //? -------------------ARRAYS-----------------------

    // Arrays are of a single type. Their shape and size must be known at compile time.

    let mut number_array:[i32;5] = [1, 2, 3, 4, 5];

    println!("{}", number_array[0]); // 1
    println!("{:?}", {number_array}); //[1, 2, 3, 4, 5]


    number_array[4] = 10;
    println!("{:?}", {number_array}); //[1, 2, 3, 4, 10]

    let array_with_same_elements: [i32; 10] = [0; 10];
    println!("{:?}", {array_with_same_elements}); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    let mut string_array_1:[&str; 3] = ["apple", "tomato", "grapes"];
    println!("{:?}", {string_array_1}); // ["apple", "tomato", "grapes"]

    let string_array_2: [&str; 6] = ["Unknow"; 6];
    string_array_1[0] = "Kam aza";

    let char_array:[char;5] = ['a', 'b', 'c', 'd', 'e'];

    println!("{:?}{:?}", string_array_2, char_array); //["Unknow", "Unknow", "Unknow", "Unknow", "Unknow", "Unknow"]['a', 'b', 'c', 'd', 'e']

    // Array slices do not make a copy of the array, instead they make a reference to the elements in the array
    let number_array_1:[i32;5] = [4, 5, 6, 7, 8];
    let subset_array: &[i32] = &number_array_1[0..3];

    println!("The subset of values of the array are {:?}, and the length is {}", subset_array, subset_array.len()); //The subset of values of the array are [4, 5, 6], and the length is 3

    println!("The array is occupying {} bytes", std::mem::size_of_val(&number_array_1)); // The array is occupying 20 bytes (5 x i32 that stored 4 bytes)

    let check_index: Option<&i32> = number_array_1.get(100);

    println!("{:?}", check_index); // None
}