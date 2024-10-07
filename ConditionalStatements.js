// if Statement

// var age = 15;
//     // true
// if(age >= 18){
//     // true block
//     console.log("Your are good to vote!");
// }


// if - else Statement

// var age = 25;
//     // false
// if(age >= 18){
//     // true block
//     console.log("Your are good to vote!");
// } else {
//     // false block
//     console.log("Your are under age!");
// }

// if - else - if Statement

// var age = 165;
//     // 1st cond.
// if (age < 18) {
//     // true block
//     console.log("You have no right to vote!");
//             // 2nd cond.
// } else if (age >= 18 && age <= 60) {
//     console.log("Your are good to vote!");
//             // 3rd cond.
// } else if (age >= 61 && age <= 100) {
//     console.log("Your are 60+!");
// }
// else {
//     console.log("enter valid age");
// }

// less 18 not right for vote;
// age 18 to 60 Your are good to vote!
// 60+ not eligibale.

// #Task
var a = 500;
var b = 500;
var c = 200;


// For Find Smallest number;
// if(a<=b&&a<=c){
//     console.log("a is smallest");
// }

// else if(b<=a&&b<=c){
//     console.log("b is smallest");
// }

// else{
//     console.log("c is smallest")
// }

// Find Greater number
// if(a<b||b>c){
//     console.log("b is greater");
// }

// else if(a>b||c<a){
//     console.log("a is greater");
// }

// else{
//     console.log("c is greater")
// }

if(a >= b && a >= c){
    console.log(a);
} else if(b >= a && b >= c){
    console.log(b);
} else {
    console.log(c);
}
