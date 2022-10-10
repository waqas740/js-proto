## Add common method in Array,Object and String proptotype

- proto.underscore added some helper function with underscore(\_) prefix into prototype of Array/string/Object.
- All method are immutable.

## Installation

```sh
npm i proto.underscore --save
```

## Usage

```sh
const proto = require('proto.underscore');
proto.init({Array:true,Object:true,String:true});

```

## Methods

### String Method

| Method             | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| \_capitalize       | capitalizes the first letter of the string                                                         |
| \_toTitleCase      | convert first letter of each word capitalized                                                      |
| \_toSwapCase       | all letters changed to uppercase or lowercase depending on current case of letter (upper or lower) |
| \_toCamelCase      | convert string into camel Case                                                                     |
| \_toPascalCase     | convert string into pascal Case                                                                    |
| \_toDotCase        | convert string into dot case. e.g hello.world                                                      |
| \_toSlugCase       | convert string into slug case. e.g hello-world                                                     |
| \_truncate         | truncates the given string to the specified length                                                 |
| \_mask             | masks a portion of a string with a repeated character                                              |
| \_isJson           | checks if the string is a valid JSON string or not                                                 |
| \_camelToSnakeCase | converts a camelCase string to snake case string                                                   |
| \_chars            | convert string to array of characters                                                              |
| \_escape           | escape string for use in HTML attributes.                                                          |
| \_unescape         | unescape string for use in HTML attributes.                                                        |
| \_words            | convert string to array of words                                                                   |

### Object Method

| Method            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| \_flip            | To swap the keys and values of an object                     |
| \_sort            | sort an object by keys                                       |
| \_pick            | pick specific keys from an object                            |
| \_omit            | omit specific keys from an object                            |
| \_clone           | deep clone                                                   |
| \_merge           | merge multiple object                                        |
| \_size            | get the size of an object like number of keys                |
| \_keys            | get all keys from an object. it's equal to Object.keys()     |
| \_values          | get all values from an object. it's equal to Object.values() |
| \_capitalizeKeys  | convert all keys to title case                               |
| \_toLowerCaseKeys | convert all keys to lower case                               |
| \_toUpperCaseKeys | convert all keys to upper case                               |

### Array Method

| Method         | Description                                                |
| -------------- | ---------------------------------------------------------- |
| \_capitalize   | convert each element to capitalize if element is a string  |
| \_toTitleCase  | convert each element to title case if element is a string  |
| \_toLowerCase  | convert each element to lower case if element is a string  |
| \_toUpperCase  | convert each element to lower case if element is a string  |
| \_toCamelCase  | convert each element to lower case if element is a string  |
| \_toPascalCase | convert each element to pascal case if element is a string |
| \_toSnakeCase  | convert each element to snake case if element is a string  |
| \_toSlugCase   | convert each element to slug case if element is a string   |
| \_sum          | sum of all integer element in the array                    |
| \_min          | find min number with the array                             |
| \_max          | find max number with the array                             |
| \_random       | get random element of the array                            |
| \_chunk        | create chunk of array                                      |
| \_isEquivalent | check the array is equivalent to another array             |
| \_head         | get first element of array                                 |
| \_last         | get last element of array                                  |
| \_fromPairs    | To swap the keys and values in an object                   |
| \_hashCode     | To swap the keys and values in an object                   |
| \_insert       | insert data into specific index                            |
| \_deleteAt     | delete data from specific index                            |
| \_at           | get element data from specific index                       |

## Examples

### String Methods

- \_capitalize

```javascript
const word = "hello world";
const updatedWord = word._capitalize();
console.log(updatedWord); // output: Hello world
```

- \_toTitleCase

```javascript
const word = "hello world";
const updatedWord = word._toTitleCase();
console.log(updatedWord); // output: Hello World
```

- \_toSwapCase

```javascript
const word = "hello World";
const updatedWord = word._toSwapCase();
console.log(updatedWord); // output: HELLO wORLD
```

- \_toCamelCase

```javascript
const word = "Hello World";
const updatedWord = word._toCamelCase();
console.log(updatedWord); // output: helloWorld
```

- \_toPascalCase

```javascript
const word = "hello World";
const updatedWord = word._toPascalCase();
console.log(updatedWord); // output: HelloWorld
```

- \_toDotCase

```javascript
const word = "hello World";
const updatedWord = word._toDotCase();
console.log(updatedWord); // output: hello.World
```

- \_toSnakeCase

```javascript
const word = "hello World";
const updatedWord = word._toSnakeCase();
console.log(updatedWord); // output: hello_world
```

- \_toSlugCase

```javascript
const word = "hello World";
const updatedWord = word._toSlugCase();
console.log(updatedWord); // output: hello-world
```

- \_truncate

```javascript
const word = "hello World";
const updatedWord = word._truncate(5);
console.log(updatedWord); // output: hello...
```

- \_mask

```javascript
const word = "hello World";
const updatedWord = word._mask(5, "*");
console.log(updatedWord); // output: hello******
```

- \_isJson

