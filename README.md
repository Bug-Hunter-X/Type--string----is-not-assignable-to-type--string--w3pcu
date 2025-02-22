# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.  The code attempts to pass a string array to the `greeter` function, which expects a single string. This results in a type error.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts`.
3. Run `tsc bug.ts` to compile the TypeScript code.
4. Observe the compilation error.

## Solution

The solution involves modifying the code to either pass a single string to the function or modify the function's signature to accept an array of strings and handle it accordingly.