# 0x04. Typescript
### Resources
[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
[TypeScript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

Running the files:
Install all dependencies: `npm install`
Start the application `npm run start-dev`

## Tasks
0. Creating an interface for a student

Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, .`eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

- Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

Requirements:

- When running, Webpack should return `No type errors found`.
- Every variable should use TypeScript when possible.

File: `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`