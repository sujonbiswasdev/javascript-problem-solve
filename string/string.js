let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

let text1= 'It\'s alright.';
console.log(text1);

let text2 = "The character \\ is called backslash.";
console.log(text2);

console.log('....'.repeat(20));

let text3 = "The character \t is called backslash.";
console.log(text3);

let text4 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text4);
let y = new String("John");
console.log(y);

let text6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let text7 = "HELLO WORLD";
let char = text7.charAt(0);
const lower = char.toLowerCase()
console.log(lower);


let text8 = "HELLO WORLD";
let char1 = text8.charCodeAt(0);
console.log(char1);

let pointat = "HELLO WORLD";
let code = pointat.codePointAt(0);
console.log(code);

const name = "W3Schools";
let letter = name.at(2);
console.log(letter);
console.log('...'.repeat(10));
let slice1 = "Apple, Banana, Kiwi";
let part = slice1.slice(4,5);
console.log(part);


let str1 = "Apple, Banana, Kiwi";
let part1 = str1.substring(10);
console.log(part1);

let str = "Apple, Banana, Kiwi";
let part2 = str.substr(7, 6);
console.log(part2);


let text10 = "     Hello World!     df";
let text11 = text10.trimStart();
console.log(text11);

let pad = "5";
let padded = pad.padStart(4,"0");
console.log(padded);

let replace1 = "Please visit Microsoft! sss ss";
let newText = replace1.replaceAll('ss', "W3Schools");
console.log(newText);
console.log('..'.repeat(10));

const data="/blog/mange/add"
const split1 = data.split('')
console.log(split1);

let text12 = "Hello";
const myArr = text12.split("");
console.log(myArr);