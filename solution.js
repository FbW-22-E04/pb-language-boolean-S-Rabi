console.log("2");
console.log("7");
console.log("9");
// // 2:
let myVar = true;
console.log(!myVar ? "good morning" : "good evening");
// 3:
let firstName = "" || "John" || 0;
let zero = ("" && false) || 0;
let emptyStr = ("" && false) || "Hello World";
let seven = (75 || "nine") && 7;
console.log(firstName, zero, emptyStr, seven);
