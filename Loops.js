// for Loop

// var num = 19;
// for (var i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num * i);
// }

// Write a program using for loop to print alphabet order of A to Z using ASCII value for A is 65 and Z is 90.

// String.fromCharCode() : It converts the ASCII values to their corresponding characters.
// ASCII : It stands for American Standard Code for Information Interchange. Each letter, number, symbol, or control character is assigned a unique numerical value (code).

// for( i = 65; i<=90; i++){
//     console.log(String.fromCharCode(i));
// }

//To print  the alphabet bettwen E to S

// for( i = 65; i<=90; i++){
//     if (i >= 69 && i <= 83 ){
//         console.log(String.fromCharCode(i));
//     }
//     continue;
// }

// Reverse
// for (var i = 10; i >= 1; i--) {
//     console.log(num + " x " + i + " = " + num * i);
// }

var color = ["red", "orange", "pink", "gray", "white"];

// for(var i = 0; i < color.length; i++){
//     console.log(color[i]);
// }
// console.log(color.length)

// while Loop

// var i = 0;
// while (i < color.length) {
//     console.log(color[i]);
//     i++;
// }


// do...while Loop

// var i = 0;
// do {
//     console.log(i)
//     i++
// } while (i >= 5); // 1


// for...in Loop

// var obj = {
//     pro1 : "value1",
//     pro2 : "value2",
//     pro3 : "value3"
// }

// for (var key in object) {
//     console.log(object[key])
// }


var person ={
    myName : "Jigyashu",
    age : 26,
    city : "Gaya",
    contact : 878902,
}

var myName = 'Jigyashu Kumar Gupta';

// for (var i in myName){
//     console.log(i + " -> " + myName[i]);
// }

for (var i in person){
    console.log(i + " -> " + person[i]);
}

// for(var i in color){
//     console.log(i + " -> " + color[i]);
// }

// for...of Loop

// for (var element of object) {
    
// }

// for(var i of color){
//     console.log(i);
// }

var myName = 'Jigyashu Kumar Gupta';
// for(var i of myName){
//     console.log(i);
// }


// for (var key of Object.keys(person).reverse()) {
//   console.log(key + " -> " + person[key]);
// }
