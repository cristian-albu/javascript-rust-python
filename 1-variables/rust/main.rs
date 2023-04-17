// Docs variables: https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
// Docs data types: https://doc.rust-lang.org/book/ch03-02-data-types.html

// Rust is a systems programming language designed for performance and safety.
// It has a strong focus on memory safety, with features like ownership and borrowing to prevent common programming errors like null pointer dereferences and data races.
// Rust is often used for building low-level systems software, like operating systems, web browsers, and game engines.

mod arrays;
mod exercises;
mod exercises2;
mod functions;
mod scalar;
mod strings;
mod tuples;
mod vectors;

fn main() {
    scalar::scalars();
    strings::strings();
    tuples::tuples();
    arrays::arrays();
    exercises::ex_function();
    vectors::vectors();
    functions::functions();
    exercises2::function_exercises();
}
