## JSON (JavaScript Object Notation)

lightweight data interchange format that is widely used for transmitting data between a server and a web application. In JavaScript, you can work with JSON using built-in functions and methods to parse and stringify JSON data.

## Features of JSON

1. Lightweight and Readable: JSON is a lightweight data format, which means it has a minimal overhead in terms of size. It uses a simple syntax with key-value pairs, making it easy to read and write for both humans and machines.

2. Easy to Understand and Use: JSON is based on JavaScript syntax, which is familiar to many developers. It uses a straightforward structure of nested objects and arrays, making it intuitive and easy to work with.

3. Language Agnostic: JSON is not tied to any specific programming language or platform. It is supported by a wide range of programming languages, making it an ideal choice for interoperability between different systems.

4. Wide Support: JSON is widely supported by various frameworks, libraries, and databases. It has become a de facto standard for data interchange in web applications and APIs.

5. Data Types: JSON supports several common data types, including strings, numbers, booleans, arrays, and objects. It also allows for null values. This flexibility enables representing complex data structures and relationships.

6. Human-Readable and Self-Describing: JSON's structure is easy to understand and visually parse, making it human-readable. Additionally, JSON data is self-describing, as the keys provide context and meaning to the corresponding values.

7. Efficient Data Transfer: JSON data can be easily serialized and deserialized, enabling efficient transmission of data over networks. It is commonly used for sending data between web browsers and servers.

8. Compatibility with JavaScript: JSON seamlessly integrates with JavaScript, as JavaScript objects can be converted to JSON and vice versa using built-in functions (`JSON.parse()` and `JSON.stringify()`). This feature makes it convenient for working with JSON data in JavaScript-based applications.

9. Support for Complex Data Structures: JSON allows nesting objects and arrays within each other, providing a flexible way to represent complex data structures and hierarchical relationships.

10. Wide Industry Adoption: JSON has gained widespread adoption in the software industry, particularly for web development and APIs. It is well-documented and has extensive community support, making it easy to find resources and libraries for working with JSON.

## How to write JSON

1. `JSON Object`:JSON object is defined within curly braces {} and contains key-value pairs. The keys must be strings, and the values can be of any valid JSON data type (string, number, boolean, object, array, or null). The key and value are separated by a colon :. Multiple key-value pairs are separated by commas ,.

```
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

2. `JSON Array`:
   A JSON array is an ordered list of values enclosed within square brackets []. The values can be of any valid JSON data type and are separated by commas.

```
["apple", "banana", "orange"]
```

3. `Nested Objects and Arrays`:
   JSON allows nesting objects and arrays within each other to represent complex data structures. Objects can contain other objects or arrays, and arrays can contain objects or other arrays.

```{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "swimming", "traveling"]
}
```

### JSON Datatypes

`JSON Data Types`:

- `String`: Enclosed within double quotes "".
- `Number`: Can be an integer or a floating-point number.
- `Boolean`: true or false.
- `Object`: Enclosed within curly braces {}.
- `Array`: Enclosed within square brackets [].
- `Null`: Represented by the keyword null.

### Example

```
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "scores": [95, 87, 92, 98],
  "address": null
}
```
