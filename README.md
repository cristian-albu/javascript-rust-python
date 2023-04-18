# Learning computer science with TypeScript, Python, and Rust

## In this project I want to acomplish two things:

- Learn the basics of computer science and web development
- Learn `TypeScript`, `Python`, and `Rust`.

Each chapter will have the same code but in different languages. No automatic conversion is allowed. Each chapter must be completed with the proper patterns for each language. At the end of this project, some databases will be used such as `MongoDB` and `MySQL`.

Each chapter will contain a folder `typescript`, `python`, and `rust`. In the typescript folder you will run

### Typescript

To use typescript and node:

```
npm init -y
npm install -D typescript @types/node
```

Then you will create a `tsconfig.json` that will contain

```
{
    "compilerOptions": {
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "target": "ES2020",
      "sourceMap": true,
      "outDir": "dist",
    },
    "include": ["src/**/*"],
  }
```

The `.ts` files will be created inside a `src` folder. The main file will be `index.ts`.

Then you will be able to run:

```
npm run build
node dist/index.js
```

### Rust

In order to use rust:

```
cargo init

// Or

cargo new <project_name>
```

After the project is initialized you can run:

```
rustc main.rs
./main

// Or

cargo run
```

### Python

To use python you will create a new file `main.py`.

### THEORY

Each folder will also contain a file called `THEORY.md`, where are the logic, theory, and tasks will be written.

Because I want to be a better developer, I will use WSL2 (Ubuntu-22.04) to work in. No prior experience in Linux.

After completing a chapter, a "✅" will be added next to it.

## Learning chapters:

1. Variables. Data types
2. Operators
3. Program structure
4. Structures
   - Decision
   - Repetition
5. Elementary Algorithms
   - Sum of digits
   - Number of digits
   - Number opposite
   - Is N a palindrom
   - Is N a prime number
   - Prime factors
   - Lowest prime factor
   - Highest prime factor
6. Unidimensional arrays
   - Reading, output, parsing
   - Interclassification
   - Recursion
   - Sorting
     - Bubble sort
     - Insertion sort
     - Selection sort
     - Quick sort
     - Merge sort
     - Bogo sort
   - Searching
     - Binary search
     - Greedy search
     - Lee's algorithm
   - Deleting, inserting
   - Prop verification
7. Bidimensional arrays
   - Reading, output, parsing
   - Random
   - Quadratic
     - Main diagonal
     - Secondary diagonal
   - Parsing
     - Outline
     - Zones
     - Snake
   - Prop verification
8. Sub-programs
9. Data structures
   - Lists
   - Stacks
   - Queues
   - Hash table
   - Maps, sets
10. Trees
    - Creating a tree
    - Inverting a binary tree
    - Depth first search
    - Breadth first search
11. Graphs
    - Creating a graph
    - Dijkstra's algorithm
12. Strings and prefefined functions
13. Extra
    - Simple Backtracking
    - Plan Backtracking
    - Frequency vector
    - Sequence
14. File system
    - Read files
    - Write/Create files
    - Delete files
15. APIs
    - Rest
    - GraphQL
16. Web scraping
17. Databases
    - CRUD MongoDB
    - CRUD MySQL
18. Data analysis and vizualization
