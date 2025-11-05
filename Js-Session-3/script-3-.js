let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let isStudent = prompt("Are you a student? (true/false)");
let favNum = prompt("Enter your favorite number:");
let nickname = prompt("Enter your nickname:");

let conAge = Number(age);
let conboolean = Boolean(isStudent);
let conFavnum = Number(favNum);

console.log("Name : " + name + " " + " - " + typeof name );
console.log("age : " + age + " " + " - " + typeof conAge );
console.log("isStudent : " + isStudent + " " + " - " + typeof conboolean );
console.log("favNum : " + favNum + " " + " - " + typeof conFavnum );
console.log("nickname : " + nickname + " " + " - " + typeof nickname );