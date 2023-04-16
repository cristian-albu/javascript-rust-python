# Rust

### ✅ Strings

📌 **String literals:**

```rust
let s1 = "Hello, world!";
```

String literals are a sequence of characters enclosed in double quotes.
They have a fixed size and cannot be modified.
Rust infers the type of a string literal to be `&str`, which is a slice pointing to a sequence of UTF-8 bytes.

📌 **String type:**

```rust
let s2 = String::from("Hello, world!");
```

The `String` type is a growable, heap-allocated string.
It can be created using the `String::from` method, which takes a string slice as an argument.

For example, in the context of strings, the `String::from` method is used to create a new `String` value from a string slice `&str`. The from method takes the `&str` slice as an argument and creates a new `String` by allocating memory on the heap and copying the contents of the slice into the newly allocated memory.

Here's an example of using `String::from` to create a new `String` from a string slice:

```rust
let my_str:&str = "hello";
let my_string = String::from(my_str);
```

📌 **Updating a string:**

```rust
let mut s3 = String::from("foo");
s3.push_str("bar");
```

Strings can be modified by using methods like `push_str` to add a string slice to the end of the string.
Since `s3` is mutable, we can add "bar" to the end of it using `push_str`.

📌 **Concatenating strings:**

```rust
let s4 = s2 + ", " + &s3;
```

The `+` operator can be used to concatenate two `String` values or a `&str` slice and a `String` value.
Since `s2` is a `String` and `s3` is a `&str`, we can concatenate them using the `+` operator.
However, note that the `+` operator takes ownership of its arguments and returns a new `String` value.

Another exampele with `concat()`

```rust
let hello = "Hello,";
let world = " world!";
let message = hello.to_string().concat(world);
println!("{}", message); // prints "Hello, world!"
```

📌 **String interpolation:**

```rust
let s5 = format!("The value of x is {}.", 42);
```

Rust provides the `format!` macro for string interpolation.
It works by replacing `{}` placeholders with values specified in the argument list.
In this case, the value of `42` is interpolated into the string `"The value of x is {}."` to produce the string `"The value of x is 42."`.

📌 **String popping:**

```rust
let mut s = String::from("hello");
let last_char = s.pop();
```

In this example, we first create a `String` named `s` with the value "hello". We then call the `pop()` method on `s`, which removes and returns the last character of the string (in this case, the letter "o"). We store the result in the variable `last_char`, which is an `Option<char>` type since `pop()` might return `None` if the string is empty.

```rust
match last_char {
    Some(c) => println!("The last character is '{}'", c),
    None => println!("The string is empty"),
}
```

We then use a `match` expression to handle the `Some` and `None` cases separately. If `pop()` returned `Some(c)`, we print the message "The last character is 'c'", where `c` is the actual character that was popped off the string. If `pop()` returned `None`, we print the message "The string is empty".

```rust
println!("The modified string is '{}'", s); // prints "The modified string is 'hell'"
```

Finally, we print the contents of `s` to the console, which should be the modified string "hell" since we popped off the last character "o".
