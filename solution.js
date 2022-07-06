console.log(3 == "3");
console.log(3 === "3");
// console.log(3 (= "3"));
// // 2:
let myVar = true;
console.log(!myVar ? "good morning" : "good evening");
// 3:
let firstName = "" || "John" || 0;
let zero = ("" && false) || 0;
let emptyStr = "" || (false && "Hello World");
let seven = (75 || "nine") && 7;
console.log(firstName, zero, emptyStr, seven);
