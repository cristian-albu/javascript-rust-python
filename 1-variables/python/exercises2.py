
# TODO 1
# Modify the program below by adding suitable functions so that it compiles correctly

# fn ex1() {
#     let x: i32 = (5 + 3) * (6 + 4);
#     let y: i32 = times(add_3(5), add_4(6));
#     assert_eq!(x, y);
#     println!("Good job!");
# }

# fn add_3(num: i32) -> i32 {
#     num + 3
# }

# fn add_4(num: i32) -> i32 {
#     num + 4
# }

# fn times(num1: i32, num2: i32) -> i32 {
#     num1 * num2
# }

# TODO 2
# Rewrite the main function in a way so that there is no variable in it and it performs the same job as this program. Your program should make calls to both the functions in this program.

# fn double(x: i32) -> i32 {
#     x * 2
# }
# fn triple(x: i32) -> i32 {
#     x * 3
# }

# fn ex2() {
#     println!("Answer: {}", triple(triple(double(5))));
# }


# TODO 3
# Write a function which will accept a tuple called point representing the x-axis and y-axis coordinates of a point.
# The function will compute the distance of the point from the origin and will return the computed distance.
# The template of the function is given below


# fn print_distance(point: (f32, f32)) -> f32 {
#     let (x, y) = point;
#     (x.powf(2.0) + y.powf(2.0)).sqrt()
# }


# Inside the function, first destructure the tuple into (x,y).
# This provides a better readability instead of using point.0 and point.1.
# Next compute the distance from the original using the formula of √(x − 0)2 + (y − 0)2.
# you may consider using the following two functions
# 1).  x.powf(2.0) for computing the square of the number x. 2). x.sqrt() which will compute the square root of a number x.


# Test the program with the following main program

# fn ex3() {
#     println!(
#         "The distance of the point from the origin is {}",
#         print_distance((5.0, 4.0))
#     );

#     
#     Note: we need to enclose the inputs to the function in double paranthesis, i.e., print_distance((5.0,4.0)).
#     This is becuase a single paranthesis will mean two inputs of 5.0 and 4.0 and since the function has one
#     input which is a single tuple therefore the compiler will complain.
#     
# }

#TODO 4 Complete the following code given below by filling in the code corresponding to the comments

# fn area(length: u32, width: u32) -> u32 {
#     # Step 7: write the definition of the area here which is length * width and return the result
#     length * width
# }

# fn ex4() {
#     # Step 1: Write a print statement for asking user to input the width of a rectangle
#     println!("Provide the width of a rectangle");

#     # Step 2: Write code for taking the input from the user of type u32 and store it in the variable of width
#     let mut rect_width: String = String::new();

#     std::io::stdin()
#         .read_line(&mut rect_width)
#         .expect("failed to read input.");

#     let rect_width: u32 = rect_width
#         .trim()
#         .parse()
#         .expect("wrong kind of input. Need a u32");

#     # Step 3: Write a print statement for asking the user to input the length of a rectangle
#     println!("Provide the length of the rectangle");

#     # Step 4: Write code for taking the input from the user of type u32 and store it in the variable of length
#     let mut rect_length: String = String::new();

#     std::io::stdin()
#         .read_line(&mut rect_length)
#         .expect("failed to read input.");

#     let rect_length: u32 = rect_length
#         .trim()
#         .parse()
#         .expect("wrong kind of input. Need a u32");

#     let resultant_area: u32 = {
#         # Step 5: call a function area() inside here with inputs of width and length which will return the area
#         area(rect_width, rect_length)
#     };

#     # Step 6: write code to print the resultant_area variable to the terminal
#     println!("The result is: {:?}", resultant_area)
# }


# TODO 5
#In this exercise question, we will be writting some code that will help us cook an awesome pizza from a given cooking book.
# You are required to write four functions corresponding to some tasks. Some of the tasks may be related to each other also.

 


# Function 1. Write a function called expected_minutes_in_oven that will return a value which indicates
# how many minutes the pizza should be in the oven. According to the cooking book, the expected
# oven time in minutes is 40: Below is the skeleton of the function indicating what is expected from the function to return.


# fn expected_minutes_in_oven() -> i32 {
#     40
# }

# Returns: 40


# Function 2 Write a function called remaining_minutes_in_oven that takes the actual minutes the pizza has been in the oven as an input
# parameter and returns how many minutes the pizza  still has to remain in the oven, based on the expected oven time in minutes from the previous task.


# fn remaining_minutes_in_oven(n: i32) -> i32 {
#     40 - n
# }

# Returns: 10 becuase 40- 30 = 10.


# Function 3 Write a function called preparation_time_in_minutes that takes the number of toppings you added to
# the pizza as a parameter and returns how many minutes you spent preparing the pizza, assuming each layer takes you 2 minutes to prepare.


# fn preparation_time_in_minutes(n: i32) -> i32 {
#     n * 2
# }

# Returns: 4


# Function 4 Write a function called elapsed_time_in_minutes that takes two input parameters: the
# first parameter is the number of toppings you added to the pizza, and the second parameter is the number of minutes the pizza has been in the oven.
# The function should return how many minutes you've worked on cooking the pizza, which is the sum of the preparation time in minutes, and the time in minutes the pizza  has spent in the oven at the moment.

# fn elapsed_time_in_minutes(n1: i32, n2: i32) -> i32 {
#     (n1 * 2) + n2
# }

# Returns: 26

# fn ex5() {
#     expected_minutes_in_oven();
#     remaining_minutes_in_oven(30);
#     preparation_time_in_minutes(2);
#     elapsed_time_in_minutes(3, 20);
# }


# TODO 6
# Consider the program below. Modify the definition of the quadruple function below by calling the
# double function twice (this means that hte quadruple function should only make call to the double
# function and it should call it twice). The quadruple function should return 4 times the number that has been provided to it as an input


# fn double2(x: i32) -> i32 {
#     x * 2
# }

# fn quadruple(x: i32) -> i32 {
#     double2(double2(x))
#     # your code here which will call the double function
# }

# fn ex6() {
#     println!(
#         "For 1: the expected value is 4 while the output is {}",
#         quadruple(1)
#     );

#     println!(
#         "For 2: the expected value is 8 while the output is {}",
#         quadruple(2)
#     );

#     println!(
#         "For 3: the expected value is 12 while the output is {}",
#         quadruple(3)
#     );

#     println!(
#         "For 4: the expected value is 16 while the output is {}",
#         quadruple(4)
#     );
# }
