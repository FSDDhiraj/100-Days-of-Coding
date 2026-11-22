//Revision of topics Javascript: operators
//operators are symbols that perform operations on operands. In JavaScript, there are several types of operators, including:

//1. Arithmetic Operators: These operators are used to perform mathematical operations on numbers. Examples include + (addition), - (subtraction), * (multiplication), / (division), and % (modulus).
//Example :
let x = 5;
let y = 2;
console.log(x + y); // Output: 7
console.log(x - y); // Output: 3
console.log(x * y); // Output: 10
console.log(x / y); // Output: 2.5
console.log(x % y); // Output: 1

//2. Assignment Operators: These operators are used to assign values to variables. Examples include = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), and /= (division assignment).
//Example :
// let a = 10;
// a += 5; // equivalent to a = a + 5
// console.log(a); // Output: 15
// a -= 3; // equivalent to a = a - 3
// console.log(a); // Output: 12
// a *= 2; // equivalent to a = a * 2
// console.log(a); // Output: 24
// a /= 4; // equivalent to a = a / 4
// console.log(a); // Output: 6


//3. Comparison Operators: These operators are used to compare two values and return a boolean value (true or false). Examples include == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).
//Example :
// let m = 5;
// let n = 10;
// console.log(m == n); // Output: false
// console.log(m != n); // Output: true
// console.log(m > n); // Output: false
// console.log(m < n); // Output: true
// console.log(m >= n); // Output: false
// console.log(m <= n); // Output: true


//4. Logical Operators: These operators are used to combine multiple boolean expressions. Examples include && (logical AND), || (logical OR), and ! (logical NOT).
//Example :
// let p = true;
// let q = false;
// console.log(p && q); // Output: false
// console.log(p || q); // Output: true
// console.log(!p); // Output: false


//5. Bitwise Operators: These operators are used to perform bit-level operations on binary numbers. Examples include & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), and >>> (unsigned right shift).
//Example :
// let r = 5; // binary: 0101
// let s = 3; // binary: 0011
// console.log(r & s); // Output: 1 (binary: 0001)
// console.log(r | s); // Output: 7 (binary: 0111)
// console.log(r ^ s); // Output: 6 (binary: 0110)
// console.log(~r); // Output: -6 (binary: 1010)
// console.log(r << 1); // Output: 10 (binary: 1010)
// console.log(r >> 1); // Output: 2 (binary: 0010)
// console.log(r >>> 1); // Output: 2 (binary: 0010)


//6. Ternary Operator: This operator is a shorthand for an if-else statement. It takes three operands and is represented by the symbol ? : . The syntax is condition ? expression1 : expression2, where expression1 is executed if the condition is true, and expression2 is executed if the condition is false.
//Example :
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes


//7. Type Operators: These operators are used to check the type of a variable or value. Examples include typeof (returns the type of a variable) and instanceof (checks if an object is an instance of a specific class).
//Example :
// let x = 5;
// let y = "hello";
// let z = true;
// console.log(typeof x); // Output: number
// console.log(typeof y); // Output: string
// console.log(typeof z); // Output: boolean
// console.log(x instanceof Number); // Output: false
// console.log(y instanceof String); // Output: false
// console.log(z instanceof Boolean); // Output: false


//8. String Operators: These operators are used to manipulate strings. The most common string operator is + (concatenation), which combines two or more strings into one.
//Example :
// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1 + " " + str2; // concatenation
// console.log(str3); // Output: Hello World
// //there are also other string methods and operators available in JavaScript, such as template literals (using backticks and ${} for interpolation), which allow for more complex string manipulation.
// //Example : 
// let name = "Alice";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, Alice!
// //Example 2 :
// let str4 = "JavaScript";
// let str5 = str4.toUpperCase(); // converts to uppercase
// console.log(str5); // Output: JAVASCRIPT
// let str6 = str4.toLowerCase(); // converts to lowercase
// console.log(str6); // Output: javascript
// let str7 = str4.slice(0, 4); // extracts a portion of the string
// console.log(str7); // Output: Java


