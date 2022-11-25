// let a = 10;
// let b = 7 * a;
// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;

// const string = "The revolution will not be televised.";
// console.log(string);

// console.log(9 * a);

// console.log(b);

const string = "The revolution will not be televised";

const badString = string;

console.log(badString);

// Single quotes vs double quotes
const sgl = 'Single Quotes';
const dbl = "Double Quotes";
console.log(sgl);
console.log(dbl);

// Escaping characters in a string
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);
    // If we don't use "\", then there's going to be an error as Javascript does not know when the string ends;
        // const bigmouth = 'I've got no right to take my place...';
        // console.log(bigmouth);

// Concatenating strings (Adding things into the string);
const name = "Chris";
const greeting = `Hello, ${name}`; //Both methods of this form works;
const greeting2 = "Hello, " + name; // But I believe sticking to the original method from Java works better;
console.log(greeting);
console.log(greeting2);