```javascript
const word = "{'hello':'hello','world':'world'}";
const updatedWord = word._isJson();
console.log(updatedWord); // output: true
```

- \_camelToSnakeCase

```javascript
const word = "helloWorld";
const updatedWord = word._camelToSnakeCase();
console.log(updatedWord); // output: hello_world
```

- \_chars

```javascript
const word = "hello World";
const updatedWord = word._chars();
console.log(updatedWord); // output: ["h", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```

- \_words

```javascript
const word = "hello World";
const updatedWord = word._words();
console.log(updatedWord); // output: ["hello", "World"]
```

- \_toTitleCase

```javascript
const word = "hello World";
const updatedWord = word._toTitleCase();
console.log(updatedWord); // output: Hello World
```

### Object Methods

- \_flip

```javascript
const object = { a: 1, b: 2 };
const updatedObject = object._toTitleCase();
console.log(updatedObject); // output: { 1: "a", 2: "b" }
```

- \_sort

```javascript
const object = { a: 2, b: 1 };
const updatedObject = object._sort();
console.log(updatedObject); // output: { b:1,a:2 };
```

- \_pick

```javascript
const object = { a: 1, b: 2 };
const updatedObject = object._pick(["a"]);
console.log(updatedObject); // output: {a:1}
```

- \_omit

```javascript
const object = { a: 1, b: 2 };
const updatedObject = object._omit(["a"]);
console.log(updatedObject); // output: {b:2}
```

- \_clone

```javascript
const object = { a: 1, b: 2 };
const cloneObject = object._clone();
console.log(cloneObject); // output: { a: 1, b: 2 }
```

- \_merge

```javascript
const object = { a: 1, b: 2 };
const mergedObject = object._merge({ a: 3, c: 4 });
console.log(mergedObject); // output: { a: 3, b: 2,c:4 }
```

- \_size

```javascript
const object = { a: 1, b: 2, c: 4 };
const sizeofObject = object._size();
console.log(sizeofObject); // output: 3
```

- \_keys

```javascript
const object = { a: 1, b: 2, c: 4 };
const objectKeys = object._keys();
console.log(objectKeys); // output: [a,b,c]
```

- \_values

```javascript
const object = { a: 1, b: 2, c: 4 };
const objectValues = object._values();
console.log(objectValues); // output: [1,2,4]
```

- \_capitalizeKeys

```javascript
const object = { HelloWord: "HelloWord", capWord: "capWord" };
const updateObject = object._capitalizeKeys();
console.log(updateObject); // output: { "helloWord": "HelloWord","capWord":"capWord"};;
```

- \_toLowerCaseKeys

```javascript
const object = { HelloWord: "HelloWord", capWord: "capWord" };
const updateObject = object._toLowerCaseKeys();
console.log(updateObject); // output: { "Helloword": "HelloWord","capword":"capWord"}
```

- \_toUpperCaseKeys

```javascript
const object = { HelloWord: "HelloWord", capWord: "capWord" };
const updateObject = object._toUpperCaseKeys();
console.log(updateObject); // output: { "HELLOWORD": "HelloWord","CAPWORD":"capWord"}
```

### Array Methods

- \_capitalize

```javascript
const array = [1, 2, 3, "4", "a", "hello", "WORD", "lETTER"];
const updateArray = array._capitalize();
console.log(updateArray); // output: [1, 2, 3, "4", "A", "Hello", "WORD", "LETTER"]
```

- \_toLowerCase

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  { a: 1 },
  "A",
  "hello",
  "WORD",
  "LeTtER",
];
const updateArray = array._toLowerCase();
console.log(updateArray); // output: [1,2,3,"4",[1, "3"],{ a: 1 }, "a", "hello","word", "letter"]
```

- \_toUpperCase

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  { a: 1 },
  "A",
  "hello",
  "WORD",
  "LeTtER",
];
const updateArray = array._toUpperCase();
console.log(updateArray); // output: [1,2,3,"4",[1, "3"],{ a: 1 },"A", "HELLO","WORD","LETTER"]
```

- \_sum

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  { a: 1 },
  "A",
  "hello",
  "WORD",
  "LeTtER",
];
const sum = array._sum();
console.log(sum); // output:6
```

- \_min

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  { a: 1 },
  "A",
  "hello",
  "WORD",
  "LeTtER",
];
const min = array._min();
console.log(min); // output:1
```

- \_chunk

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  { a: 1 },
  "A",
  "hello",
  "WORD",
  "LeTtER",
];
const chunk = array._chunk(5);
console.log(chunk); // output:[[1,2,3,"4",[1, "3"]],[{ a: 1 }, "A","hello","WORD", "LeTtER"]]
```

- \_unique

```javascript
const array = [
  1,
  2,
  3,
  "4",
  [1, "3"],
  2,
  "4",
  { a: 1 },
  { a: 1 },
  null,
  undefined,
  [8],
  "a",
  "A",
  "a",
  "LeTTer",
  [8],
  "LeTTer",
];
const chunk = array._unique();
console.log(chunk); // output:[1,2,3,"4",[1,"3"],{a:1},null, undefined,[8],"a", "A","LeTTer"]
```