//more usefull string methods which are used mostly in javascript are :
//1. charAt(): Returns the character at a specified index in a string.
//2. concat(): Combines two or more strings into one.
//3. includes(): Checks if a string contains a specified substring.
//4. indexOf(): Returns the index of the first occurrence of a specified substring in a string.
//5. replace(): Replaces a specified substring with another substring in a string.
//6. split(): Splits a string into an array of substrings based on a specified delimiter.
//7. trim(): Removes whitespace from both ends of a string.
//8. length: Returns the length of a string.
//9. charCodeAt(): Returns the Unicode value of the character at a specified index in a string.
//10. fromCharCode(): Converts Unicode values to characters and returns a string.
//11. match(): Searches a string for a specified pattern and returns the matches as an array.
//12. search(): Searches a string for a specified pattern and returns the index of the first match.
//13. toString(): Converts a value to a string representation.
//14. valueOf(): Returns the primitive value of a string object.
//15. String.fromCharCode(): Converts Unicode values to characters and returns a string.
//16. String.fromCodePoint(): Converts Unicode code points to characters and returns a string.
//17. String.raw(): Returns a raw string representation of a template literal, preserving escape sequences.
//18. String.prototype.normalize(): Normalizes a string to a specified Unicode normalization form.
//19. String.prototype.padStart(): Pads the beginning of a string with a specified character until it reaches a specified length.
//20. String.prototype.padEnd(): Pads the end of a string with a specified character until it reaches a specified length.
// This are Examples for above methods :
// let str8 = "Hello, World!";
// console.log(str8.charAt(7)); // Output: W
// console.log(str8.concat(" How are you?")); // Output: Hello, World! How are you?
// console.log(str8.includes("World")); // Output: true
// console.log(str8.indexOf("o")); // Output: 4
// console.log(str8.replace("World", "JavaScript")); // Output: Hello, JavaScript!
// console.log(str8.split(", ")); // Output: [ 'Hello', 'World!' ]
// console.log(str8.trim()); // Output: Hello, World!
// console.log(str8.length); // Output: 13
// console.log(str8.charCodeAt(0)); // Output: 72
// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: Hello
// console.log(str8.match(/o/g)); // Output: [ 'o', 'o' ]
// console.log(str8.search("World")); // Output: 7
// console.log(str8.toString()); // Output: Hello, World!
// console.log(str8.valueOf()); // Output: Hello, World!
// console.log(String.fromCodePoint(128512)); // Output: 😀
// console.log(String.raw`Hello\nWorld`); // Output: Hello\nWorld
// console.log(str8.normalize("NFC")); // Output: Hello, World!
// console.log(str8.padStart(20, "*")); // Output: *******Hello, World!
// console.log(str8.padEnd(20, "*")); // Output: Hello, World!*******

//9. Comma Operator: This operator allows multiple expressions to be evaluated in a single statement, returning the value of the last expression. It is represented by the symbol , (comma).
//Example :
// let a = (1, 2, 3);
// console.log(a); // Output: 3 (the value of the last expression)


//10. Unary Operators: These operators operate on a single operand. Examples include + (unary plus), - (unary minus), ++ (increment), -- (decrement), and delete (removes a property from an object).
//Example :
// let b = 5;
// b++; // equivalent to b = b + 1
// console.log(b); // Output: 6
// b--; // equivalent to b = b - 1
// console.log(b); // Output: 5
// delete b; // removes the variable b (not recommended for variables)
// console.log(b); // Output: undefined (if b was a property of an object, it would be removed)


//11. Relational Operators: These operators are used to compare two values and determine their relationship. Examples include in (checks if a property exists in an object) and instanceof (checks if an object is an instance of a specific class).
//Example :
// let obj = { name: "Alice", age: 25 };
// console.log("name" in obj); // Output: true
// console.log("gender" in obj); // Output: false
// console.log(obj instanceof Object); // Output: true

//---------------------------------------------------------------------------------------------------------------
//12. Spread Operator: This operator allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected. It is represented by the symbol ... (three dots).

//13. Optional Chaining Operator: This operator allows you to safely access deeply nested properties of an object without having to check for the existence of each property along the way. It is represented by the symbol ?. (question mark followed by a dot).

//14. Nullish Coalescing Operator: This operator returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is represented by the symbol ?? (double question mark).

//15. Exponentiation Operator: This operator is used to raise a number to the power of another number. It is represented by the symbol ** (double asterisk).

//16. Destructuring Assignment: This operator allows you to unpack values from arrays or properties from objects into distinct variables. It uses curly braces {} for objects and square brackets [] for arrays.