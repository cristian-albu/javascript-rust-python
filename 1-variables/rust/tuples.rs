pub fn tuples(){
    //? -------------------TUPLES-----------------------

    let my_tuple: (&str, i32) = ("Salary", 40_000);
    println!("{} is equal to {}", my_tuple.0, my_tuple.1); // Salary is equal to 40000

    println!("Another way of printing the whole tuple is {:?}", my_tuple); //Another way of printing the whole tuple is ("Salary", 40000)

    let (salary, salary_value) = my_tuple;
    println!("{}{}", salary, salary_value);// Salary40000

    let salary: &str = my_tuple.0;
    let salary_value: i32 = my_tuple.1;
    println!("{}{}", salary, salary_value);// Salary40000


    let nested_tuple:(i32, f64, (i32, i32), &str) = (4, 5.0, (3,2),"Hello");

    let element: i32 = nested_tuple.2.0; 
    println!("{}", element); //3

    let _empty_tuple:() = ();
}