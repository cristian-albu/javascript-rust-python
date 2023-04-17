pub fn functions() {
    //? -------------------FUNCTIONS---------------------
    basic_fn(); //This is a basic function
    function_with_inputs("Cristian", 40_000); // Cristian 40000

    let full_name: &str = "Cristian Albu";
    let salary_info: i32 = 50;
    function_with_inputs(full_name, salary_info); // Cristian Albu 50

    let answer: i32 = function_with_inputs_and_outputs(32, 50);

    println!("{}", answer); // 1600

    let answer2: (i32, i32, i32) = function_with_inputs_and_multiple_outputs(15, 22);

    let (multiplication, addition, subtraction) = function_with_inputs_and_multiple_outputs(15, 22);

    println!(
        "
    multiplication: {}, 
    addition: {}, 
    subtraction: {}, 
    combined: {:?}",
        multiplication, addition, subtraction, answer2
    );
    /*
    multiplication: 330,
    addition: 37,
    subtraction: -7,
    combined: (330, 37, -7)
    */

    // Code blocks are like function but don't need a declaration. They an isolate operations
    let full_name: String = {
        let first_name: &str = "Cristi";
        let last_name: &str = "Albu";
        format!("{} {}", first_name, last_name)
    };

    println!("{}", full_name); // Cristi Albu

    //  Taking inputs from a user
    let mut n: String = String::new();

    // Using the std library, in/out
    std::io::stdin()
        .read_line(&mut n)
        .expect("failed to read input.");

    let n: f64 = n.trim().parse().expect("invalid input");

    println!("{:?}", n)
}

fn basic_fn() {
    println!("This is a basic function");
}

fn function_with_inputs(name: &str, salary: i32) {
    println!("{} {}", name, salary)
}

fn function_with_inputs_and_outputs(num1: i32, num2: i32) -> i32 {
    num1 * num2
}

fn function_with_inputs_and_multiple_outputs(num1: i32, num2: i32) -> (i32, i32, i32) {
    (num1 * num2, num1 + num2, num1 - num2)
}
