pub fn vectors(){
    //? -------------------VECTORS-----------------------

    // A vector is very simmilar to an array but the main difference is that it's length can be modified.
    // All elements need to be of the same type

    let mut number_vec:Vec<i32> = vec![4, 5, 6, 1, 2, 5, 12];

    println!("{}", number_vec[0]); //4
    println!("{:?}", number_vec); //  [4, 5, 6, 1, 2, 5, 12]

    number_vec[4] = 5;
    println!("{:?}", number_vec); // [4, 5, 6, 1, 5, 5, 12]

    let array_with_same_elements : Vec<i32> = vec![0;10];
    println!("{:?}", array_with_same_elements); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    let mut string_vector_1 :Vec<&str> = vec!["apple", "tomato", "grapes", "bananas"];


    // Creating a slice
    let vector_slice: &&[&str] = &&string_vector_1[0..2];
    println!("{:?}", vector_slice); //["apple", "tomato"]

    let check_index: Option<&&str> = string_vector_1.get(35);

    println!("{}{:?}", string_vector_1.len(), check_index); // 4None


    // Adding at the end of the vector
    string_vector_1.push("oranges");
    println!("{:?}", string_vector_1); //["apple", "tomato", "grapes", "bananas", "oranges"]
    

    // Remove an element
    string_vector_1.remove(3);
    println!("{:?}", string_vector_1);  //["apple", "tomato", "grapes", "oranges"]

    // Check if vector contains value


    println!("{} {}", string_vector_1.contains(&"apple"), string_vector_1.contains(&"bananas")) // true false

    



}