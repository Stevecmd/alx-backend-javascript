# 0x03. ES6 data manipulation

| File Name | Description |
| ------------ | ----------- |
| `0-get_list_students.js` | Returns an array of objects representing students |
| `1-get_list_student_ids.js` | Returns an array of student IDs from a list of objects |
| `2-get_students_by_loc.js` | Returns an array of students who are located in a specific city |
| `3-get_ids_sum.js` | Returns the sum of all student IDs |
| `4-update_grade_by_city.js` | Updates student grades in a given city |
| `5-typed_arrays.js` | Returns a new ArrayBuffer with an Int8 value at a specific position |
| `6-set.js` | Returns a Set from an array |
| `7-has_array_values.js` | Returns a boolean if all elements in the array exist within the set |
| `8-clean_set.js` | Returns a string of all set values that start with a specific string |
| `9-groceries_list.js` | Returns a map of groceries with items and quantities |
| `10-update_uniq_items.js` | Updates the quantities for items with initial quantity at 1 |

#### Setup
Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```sh
$ nodejs -v
v12.11.1
```
```sh
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

#### Configuration files

Add the following files to your project directory
`package.json`
```sh

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```

`babel.config.js`
```sh

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```

`.eslintrc.js`
```sh

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```
and…

Don’t forget to run `$ npm install` when you have the `package.json`

Run Eslint with `$ npm run lint` or `$ npm run check-lint` or <br />
`npx eslint <filename>` for example `npx eslint 0-get_list_students.js` 

Run Jest with `$ npm run test`

Run full tests with `$ npm run full-test`

Run Babel with `$ npm run dev <filename>` for example `$ npm run dev 0-get_list_students.js`
or `npx babel-node <filename>` for example `npx babel-node 0-get_list_students.js`.

## Tasks
0. Basic list of objects

Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

- `Guillaume`, id: `1`, in `San Francisco`
- `James`, id: `2`, in `Columbia`
- `Serena`, id: `5`, in `San Francisco`

```sh

stevecmd@ubuntu:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]

stevecmd@ubuntu:~$ npm run lint 0-get_list_students.js
stevecmd@ubuntu:~$ npm run dev 0-get_list_students.js

> dev
> npx babel-node 0-get_list_students.js
```

File: `0-get_list_students.js`


1. More mapping
Create a function `getListStudentIds` that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.
```sh
stevecmd@ubuntu:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
```

File: `1-get_list_student_ids.js`

2. Filter
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.
```sh
stevecmd@ubuntu:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

File: `2-get_students_by_loc.js`

3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.
```sh
stevecmd@ubuntu:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 3-main.js 
8
```
File: `3-get_ids_sum.js`

 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a city (String), and `newGrades` (Array of “grade” objects) as parameters.
`newGrades` is an array of objects with this format:
```sh
  {
    studentId: 31,
    grade: 78,
  }
```
If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.
```sh
stevecmd@ubuntu:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
```

```sh
stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
```

 File: `4-update_grade_by_city.js`

 5. Typed Arrays
Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.
```sh
stevecmd@ubuntu:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
```

 File: `5-typed_arrays.js`

 6. Set data structure
Create a function named `setFromArray` that returns a `Set` from an array.

It accepts an argument (Array, of any kind of element).
```sh
stevecmd@ubuntu:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
```

File: `6-set.js`

7. More set data structure
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a `set` (Set) and an `array` (Array).
```sh
stevecmd@ubuntu:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 7-main.js 
true
false
false
```
File: `7-has_array_values.js`

8. Clean set
Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a set (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -.

```sh
stevecmd@ubuntu:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 8-main.js 
jovi-aparte-appetit
```
File: `8-clean_set.js`

9. Map data structure
Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):
```sh
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5

Result:
```
```sh
stevecmd@ubuntu:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
stevecmd@ubuntu:~$ 
```
File: `9-groceries_list.js`


10. More map data structure
Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.
```sh
stevecmd@ubuntu:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

stevecmd@ubuntu:~$ 
stevecmd@ubuntu:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}

```
File: `10-update_uniq_items.js`

